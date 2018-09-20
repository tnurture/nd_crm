import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import EnhancedTablePagination from '../../components/table/TablePagination/Pagination';
import Paper from '@material-ui/core/Paper';
import EnhancedTableHead from '../../components/table/tableHeader/Header';
import EnhancedTableBody from '../../components/table/tableBody/Body';
import Search from '../../components/search/Search';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import customStyle from './Leads.css'
function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
   
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  console.log(orderBy)
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

// header Data
const rows = [
  { id: 'salesman', numeric: false, disablePadding: false, label: 'Salesman' },
  { id: 'lead_Name', numeric: false, disablePadding: false, label: 'Lead Name' },
  { id: 'customer', numeric: false, disablePadding: false, label: 'Customer' },
  { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
  { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
  { id: 'quotedDate', numeric: false, disablePadding: false, label: 'Quoted Date' },
  { id: 'statusDays', numeric: true, disablePadding: false, label: 'Status Days' },
  { id: 'lastActive', numeric: false, disablePadding: false, label: 'Last Active' },
];
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class Dashboard extends Component {
  state = {
    order: 'asc',
    orderBy: 'salesman',
    selected: [],
    data: [
      {
        salesman:'Simon Jonas',
        lead_Name:"Tidal Road building wash",
        customer:"Airport Palms Hotel",
        status:"Priced",
        price:4340,
        date:"26/06/2018",
        quotedDate:"9/07/2018",
        statusDays:58,
        lastActive:"24/08/2018",
        id:1
      },
      {
        salesman:'Michael Franklin',
        lead_Name:"Alfriston College - Gutter clean",
        customer:"Alfriston College",
        status:"Priced",
        price:747,
        date:"16/06/2018",
        quotedDate:"22/07/2018",
        statusDays:379,
        lastActive:"24/08/2018",
        id:2
      },
      {
        salesman:'Simon Jonas',
        lead_Name:"Tidal Road building wash",
        customer:"Airport Palms Hotel",
        status:"Priced",
        price:4340,
        date:"26/06/2018",
        quotedDate:"9/07/2018",
        statusDays:58,
        lastActive:"24/08/2018",
        id:3
      },
      {
        salesman:'Michael Franklin',
        lead_Name:"Alfriston College - Gutter clean",
        customer:"Alfriston College",
        status:"Priced",
        price:747,
        date:"16/06/2018",
        quotedDate:"22/07/2018",
        statusDays:379,
        lastActive:"24/08/2018",
        id:4
      }, {
        salesman:'Simon Jonas',
        lead_Name:"Tidal Road building wash",
        customer:"Airport Palms Hotel",
        status:"Priced",
        price:4340,
        date:"26/06/2018",
        quotedDate:"9/07/2018",
        statusDays:58,
        lastActive:"24/08/2018",
        id:5
      },
      {
        salesman:'Michael Franklin',
        lead_Name:"Alfriston College - Gutter clean",
        customer:"Alfriston College",
        status:"Priced",
        price:747,
        date:"16/06/2018",
        quotedDate:"22/07/2018",
        statusDays:379,
        lastActive:"24/08/2018",
        id:6
      }, {
        salesman:'Simon Jonas',
        lead_Name:"Tidal Road building wash",
        customer:"Airport Palms Hotel",
        status:"Priced",
        price:4340,
        date:"26/06/2018",
        quotedDate:"9/07/2018",
        statusDays:58,
        lastActive:"24/08/2018",
        id:7
      },
      {
        salesman:'Michael Franklin',
        lead_Name:"Alfriston College - Gutter clean",
        customer:"Alfriston College",
        status:"Priced",
        price:747,
        date:"16/06/2018",
        quotedDate:"22/07/2018",
        statusDays:379,
        lastActive:"24/08/2018",
        id:8
      }, {
        salesman:'Simon Jonas',
        lead_Name:"Tidal Road building wash",
        customer:"Airport Palms Hotel",
        status:"Priced",
        price:4340,
        date:"26/06/2018",
        quotedDate:"9/07/2018",
        statusDays:58,
        lastActive:"24/08/2018",
        id:9
      },
      {
        salesman:'Michael Franklin',
        lead_Name:"Alfriston College - Gutter clean",
        customer:"Alfriston College",
        status:"Priced",
        price:747,
        date:"16/06/2018",
        quotedDate:"22/07/2018",
        statusDays:379,
        lastActive:"24/08/2018",
        id:10
      }, {
        salesman:'Simon Jonas',
        lead_Name:"Tidal Road building wash",
        customer:"Airport Palms Hotel",
        status:"Priced",
        price:4340,
        date:"26/06/2018",
        quotedDate:"9/07/2018",
        statusDays:58,
        lastActive:"24/08/2018",
        id:11
      },
      {
        salesman:'Michael Franklin',
        lead_Name:"Alfriston College - Gutter clean",
        customer:"Alfriston College",
        status:"Priced",
        price:747,
        date:"16/06/2018",
        quotedDate:"22/07/2018",
        statusDays:379,
        lastActive:"24/08/2018",
        id:12
      }, {
        salesman:'Simon Jonas',
        lead_Name:"Tidal Road building wash",
        customer:"Airport Palms Hotel",
        status:"Priced",
        price:4340,
        date:"26/06/2018",
        quotedDate:"9/07/2018",
        statusDays:58,
        lastActive:"24/08/2018",
        id:13
      },
      {
        salesman:'Michael Franklin',
        lead_Name:"Alfriston College - Gutter clean",
        customer:"Alfriston College",
        status:"Priced",
        price:747,
        date:"16/06/2018",
        quotedDate:"22/07/2018",
        statusDays:379,
        lastActive:"24/08/2018",
        id:14
      },
    ],
    page: 0,
    rowsPerPage: 5,
  };
  createSortHandler = (property) => event => {
   
    this.handleRequestSort(event, property);
  };
  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';
    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleTRClick = (event, data) => {

    const { selected } = this.state;
    const selectedIndex = selected.indexOf(data.id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, data.id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    
    this.props.history.replace( './home/LeadsDetail' );
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
      
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
      
    }

    this.setState({ selected: newSelected });
      
    localStorage.setItem('leadDetailRow', JSON.stringify(data));
    this.props.history.replace({
      pathname: '/home/LeadsDetail',
      search: `?id=${data.id}`,
      state: { detail: data }
    });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;
  render() {
    
const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
const { classes } = this.props;

return (
 <React.Fragment>
 <div className="leadContentHeader">
 <Grid
 container
 direction="row"
 justify="space-between"
 alignItems="flex-end"
>
<div className={customStyle.searchSecArea} ><Search color="#ccc"  textColor="#111111" /></div>
<div>
<button   className={[classes.button, "primaryRoundedBtn filterRoundedBtn"].join(' ')}>
Filter <span className={customStyle.icon}></span>
</button>
<button   className={[classes.button, "primaryRoundedBtn"].join(' ')}>
New
</button>

</div>
</Grid>
 
 
 </div>

  <Paper className={classes.root}>
   
    <div >
      <Table className={classes.table}>
      <EnhancedTableHead
      rows={rows}
      numSelected={selected.length}
      order={order}
      orderBy={orderBy}
      onSelectAllClick={this.handleSelectAllClick}
      onRequestSort={this.handleRequestSort}
      rowCount={data.length}
      createSortHandler={this.createSortHandler}
    />
    <EnhancedTableBody order ={this.state.order} orderBy ={this.state.orderBy} handleClick={this.handleTRClick} isSelected ={this.isSelected} data={this.state.data} page={this.state.page} rowsPerPage={this.state.rowsPerPage} getSorting={getSorting} emptyRows={emptyRows} stableSort={stableSort} />
      
      </Table>
    </div>
    <EnhancedTablePagination   handleChangeRowsPerPage={this.handleChangeRowsPerPage} handleChangePage={this.handleChangePage} page={this.state.page} rowsPerPage={this.state.rowsPerPage} data={this.state.data}/>
  </Paper>
  </React.Fragment>
);
    }
}

export default withStyles(styles)(Dashboard);
