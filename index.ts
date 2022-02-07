import Airlock from "airlock-server";

const airtableConfig = {
  apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY,
  baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY,
};

const clientPort = 3000;
const serverPort = 8000;

new Airlock({
  airtableApiKey: [airtableConfig.apiKey],
  airtableBaseId: airtableConfig.baseKey,
  airtableUserTableName: "Users",
  airtableUsernameColumn: "username",
  airtablePasswordColumn: "password",
  allowedOrigins: ['http://localhost:${clientPort}'],
  port: serverPort,
});
