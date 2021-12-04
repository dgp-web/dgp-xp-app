import { Credentials } from "./features/tsoa-express-authentication/models/credentials.model";

const crypto = require("crypto");

/**
 * Parses a base64-encoded HTTP header to get a user-name
 * and a password hash from it
 */
export function decodeBasicAuthHeader(basicAuthHeader: string): Credentials {
    const encodedCredentials = basicAuthHeader.replace("Basic ", "");
    const buffer = Buffer.from(encodedCredentials, "base64");
    const decoded = buffer.toString("ascii");
    const segments = decoded.split(":");
    const userName = segments[0];

    const password = segments[1];
    const hash = crypto.createHash("sha512");
    const handle = hash.update(password, "ascii");
    const passwordHash = handle.digest("hex");

    return {
        userName,
        passwordHash
    };
}
