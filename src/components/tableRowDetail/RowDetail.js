import React from 'react';
import classes from './RowDetail.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Close from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { Scrollbars } from 'react-custom-scrollbars';
import { StatusColor } from '../../ThemeColor';
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});
function renderThumb({ style, ...props }) {
  const thumbStyle = {
    backgroundColor: StatusColor,
  };
  return (
    <div
      style={{ ...style, ...thumbStyle }}
      {...props} />
  );
}
function TabContainer(props) {
  return (
    <Typography className={classes.TabContainer} component="div">
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
function RowDetail(props) {
  let griddata = props.gridDetailData[0];
  let SelctedTab = props.tabvalue;
  return (
    <div className={classes.RowDetail}>
      <div className={classes.rowDetailHeader}>
        <Grid container spacing={24} alignItems="center" justify="space-between">
          <Grid item>
            <h3>{griddata.customer_name}</h3>
          </Grid>

          <Grid item>

            <div className={classes.rowDetailControler}>  <IconButton
              color="inherit"
            >
              <EditIcon />
            </IconButton>
              <IconButton
                color="inherit"
              >
                <SaveIcon />
              </IconButton>

              <IconButton
                color="inherit"
                onClick={props.detailRowCloseHandler}
              >
                <Close />
              </IconButton>
            </div>
          </Grid>
        </Grid>



      </div>

      <div className={classes.root}>
        <Tabs
          scrollable
          scrollButtons="auto"
          indicatorColor="primary"
          value={SelctedTab}
          onChange={props.tabChangeHandler}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Customer Detail"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Lead Detail"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Lead Status"
          />

        </Tabs>
        <Scrollbars
        renderThumbVertical={renderThumb}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax={'50vh'}
        thumbMinSize={30}
        universal={true} style={{ maxHeight: '50vh' }}>
        {SelctedTab === 0 && <TabContainer>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <b>Customer Name:</b> {griddata.customer_name}
                 </Grid>
            <Grid item xs={12} sm={6}>
              <b>City:</b> {griddata.city}
            </Grid>
            <Grid item xs={12} sm={6}>
              <b>Assigned To:</b> {griddata.assigned_to}
            </Grid>
          </Grid>
          <div>

          </div>
          <div>


          </div>

        </TabContainer>}
        {SelctedTab === 1 && <TabContainer>    <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <b>Follow Up:</b> {griddata.follow_up}
          </Grid>
          <Grid item xs={12} sm={6}>
            <b>Last Contact:</b> {griddata.last_contact}
          </Grid>
          <Grid item xs={12} sm={6}>
            <b>Primary Contact:</b> {griddata.primary_contact}
          </Grid>
        </Grid></TabContainer>}
        {SelctedTab === 2 && <TabContainer><div>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <b>Status:</b> {griddata.status}
            </Grid>

          </Grid>
          
        </div>
       

        </TabContainer>}
        </Scrollbars>
      </div>
    </div>
  );

}
RowDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RowDetail);



