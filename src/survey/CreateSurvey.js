import React,{useState} from 'react';
import {Grid,Button} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux'
import Multi from './Multi'
import Single from './Single'
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
const CreateSurvey=(props)=>{
    const classes = useStyles();

    const [qtype, setQtype] = React.useState(-1);

  const handleChange = (event) => {
    event.preventDefault();
    setQtype(event.target.value);
  };
return <>
        <Grid container
            direction="row"
            justify="center"
        >
            <Grid item>
                <FormControl className={classes.formControl}
                >
                    {/* <InputLabel id="demo-simple-select-label" style={{width:"300px"}}>Select Question Type</InputLabel> */}
                    <Select
                    style={{width:"300px"}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={qtype}
                    onChange={handleChange}
                    >
                    <MenuItem value={-1}>Select Question Type</MenuItem>
                    <MenuItem value={0}>Multi Select</MenuItem>
                    <MenuItem value={1}>Single Select</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            
        </Grid>
        <Grid container
            direction="row"
            justify="center"
        >
                <Grid item>
            {
                    (qtype === 0)?<Grid><Multi sq={setQtype} data={props}/></Grid>:null
                }{
                    (qtype === 1)?<Grid><Single sq={setQtype} data={props} /></Grid>:null
                }
            </Grid>
        </Grid>
</>
}
export default CreateSurvey;