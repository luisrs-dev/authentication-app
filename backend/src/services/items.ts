import { Car } from '../interfaces/car.interface';
import ItemModel from '../models/item'

const insertCar = async ( item: Car ) => {
    const responseInsert = await ItemModel.create(item);     
    return responseInsert;
}

const getCars = async () => {
    const responeItems =  await ItemModel.find({});
    return responeItems;
}

const getCar = async (id:string) => {
    const responeItem =  await ItemModel.findOne({_id: id});
    return responeItem;
}

const updateCar = async (id:string, data: Car) => {
    const responeItem =  await ItemModel.findOneAndUpdate(
        {_id: id},
        data,
        // By default, findOneAndUpdate() returns the document as it was before update was applied. If you set new: true, findOneAndUpdate() will instead give you the object after update was applied.
        {
            new: true
        }
        );
    return responeItem;
}

const deleteCar = async (id:string) => {
    const responeItem =  await ItemModel.findOneAndDelete({_id: id});
    return responeItem;
}


export { insertCar, getCars, getCar, updateCar, deleteCar }