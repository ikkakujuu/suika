import dotenv from 'dotenv';

import Server from './server';

(async () => {
	dotenv.config();

	Server.setup();
	await Server.launch();
})();
