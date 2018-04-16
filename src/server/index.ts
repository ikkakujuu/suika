import http from 'http';

import express from 'express';

import indexRouter from '../routes/index.route';

interface IServerOptions {
	port: number;
}

class Server {
	private app: express.Application | null = null;
	private server: http.Server | null = null;
	private serverOptions: IServerOptions | null = null;

	public setup(options?: IServerOptions) {
		this.app = express();
		this.server = http.createServer(this.app);
		this.serverOptions = options || { port: 8080 };
	}

	public async launch() {
		const server = this.server;
		const app = this.app;
		const options = this.serverOptions;

		if (app === null || server === null || options === null) {
			throw new Error('Server is not configured correctly');
		}

		app.use(indexRouter);

		server.listen(options.port || 0,
			() => console.log(`Server up and running on http://localhost:${server.address().port}`));
	}
}

export default new Server();
