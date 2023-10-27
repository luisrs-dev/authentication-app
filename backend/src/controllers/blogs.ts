import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItems = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOGS')
    }
}

const getItem = (req: Request, res: Response) => {

    try {
        
    } catch (error) {   
        handleHttp(res, 'ERROR_GET_BLOG')
    }

}

const updateItems = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_BLOG')
    }
}

const postItem = ({ body }: Request, res: Response) => {
    try {
        res.send(body);
    } catch (error) {
        
    }
}

const deleteItem = ({ body }: Request, res: Response) => {
    try {
        res.send(body);
    } catch (error) {
        
    }
}


export { getItem, getItems, updateItems, postItem, deleteItem}