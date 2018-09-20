import React from 'react';
import styleClasses from './Search.css';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: 0,
    position:'relative',
    width:'100%',

  },
});

function Search(props) {
  const { classes } = props;
    return (
       <div className={styleClasses.SearchContainer}>
      
       <FormControl className={classes.formControl}>
       <InputLabel style={{color:props.color}} htmlFor="name-simple">Search...</InputLabel>
       <Input id="name-simple"  style={{color:props.textColor}} className={styleClasses.SearchInput} value={props.name} onChange={props.inputChangeHandler} />
     </FormControl>
        <div className={styleClasses.SearchButton}>
        <Button    onClick={props.searchHandler} >
      
       <SearchIcon style={{color:props.color}} />
      </Button>
      </div>
        
       </div>
    );
  }
  export default withStyles(styles)(Search);



