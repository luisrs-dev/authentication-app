import { Car } from '../interfaces/car.interface';
import ItemModel from '../models/item'

const getOrders = async () => {
    const responeItems =  await ItemModel.find({});
    return responeItems;
}

export { getOrders }