import "reflect-metadata";
import {createExpressServer} from "routing-controllers";
import {AuthController} from "auth";

createExpressServer({
    routePrefix: "/api",
    controllers: [AuthController]
}).listen(3000);