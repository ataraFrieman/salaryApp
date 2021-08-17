import produce from "immer";
import createReducer from "./reducerUtils";


const initialState = {
    selectedEmployees: [],
    employees: []
}

const employeeReducer = {

    setEmployeesList(state, action) {
        const data = action.payload;
        state.employees = data;
    },
    setSelectedEmployees(state, action) {
        const data = action.payload;
        state.selectedEmployees = data;
    },
    
    setEmployeeFiled(state, action) {
        const { id, key, value } = action.payload;
        const index = state.employees.findIndex(e => e.id === id);
        state.employees[index][key] = value;
    }
};

export default produce((state, action) =>
    createReducer(state, action, employeeReducer), initialState);
