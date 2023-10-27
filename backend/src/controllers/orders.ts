import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItems = (req: Request, res: Response) => {
    try {
        res.send({data:'Esto sólo lo ven usuarios con sesión activa'})
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOGS')
    }
}

export { getItems }