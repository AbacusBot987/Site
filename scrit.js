const CLIENT_ID = '576011589484-i5girlnvqfjn89m0qgcighl96qc71cqr.apps.googleusercontent.com'; // Replace with your Client ID
    const SHEET_ID = '1xtXHD_absITHumrHNDnlPnmLi_nNrMRZL2PZeEQT-cw'; // Replace with your Google Sheet ID
    const RANGE = 'users'; // Adjust range as needed
    const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';

    let authInstance;

    function loadClient() {
      gapi.load('client:auth2', initClient);
    }

    function initClient() {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: SCOPES,
      }).then(() => {
        authInstance = gapi.auth2.getAuthInstance();

        // Automatically sign in if the user is already authenticated
        if (authInstance.isSignedIn.get()) {
          fetchSheetData();
        } else {
          authInstance.signIn().then(fetchSheetData).catch(console.error);
        }
      }).catch(error => console.error('Error initializing Google API client:', error));
    }

    function fetchSheetData() {
      const accessToken = authInstance.currentUser.get().getAuthResponse().access_token;

      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}`;

      fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('Sheet Data:', data.values || 'No data found.');
        })
        .catch(error => console.error('Error fetching sheet data:', error));
    }