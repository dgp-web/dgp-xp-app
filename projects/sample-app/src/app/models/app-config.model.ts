import { AppConfig } from "dgp-xp-app";

export interface DemoAppConfig extends AppConfig {
    readonly isDevelopment: boolean;
}
