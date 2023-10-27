import { NextFunction, Request, Response } from "express";
import { verifyRefreshToken, verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
    user?: string | JwtPayload;
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        console.log({checkJwtRefreshToken: req.cookies.refreshToken});
        
        // const jwtByUser = req.headers.authorization  || null;
        // console.log({jwtByUser});
        
        // const jwt = jwtByUser?.split(' ').pop();
        // console.log({jwt});
        const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NTNhMDAzZmU5NWZjY2JkNmNhMmFmMDgiLCJpYXQiOjE2OTgzOTA2MzcsImV4cCI6MTcwMDk4MjYzN30.NYWmKySzESCdd9g-yFGNYLDHGBKLJz03CQxkL6GXEKU";

        const isUser = verifyRefreshToken(jwt);
        console.log({isUser});
        
        // const isUser = verifyToken(`${jwt}`);
        
        if(!isUser){
            res.status(403)
            res.send("INVALID_TOKEN")
        }else{
            req.user = isUser;
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(400)
        res.send("UNAUTHORIZED")
    }
}

export { checkJwt }