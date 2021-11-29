import { RequestInit } from "node-fetch";

export interface NodeFetchRequestConfig extends RequestInit {
    json?: boolean;
}
