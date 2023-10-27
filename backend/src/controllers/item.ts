import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { getCar, getCars, insertCar, updateCar, deleteCar } from "../services/items"

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send(response);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}

const getItem = async ({ params }: Request, res: Response) => {

    try {
        const { id } = params; 
        const response = await getCar(id);
        const data = response ? response : 'NOT_FOUND';
        res.send(data);
    } catch (error) {   
        handleHttp(res, 'ERROR_GET_ITEM')
    }

}

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await updateCar(id, body);
        res.send(response);
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEM')
    }
}

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body)
        console.log({responseItem});
        
        res.send(responseItem);
    } catch (error) {
        handleHttp(res, 'ERROR_CREATE_ITEM', error)
        
    }
}

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params; 
        const response = await deleteCar(id);
        res.send(response);
    } catch (error) {
        
    }
}


export { getItem, getItems, updateItem, postItem, deleteItem}