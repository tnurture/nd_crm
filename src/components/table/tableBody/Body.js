import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
const CustomTableCell = withStyles(theme => ({
    body: {
      fontSize: 14,
      textAlign:'left',
      padding: "4px 15px 4px 15px",
    },
  }))(TableCell);
  const styles = theme => ({

  });
  
function EnhancedTableBody(props) {

  
      const {classes } = props;
  console.log(props)
      return (
        <TableBody>
        {props.stableSort(props.data, props.getSorting(props.order, props.orderBy))
          .slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage)
          .map(n => {
            const isSelected = props.isSelected(n.id);
            return (
              <TableRow
                hover
                onClick={event => props.handleClick(event, n)}
                role="checkbox"
                aria-checked={isSelected}
                tabIndex={-1}
                key={n.id}
                className={classes.row}
                selected={isSelected}
              >
          
                <CustomTableCell numeric>{n.salesman}</CustomTableCell>
                <CustomTableCell numeric>{n.lead_Name}</CustomTableCell>
                <CustomTableCell numeric>{n.customer}</CustomTableCell>
                <CustomTableCell numeric>{n.status}</CustomTableCell>
                <CustomTableCell numeric>{n.price}</CustomTableCell>
                <CustomTableCell numeric>{n.date}</CustomTableCell>
                <CustomTableCell numeric>{n.quotedDate}</CustomTableCell>
                <CustomTableCell numeric>{n.statusDays}</CustomTableCell>
                <CustomTableCell numeric>{n.lastActive}</CustomTableCell>
              </TableRow>
            );
          })}
        {props.emptyRows > 0 && (
          <TableRow style={{ height: 49 * props.emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
      );
    }

  export default  withStyles(styles)(EnhancedTableBody);