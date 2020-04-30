// NOTE: do NOT ever put here any secure settings! (e.g. Secret Keys)
// We are using dotenv (.env) for consistency with other Platform projects
// This is Angular app and all settings will be loaded into the client browser!

import { cleanEnv, num, str, bool } from 'envalid';

export type Env = Readonly<{
	production: boolean;

	SERVICES_ENDPOINT: string;
	HTTPS_SERVICES_ENDPOINT: string;
	GQL_ENDPOINT: string;
	GQL_SUBSCRIPTIONS_ENDPOINT: string;

	GOOGLE_MAPS_API_KEY: string;

	DEFAULT_LATITUDE: number;
	DEFAULT_LONGITUDE: number;

	NO_INTERNET_LOGO: string;

	MAP_MERCHANT_ICON_LINK: string;

	MAP_USER_ICON_LINK: string;

	MAP_CARRIER_ICON_LINK: string;

	API_FILE_UPLOAD_URL: string;

	COMPANY_NAME: string;
	COMPANY_SITE_LINK: string;
	COMPANY_GITHUB_LINK: string;
	COMPANY_FACEBOOK_LINK: string;
	COMPANY_TWITTER_LINK: string;
	COMPANY_LINKEDIN_LINK: string;

	GENERATE_PASSWORD_CHARSET: string;

	CURRENCY_SYMBOL: string;

	SETTINGS_APP_TYPE?: string;
	SETTINGS_MAINTENANCE_API_URL?: string;

	DEFAULT_LANGUAGE: string;

	WEB_CONCURRENCY: number;
	WEB_MEMORY: number;
	PORT: number;
}>;

export const env: Env = cleanEnv(
	process.env,
	{
		production: bool({ default: false }),

		SERVICES_ENDPOINT: str({ default: process.env.SERVICES_ENDPOINT }),
		HTTPS_SERVICES_ENDPOINT: str({
			default: process.env.HTTPS_SERVICES_ENDPOINT
		}),
		GQL_ENDPOINT: str({
			default: process.env.GQL_ENDPOINT
		}),
		GQL_SUBSCRIPTIONS_ENDPOINT: str({
			default: process.env.GQL_SUBSCRIPTIONS_ENDPOINT
		}),

		GOOGLE_MAPS_API_KEY: str({
			default: process.env.GOOGLE_MAPS_API_KEY
		}),

		DEFAULT_LATITUDE: num({
			default: Number(process.env.DEFAULT_LATITUDE)
		}),
		DEFAULT_LONGITUDE: num({
			default: Number(process.env.DEFAULT_LONGITUDE)
		}),

		NO_INTERNET_LOGO: str({ default: 'assets/images/logo.jpg' }),

		MAP_MERCHANT_ICON_LINK: str({
			default: 'http://maps.google.com/mapfiles/kml/pal3/icon21.png'
		}),

		MAP_USER_ICON_LINK: str({
			default: 'http://maps.google.com/mapfiles/kml/pal3/icon48.png'
		}),

		MAP_CARRIER_ICON_LINK: str({
			default: 'http://maps.google.com/mapfiles/kml/pal4/icon54.png'
		}),

		API_FILE_UPLOAD_URL: str({
			default: 'https://api.cloudinary.com/v1_1/evereq/upload'
		}),

		COMPANY_NAME: str({ default: 'كوكب' }),
		COMPANY_SITE_LINK: str({ default: 'https://kawkab.systems/' }),
		COMPANY_GITHUB_LINK: str({
			default: 'https://github.com/asimnet/ever-co'
		}),
		COMPANY_FACEBOOK_LINK: str({
			default: ''
		}),
		COMPANY_TWITTER_LINK: str({ default: '' }),
		COMPANY_LINKEDIN_LINK: str({
			default: ''
		}),

		GENERATE_PASSWORD_CHARSET: str({
			default: process.env.GENERATE_PASSWORD_CHARSET
		}),

		CURRENCY_SYMBOL: str({ default: 'ريال' }),

		// For maintenance micro service. Ever maintanance API URL: https://maintenance.ever.co/status
		SETTINGS_APP_TYPE: str({ default: 'admin' }),
		SETTINGS_MAINTENANCE_API_URL: str({
			default: ''
		}),

		DEFAULT_LANGUAGE: str({ default: 'en-US' }),

		WEB_CONCURRENCY: num({ default: 1 }),
		WEB_MEMORY: num({ default: 4096 }),
		PORT: num({ default: 4200 })
	},
	{ strict: true, dotEnvPath: __dirname + '/../.env' }
);
