import * as https from "https";

export const defaultHttpsAgent = new https.Agent({rejectUnauthorized: false});