import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Grid,Paper} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
 const Publish =()=>{
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const Qs = useSelector((state)=>state.questions)
    console.log({Qs: Qs})
    return<>
            <Grid container
            direction="column"
            justify="center"
            alignItems="center"
            // style={{width:"100%"}}
            >
                {
                    Qs.map((Q,index)=>{
                        return<>
                            <Grid item>
                                    {
                                        (Q.type === "multi")?
                                        <Paper elevation={10} style={{marginTop:"20px"}}>
                                                 <Grid container
                                                    direction="column"
                                                    justify="center"
                                                    // alignItems="center"
                                                 >
                                                            <h3>{Q.question}</h3>
                                                            {
                                                                Q.options.map((option,index)=>{
                                                                    return <>
                                                                        <Grid container 
                                                                        direction="row"
                                                                        justify="flex-start"
                                                                        >
                                                                            <Grid item xs={1}>
                                                                                    <Checkbox color="primary" />
                                                                            </Grid>
                                                                            <Grid  item xs={11}>
                                                                                      <h4>{option}</h4>
                                                                            </Grid>
                                                                        </Grid>
                                                                    </>
                                                                })
                                                            }
                                                 </Grid>
                                            
                                            </Paper>
                                        :<></>
                                    }{
                                        (Q.type === "single")?
                                        <Paper elevation={10} style={{marginTop:"20px"}}>
                                             <FormControl component="fieldset">
                                                    <FormLabel component="legend">{Q.question}</FormLabel>
                                                    <RadioGroup aria-label="g" name="sad" value={value} onChange={handleChange}>
                                                        <FormControlLabel value="sad" control={<Radio />} label={Q.options[0]} />
                                                        
                                                        
                                                        <FormControlLabel value="sd" control={<Radio />} label={Q.options[0]} />
                                                        </RadioGroup>
                                                    </FormControl>
                                            </Paper>
                                        :<></>
                                    }
                                 </Grid>
                        </>
                    })
                }    

            </Grid>
            <Button className="bcolor" fullWidth style={{ textTransform:"none", marginTop:"25px",backgroundColor: "#eda180"}}>
                Confirm
            </Button>
    </>
 }
 export default Publish;