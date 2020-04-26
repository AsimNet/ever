// NOTE: do NOT ever put here any secure settings! (e.g. Secret Keys)
// We are using dotenv (.env) for consistency with other Platform projects
// This is Angular app and all settings will be loaded into the client browser!

import { cleanEnv, num, str, bool } from 'envalid';

export type Env = Readonly<{
	production: boolean;

	DEFAULT_LATITUDE: number;
	DEFAULT_LONGITUDE: number;

	DEFAULT_LANGUAGE: string;

	SERVICES_ENDPOINT: string;
	HTTPS_SERVICES_ENDPOINT: string;
	GQL_ENDPOINT: string;
	GQL_SUBSCRIPTIONS_ENDPOINT: string;

	AUTH_LOGO: string;
	NO_INTERNET_LOGO: string;
	GOOGLE_MAPS_API_KEY: string;

	DELIVERY_TIME_MIN: number;
	DELIVERY_TIME_MAX: number;

	SETTINGS_APP_TYPE?: string;
	SETTINGS_MAINTENANCE_API_URL?: string;

	WEB_CONCURRENCY: number;
	WEB_MEMORY: number;
	PORT: number;
}>;

export const env: Env = cleanEnv(
	process.env,
	{
		production: bool({ default: false }),

		DEFAULT_LATITUDE: num({ default: 42.6459136 }),
		DEFAULT_LONGITUDE: num({ default: 23.3332736 }),

		DEFAULT_LANGUAGE: str({ default: 'en-US' }),

		SERVICES_ENDPOINT: str({ default: 'https://api.kawkab.systems:5501' }),
		HTTPS_SERVICES_ENDPOINT: str({
			default: 'https://api.kawkab.systems:5501',
		}),
		GQL_ENDPOINT: str({
			default: 'https://api.kawkab.systems:5555/graphql',
		}),
		GQL_SUBSCRIPTIONS_ENDPOINT: str({
			default: 'wss://api.kawkab.systems:5050/subscriptions',
		}),

		AUTH_LOGO: str({ default: 'assets/img/ever-logo.svg' }),
		NO_INTERNET_LOGO: str({ default: 'assets/img/ever-logo.svg' }),

		GOOGLE_MAPS_API_KEY: str({
			default: 'AIzaSyAyDd9oMAzGCeH5kkmqubXaqb6VTL_pzXI',
		}),

		DELIVERY_TIME_MIN: num({ default: 30 }),
		DELIVERY_TIME_MAX: num({ default: 60 }),

		// For maintenance micro service. Ever maintanance API URL: https://maintenance.ever.co/status
		SETTINGS_APP_TYPE: str({ default: 'shop-web' }),
		SETTINGS_MAINTENANCE_API_URL: str({
			default: '',
		}),

		WEB_CONCURRENCY: num({ default: 1 }),
		WEB_MEMORY: num({ default: 2048 }),
		PORT: num({ default: 3000 }),
	},
	{ strict: true, dotEnvPath: __dirname + '/../.env' }
);
