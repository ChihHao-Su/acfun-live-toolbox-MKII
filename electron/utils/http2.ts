// TODO: REFACTOR: Useless file?

import { port } from "./http";
const path = require("path");
const fs = require("fs");
const http = require("http");
const ip = require("ip");

export const startHttp = () => {
	const dirname = process.resourcesPath;
	const staticServe = (req: any, res: any) => {
		fs.readFile(
			path.join(dirname, "/app/index.html"),
			(err: any, data: any) => {
				if (err) {
					res.writeHead(404, "Not Found");
					res.write("404: File Not Found!");
					return res.end();
				}

				res.statusCode = 200;

				res.write(data);
				return res.end();
			}
		);
	};
	return new Promise(resolve => {
		const httpServer = http.createServer(staticServe);
		resolve(httpServer.listen(port));
	});
};
