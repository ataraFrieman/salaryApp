
import { getAllDataEmployees,executePayments } from './employees.middleware'

const appMiddleware = [
    getAllDataEmployees,
    executePayments
];

export default appMiddleware;
