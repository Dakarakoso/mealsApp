const { locations: locationsMock } = require("./geocode.mock");
const functions = require("firebase-functions");

module.exports.geocodeRequest = (req, res, client) => {
  const { city, mock } = req.query;
  if (mock === "true") {
    const locationMock = locationsMock[city];
    res.json(locationMock);
  }
  client
    .geocode({
      params: {
        address: city,
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((result) => {
      return res.json(result.data);
    })
    .catch((e) => {
      res.status(400);
      return res.send(e.response.data.error_message);
    });
};
