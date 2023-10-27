import { Car } from '../interfaces/car.interface';
import SessionModel from '../models/session'

const getSessions = async () => {
    const responeItems =  await SessionModel.find({}).sort({createdAt: -1});
    return responeItems;
}

export { getSessions }