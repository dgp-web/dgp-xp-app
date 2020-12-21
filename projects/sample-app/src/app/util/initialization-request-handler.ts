import { http503ServiceUnavailableTemplate } from "./http-503-service-unavailable-template";

export function initializationRequestHandler(req, res) {
    res.status(503);
    res.send(http503ServiceUnavailableTemplate);
}
