import React, {useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from '@material-ui/lab/Alert';

import Footer from './footer';
import TableHeadWrap from './tableHeaders';
import { getComparator, isSelectedItemInList, sortArray } from '../../utility/utility';
import './emloyees.css'





const AllEmployees = (props) => {
    const {
        employees,
        selectedEmployees,
        setSelectedEmployees,
    } = props;

    const [page, setPage] = useState(0);
    const [errors, setErrors] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [orderType, setOrderType] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('first_name');

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selectedEmployees.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selectedEmployees, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selectedEmployees.slice(1));
        } else if (selectedIndex === selectedEmployees.length - 1) {
            newSelected = newSelected.concat(selectedEmployees.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selectedEmployees.slice(0, selectedIndex),
                selectedEmployees.slice(selectedIndex + 1),
            );
        }
        setSelectedEmployees(newSelected);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = employees.map((n) => n.id);
            setSelectedEmployees(newSelecteds);
            return;
        }
        setSelectedEmployees([]);
    };

    const sortByHederTitle = (event, property) => {
        const isAsc = orderBy === property && orderType === 'asc';

        // reverse from the value that was
        setOrderType(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };


    return (

        employees && employees.length &&
        <div>
            {errors && <Alert severity="error">{errors}</Alert>}
            <Paper>
                <h3 className="header" >
                    Emloyees
                </h3>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableHeadWrap
                                    data={employees}
                                    numSelected={selectedEmployees.length}
                                    orderType={orderType}
                                    orderBy={orderBy}
                                    onSelectAllClick={handleSelectAllClick}
                                    sortByHederTitle={sortByHederTitle}
                                />
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {
                                sortArray(employees, getComparator(orderType, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        const labelId = `enhanced-table-checkbox-${index}`;
                                        const isSelectedEmployee = isSelectedItemInList(selectedEmployees, row.id);
                                        return (
                                            <TableRow
                                                hover
                                                key={row.id}
                                                onClick={(e) => handleClick(e, row.id)}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        checked={isSelectedEmployee}
                                                        inputProps={{ 'aria-labelledby': labelId }}
                                                    />
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {row.first_name}
                                                </TableCell>
                                                <TableCell align="center">{row.last_name}</TableCell>
                                                <TableCell align="center">{row.email}</TableCell>
                                                <TableCell align="center">{row.gender}</TableCell>
                                                <TableCell align="center">{row.birthdate}</TableCell>
                                                <TableCell align="center">{row.salary}</TableCell>
                                                <TableCell align="center">{row.paid ? 'V' : 'X'}</TableCell>
                                            </TableRow>
                                        )
                                    })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={employees.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <Footer
                {...props}
                setErrors={setErrors}
            />
        </div>
    );
}

export default AllEmployees;