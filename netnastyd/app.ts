import express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
import * as jwt from 'jsonwebtoken';
import * as fs from "fs";

const app: express.Application = express();
app.use(bodyParser.json());

app.route('/api/login')
    .post(loginRoute);


const RSA_PRIVATE_KEY = "secret";
//fs.readFileSync('./demos/private.key');

function loginRoute(req: express.Request, res: express.Response) {

    const password = req.body.password;

    if (password=='test') {

        const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
                algorithm: 'RS256',
                expiresIn: 120,
                subject: 'admin'
            });

          // send the JWT back to the user
          // TODO - multiple options available                              
    }
    else {
        // send status 401 Unauthorized
        res.sendStatus(401); 
    }
}
export default app;