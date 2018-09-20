import React from 'react';
import TablePagination from '@material-ui/core/TablePagination'

function EnhancedTablePagination(props) {
    return (
<TablePagination
component="div"
count={props.data.length}
rowsPerPage={props.rowsPerPage}
page={props.page}
backIconButtonProps={{
  'aria-label': 'Previous Page',
}}
nextIconButtonProps={{
  'aria-label': 'Next Page',
}}
onChangePage={props.handleChangePage}
onChangeRowsPerPage={props.handleChangeRowsPerPage}
/>)

}
export default EnhancedTablePagination;