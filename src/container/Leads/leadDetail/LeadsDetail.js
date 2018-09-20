import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styleCss from './LeadsDetail.css';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import BackBtn from '../../../components/backBtn/Back';
import EditIcon from '@material-ui/icons/BorderColor';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import CommnetIcon from '@material-ui/icons/ModeComment';
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding:15
  },
  textField:{
    border: '1px solid rgba(0, 0, 0, 0.42)',
borderBottom:'none',
  },
  tabsRoot: {
    borderBottom: '1px solid #fff',
  },
  tabsIndicator: {
    backgroundColor: '#fff',
    height: 0
  },
calToActiontabsIndicator:{
borderBottom:'2px solid #3040ca'
  },
  calToActionTabRoot: {
    textTransform: 'initial',
    fontWeight: theme.typography.fontWeightRegular,
    minWidth: 0,
    minHeight: 0,
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#3040ca',
      borderBottom: '3px solid #3040ca',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      // color: '#40a9ff',
    },
  },
  labelContainer:{
    padding:5
  },
  tabRoot: {
    textTransform: 'initial',
    fontWeight: theme.typography.fontWeightRegular,
    background: '#f8f8f8',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    minWidth: 110,
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#142075',
      background: '#ffffff',
      border: '1px solid #efebeb',
      borderBottom: 'none',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      // color: '#40a9ff',
    },
  },
  scrollButtons: {
    flex: '0 0 0px'
  },
  tabSelected: {},
});
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 0, marginTop: '-1px' }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class LeadsDetail extends Component {
  listDetail = ' ';
  state = {
    value: 0,
    calToActionTabValue:0,
    selectedSecId: 0,
    showComments:false,
    leadDetail: {
      leadName: 'Acacia Cova Retirment - Property Maintenance',
      address: '131 Wattle Fram Road',
      city: 'Auckland'
    },
    leadContactDetail: {
      primary: 'Justin Smith',
      secondary: '',
      note: '',
      salsePerson: 'Michale Frankin'
    },
    leadDetail1: {
      timeframeNote: '',
      siteAccessNote: '',
      dailyTravelTime: ''
    },
    salesDetail1: {
      probability: 0,
      cloaseDate: 'September - 2017',
      estValue: 5000,
      leadType: 'Commerical Existir',
      chargeUp: '',
      status: 'Pending Scoping 0%',
      inactive: ''
    },
    dummyData: {},
    saveBtnEnable: false,
   editLeadName:{
    contendEditable:false,
    foucs:false
   }
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  calToActionTabHandleChange=(event, value) => {
    this.setState({ calToActionTabValue:value });
  };

  inputChangeHandler = (event, key, secIdentifier) => {

    let OldSecData = { ...this.state[secIdentifier] };
    OldSecData[key] = event.target.value;
    this.setState({
      dummyData: OldSecData,
      saveBtnEnable: true
    })

  }
  // sec save 
  saveSecHandler = (secIdentifier) => {
    let UpdatedSecData = { ...this.state.dummyData };
    console.log(secIdentifier)
    let updatedState={
      selectedSecId: 0,
    }
    updatedState[secIdentifier]=UpdatedSecData;
this.setState(updatedState)
  }
  // cancel Sec Handler
  cancelEditSecHandler = (secIdentifier) => {
    let OldSecData = this.state[secIdentifier];
    this.setState({
      selectedSecId: 0,
      secIdentifier: OldSecData
    })
 
  }
  // Edit Sec 
  editDetailSec = (id) => {

    this.setState({
      selectedSecId: id,
      dummyData: {},
      saveBtnEnable: false
    })
  }

  // edit lead name
  editLeadName=()=>{
   let  updatededitLeadName={
      contendEditable:true
    }
this.setState({
  editLeadName:updatededitLeadName
})
  } 

// save lead name  
saveLeadName=()=>{
  let  updatededitLeadName={
    contendEditable:false
  }
this.setState({
editLeadName:updatededitLeadName
})
}
// show messages
toggleMessages=($event)=>{
  this.setState({
    showComments: $event.target.checked
  })
}

  render() {
    const { classes } = this.props;
    const { value, calToActionTabValue} = this.state;
     return (
      <React.Fragment>
<h2 className={styleCss.title}> <BackBtn style={{width:35}} /> <div onBlur={()=>this.saveLeadName()}  contentEditable={this.state.editLeadName['contendEditable']}>Acacia Cove Retirement - Property Maintenance</div> <EditIcon onClick={()=>this.editLeadName()} style={{ width: 14, marginLeft:15, cursor:'pointer' }} /></h2>
 <h3 className={styleCss.title}>Acacia Cove</h3>       
 <Tabs
          value={value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          scrollable
          scrollButtons="auto"
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator, scrollButtons: classes.scrollButtons }}
        >
          <Tab label="Lead details" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
          <Tab label="Overview" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
          <Tab label="Quote/Variation list" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
          <Tab label="Budget" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
          <Tab label="Job Form" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
          <Tab label="Attachments" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
          <Tab label="Actions" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
          <Tab label="Spec" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
        </Tabs>

        <Paper square={true} className={classes.root}>
          {value === 0 && <TabContainer>

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
            >

              <Grid item xs={12} sm={6} style={{ marginBottom: 50 }}>
                <div>
                  <h4 onClick={this.editDetailSec.bind(this, 1)}>Lead Detail <EditIcon style={{ width: 14 }} /></h4>

                  {Object.keys(this.state.leadDetail).map((key) => {
                    return (
                      <div
                        key={key}>
                        <Grid
                          container
                          direction="row"
                          justify="flex-start"
                          alignItems="flex-start"
                        >
                          <Grid item xs={4} sm={3} style={{ marginBottom: 10 }}> {key}: </Grid>
                          <Grid item xs={8} sm={8} style={{ marginBottom: 10 }}>{this.state.selectedSecId === 1 ?
                            <FormControl fullWidth className={classes.margin}>
                              <Input
                                placeholder={this.state.leadDetail[key]}
                                onChange={($event) => this.inputChangeHandler($event, key, "leadDetail")} />
                            </FormControl> : `${this.state.leadDetail[key]}`}
                          </Grid>
                        </Grid>

                      </div>
                    );
                  })}
                  
                  {this.state.selectedSecId === 1 ?
                    <button className={"primaryRoundedBtn ml0 mt10"} disabled={!this.state.saveBtnEnable} onClick={() => this.saveSecHandler("leadDetail")}>Save</button> : ''}
                  {this.state.selectedSecId === 1 ? <button className={" primaryRoundedBtn mt10 cancelRoundedBtn"} onClick={() => this.cancelEditSecHandler("leadDetail")}>Cancel</button> : ''}

                </div>
              </Grid>


              <Grid item xs={12} sm={6} style={{ marginBottom: 50 }}>
                <div>
                  <h4 onClick={this.editDetailSec.bind(this, 2)}>Contact Details<EditIcon style={{ width: 14 }} /></h4>
                  {Object.keys(this.state.leadContactDetail).map((key) => {
                    return (
                      <div
                        key={key}>
                        <Grid
                          container
                          direction="row"
                          justify="flex-start"
                          alignItems="flex-start"
                        >
                          <Grid item xs={4} sm={3} style={{ marginBottom: 10 }}> {key}: </Grid>
                          <Grid item xs={8} sm={8} style={{ marginBottom: 10 }}> {this.state.selectedSecId === 2 ?
                            <FormControl fullWidth className={classes.margin}>
                              <Input
                                placeholder={this.state.leadContactDetail[key]} onChange={($event) => this.inputChangeHandler($event, key, "leadContactDetail")} />
                            </FormControl> : `${this.state.leadContactDetail[key]}`}

                          </Grid>
                        </Grid>
                      </div>
                    );
                  })}

                  {this.state.selectedSecId === 2 ?
                    <button className={"primaryRoundedBtn ml0 mt10"} disabled={!this.state.saveBtnEnable} onClick={() => this.saveSecHandler("leadContactDetail")}>Save</button> : ''}
                  {this.state.selectedSecId === 2 ? <button className={" primaryRoundedBtn mt10 cancelRoundedBtn"} onClick={() => this.cancelEditSecHandler("leadContactDetail")}>Cancel</button> : ''}

                </div>
              </Grid>
              <Grid item xs={12} sm={6} style={{ marginBottom: 50 }}>
                <div>
                  <h4 onClick={this.editDetailSec.bind(this, 3)}>Lead Detail<EditIcon style={{ width: 14 }} /></h4>

                  {Object.keys(this.state.leadDetail1).map((key) => {
                    return (
                      <div
                        key={key}>
                        <Grid
                          container
                          direction="row"
                          justify="flex-start"
                          alignItems="flex-start"
                        >
                          <Grid item xs={4} sm={3} style={{ marginBottom: 10 }}> {key}: </Grid>
                          <Grid item xs={8} sm={8} style={{ marginBottom: 10 }}>  {this.state.selectedSecId === 3 ?
                            <FormControl fullWidth className={classes.margin}>
                              <Input
                                placeholder={this.state.leadDetail1[key]} onChange={($event) => this.inputChangeHandler($event, key, "leadDetail1")} />
                            </FormControl> : `${this.state.leadDetail1[key]}`}


                          </Grid>
                        </Grid>
                      </div>
                    );
                  })}

                  {this.state.selectedSecId === 3 ?
                    <button className={"primaryRoundedBtn ml0 mt10"} disabled={!this.state.saveBtnEnable} onClick={() => this.saveSecHandler("leadDetail1")}>Save</button> : ''}
                  {this.state.selectedSecId === 3 ? <button className={" primaryRoundedBtn mt10 cancelRoundedBtn"} onClick={() => this.cancelEditSecHandler("leadDetail1")}>Cancel</button> : ''}

                </div>
              </Grid>
              <Grid item xs={12} sm={6} style={{ marginBottom: 50 }}>
                <div>

                  <h4 onClick={this.editDetailSec.bind(this, 4)}>Sales Details<EditIcon style={{ width: 14 }} /></h4>

                  {Object.keys(this.state.salesDetail1).map((key) => {
                    return (
                      <div
                        key={key}>
                        <Grid
                          container
                          direction="row"
                          justify="flex-start"
                          alignItems="flex-start"
                        >
                          <Grid item xs={4} sm={3} style={{ marginBottom: 10 }}> {key}: </Grid>
                          <Grid item xs={8} sm={8} style={{ marginBottom: 10 }}>  {this.state.selectedSecId === 4 ?
                            <FormControl fullWidth className={classes.margin}>
                              <Input  placeholder={this.state.salesDetail1[key]} 
                                onChange={($event) => this.inputChangeHandler($event, key, "salesDetail1")} />
                            </FormControl> : `${this.state.salesDetail1[key]}`}

                          </Grid>
                        </Grid>
                      </div>
                    );
                  })}

                  {this.state.selectedSecId === 4 ?
                    <button className={"primaryRoundedBtn ml0 mt10"} disabled={!this.state.saveBtnEnable} onClick={() => this.saveSecHandler("salesDetail1")}>Save</button> : ''}
                  {this.state.selectedSecId === 4 ? <button className={" primaryRoundedBtn mt10 cancelRoundedBtn"} onClick={() => this.cancelEditSecHandler("salesDetail1")}>Cancel</button> : ''}

                </div>
              </Grid>
            </Grid>
            <div className={styleCss.callToAction}>
            <hr/>
            <Tabs
            value={calToActionTabValue}
            onChange={this.calToActionTabHandleChange}
            indicatorColor="primary"
            textColor="primary"
  
            classes={{ root: classes.tabsRoot, indicator: classes.calToActiontabsIndicator, scrollButtons: classes.scrollButtons }}
          >
            <Tab label="Add Comment  " classes={{labelContainer:classes.labelContainer, root: classes.calToActionTabRoot, selected: classes.tabSelected }} />
            <Tab label="Add Call" classes={{ root: classes.calToActionTabRoot, selected: classes.tabSelected }} />
            <Tab label="Add Meeting" classes={{ root: classes.calToActionTabRoot, selected: classes.tabSelected }} />
         
            </Tabs>
            <div>
            {calToActionTabValue === 0 && <TabContainer><TextField
              id="filled-textarea"
             fullWidth
              placeholder="Add Comment"
              multiline
              rows="3"
              rowsMax="3"
              className={classes.textField}
             
              variant="outlined"
            />
            <button className={"primaryRoundedBtn ml0 mt10"}>Submit</button>
           <button className={" primaryRoundedBtn mt10 cancelRoundedBtn"}>Cancel</button>
           <div className="mt10">
           
           {this.state.showComments?<List>
          
             <ListItem style={{padding:'10px 0'}}>
               <ListItemIcon>
                 <CommnetIcon />
               </ListItemIcon>
               <ListItemText 
                 primary="It also doesn't matter how the element became focused"
                
               />
             </ListItem>
             <ListItem style={{padding:'10px 0'}}>
             <ListItemIcon>
               <CommnetIcon />
             </ListItemIcon>
             <ListItemText
               primary="Single-line It also doesn't matter how the element became focused"
              
             />
           </ListItem>
           <ListItem style={{padding:'10px 0'}}>
           <ListItemIcon>
             <CommnetIcon />
           </ListItemIcon>
           <ListItemText
             primary="Single-line item comment 2 It also doesn't matter how the element became focused"
            
           />
         </ListItem>
         <ListItem style={{padding:'10px 0'}}>
         <ListItemIcon>
           <CommnetIcon />
         </ListItemIcon>
         <ListItemText
           primary="It also doesn't matter how the element became focused"
          
         />
       </ListItem>
         </List>:''}
           
           </div>
           <div className="">
           <FormControlLabel
           control={
             <Checkbox onChange={($event)=>this.toggleMessages($event)} />
           }
           label= {!this.state.showComments?"Show all the Comments":"Hide Comments"}
         />
         </div>
            </TabContainer>}
            {calToActionTabValue === 1 && <TabContainer>Item 1</TabContainer>}
            {calToActionTabValue === 2 && <TabContainer>Item 2</TabContainer>}
            </div>
            </div>
          </TabContainer>}
          {value === 1 && <TabContainer>Item Two</TabContainer>}
          {value === 2 && <TabContainer>Item Three</TabContainer>}
          {value === 3 && <TabContainer>Item Four</TabContainer>}
          {value === 4 && <TabContainer>Item Five</TabContainer>}
          {value === 5 && <TabContainer>Item Six</TabContainer>}
          {value === 6 && <TabContainer>Item Seven</TabContainer>}

         
         

        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LeadsDetail);
