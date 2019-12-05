/*(2) Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&APPID=69f7a79ea60d1f056d03a841887913dc';
// Event listener on the button
document.getElementById('generate').addEventListener('click', submitEntry);
//(3) Function called by event listener that does all the application
function submitEntry(e) {
  // Variables that get the data needed for application to work:
  let zip = document.getElementById('zip').value;
  let country = ',' + document. getElementById('country').value;
  //asynchronous function to get the data from openweathermap with parameters entered by user
  const getData = async(baseURL, zip, country, apiKey) => {
    const res = await fetch (baseURL+zip+country+apiKey)
    try {
      const data = await res.json();
      console.log(data);
      return data;
    }catch (error) {
      console.log('error', error);
    }
  }
  getData (baseURL, zip, country, apiKey);
}
// Function for getting data on submit DONE

// Create a new date instance dynamically with JS
 let d = new Date();
 let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/* (1) POST data to server */
const postData = async (url = '', data = {}) => {
  //can be removed when done
  console.log(data);
  // fetch data
  const response = await fetch (url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.log(newData);
    return newData
  } catch (error) {
      console.log('error', error)
    }
}
/// test - remove when done
// postData('/addEntry', {date: newDate, weather: 'sunny', journal: 'it was a sunny day, and it was hot'});
// postData('/addEntry', {date: newDate, weather: 'cloudy', journal: 'it was a cloudy and cold'});
/* POST DATA DONE */

/* Get data from server */
