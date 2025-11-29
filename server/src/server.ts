import http, { IncomingMessage, Server, ServerResponse } from "http"
import config from "./config"
const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({
            message: "Hello Node js with typeScript is very goo ",
            path: req.url
        }))
    }
})
server.listen(config, () => {
    console.log(`Server is running on port ${config.port}`);
})
