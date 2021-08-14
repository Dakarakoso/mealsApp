const liveHost = "https://us-central1-mealstogo-894a2.cloudfunctions.net";
var npxUrl = "https://657ddcb8aeaf.ngrok.io";

const localHost = `${npxUrl}/mealstogo-894a2/us-central1`;

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
