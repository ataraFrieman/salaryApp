import { actions } from '../actions/action';
import data from '../../data/MOCK_DATA.json'

export const getAllDataEmployees = ({ dispatch }) => next => action => {

    if (action.type === 'GET_DATA') {
        dispatch(actions.setEmployeesList(data))
    };
    return next(action);
}

export const executePayments = ({ dispatch, getState }) => next => action => {

    if (action.type === 'EXECUTE_PAYMENTS') {
        const {list,key, value}=action.payload;
        const selected = getState().employeeReducer[list];
        selected.forEach((idEmp) => {
            const data = {
                id: idEmp,
                key: key,
                value:value
            }
            dispatch(actions.setEmployeeFiled(data))
        })
    };
    return next(action);
}

