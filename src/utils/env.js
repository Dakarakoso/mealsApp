import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogo-894a2.cloudfunctions.net";
var npxUrl = "https://c946-36-2-215-171.ngrok.io";
const localHost = `${npxUrl}/mealstogo-894a2/us-central1`;

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
