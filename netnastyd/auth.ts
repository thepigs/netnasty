import {Controller, Param, Body, Get, Post, Put, Delete, BodyParam, Req, Res} from "routing-controllers";
import {Request, Response} from "express";
import * as jwt from 'jsonwebtoken';
import * as fs from "fs";

const RSA_PRIVATE_KEY = "secret";
//fs.readFileSync('./demos/private.key');

@Controller("/auth")
export class AuthController {

@Post("/login")
login(@BodyParam("pin") pin: string, @Req() request: Request, @Res() response: Response) {


    if (pin=='9999') {

        const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
                algorithm: 'RS256',
                expiresIn: 120,
                subject: 'admin'
            });
        response.cookie("jwt",jwtBearerToken,{httpOnly: true})                              
    }
    else {
        // send status 401 Unauthorized
        response.sendStatus(401); 
    }
}
