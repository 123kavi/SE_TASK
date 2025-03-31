const { google } = require("googleapis");

async function getBusyIntervals(calendarId, startTime, endTime, apiKey) {
    const calendar = google.calendar({ version: "v3", auth: apiKey });

    const response = await calendar.freebusy.query({
        requestBody: {
            timeMin: startTime,
            timeMax: endTime,
            items: [{ id: calendarId }]
        }
    });

    return response.data.calendars[calendarId].busy;
}

const calendarId = "kavihansi98@gmail.com";
const apiKey = "AIzaSyDi9sEf1Bpo3QFkaq80f59uzOL6r5kfOGA";
const startTime = new Date().toISOString();  
const endTime = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(); 

getBusyIntervals(calendarId, startTime, endTime, apiKey)
    .then(busyIntervals => console.log("Busy Intervals:", busyIntervals))
    .catch(error => console.error("Error:", error));