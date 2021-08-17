import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TableHeadWrap = (props) => {
    const { data, numSelected, orderType, orderBy, onSelectAllClick, sortByHederTitle } = props;

    const createHeadCellRows = () => {
        const headRows = Object.keys(data[0]);
        return headRows;
    }

    return (
        <>
            <TableCell padding="checkbox">
                <Checkbox
                    indeterminate={numSelected > 0 && numSelected < data.length}
                    checked={data.length > 0 && numSelected === data.length}
                    onChange={onSelectAllClick}
                    inputProps={{ 'aria-label': 'select all desserts' }}
                />
            </TableCell>
            {createHeadCellRows().map((item, index) => {
                return (
                    index !== 0 && item!=='paid' &&
                    <TableCell
                        key={`${item}_${index}`}
                        align={index !== 1 ? "center" : 'left'}
                    >
                        <div
                            className={`headerrcell-container  ${index === 1 &&'headerrcell-container-firstchild'}`}
                            onClick={(e) => sortByHederTitle(e, item)}
                        >
                            <div className="wrap-icon-header-table">
                                <FontAwesomeIcon
                                    icon={orderType === 'desc' ? ['fas', 'arrow-up'] : ['fas', 'arrow-down']}
                                    color={orderBy === item && '#f50057'}
                                />
                            </div>
                            {item}
                        </div>

                    </TableCell>

                )
            })}
            <TableCell align={"center"}>
                salary paid
            </TableCell>
        </>
    );
}

export default TableHeadWrap;