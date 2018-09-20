import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import SortIcon from '../../../components/sortIcon/Icon';
const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor:theme.palette.primary.dark,
      color:"#fff",
      padding: "4px 30px 4px 15px",

    },
    body: {
      fontSize: 14,
      textAlign:'left'
    },
  }))(TableCell);
  const styles = theme => ({
    activeSortIcon: {
        opacity: 1,
      },
      // Half visible for inactive icons
      inactiveSortIcon: {
        opacity: 0.4,
      },
});

function EnhancedTableHead(props) {
 const {order, orderBy, classes} = props;
  
      return (
        <TableHead   hover="none">
          <TableRow>
        
            {props.rows.map(row => {
              return (
                <CustomTableCell
                  key={row.id}
                  numeric={row.numeric}
                  padding={row.disablePadding ? 'none' : 'default'}
                  style={{position:'relative', whiteSpace:'nowrap'}}
                >
                {row.label}
                <TableSortLabel  style={{position:'static'}}  classes={{
                    icon: ((orderBy === row.id) ? classes.activeSortIcon : classes.inactiveSortIcon ) }}
                active={orderBy === row.id}
                direction={order}
                onClick={props.createSortHandler(row.id)}
                IconComponent={()=><SortIcon active={orderBy === row.id} />}
              >
              
                
              </TableSortLabel>
                </CustomTableCell>
              );
            }, this)}
          </TableRow>
        </TableHead>
      );
    }

  export default  withStyles(styles)(EnhancedTableHead);