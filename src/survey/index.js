import React from "react";
// import "./style.css";
import {Grid,Paper,Button} from '@material-ui/core'
export default function Main(props) {
  return (
      <>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
          
        style={{backGroundColor:"red",height:"100%"}}
        >
          <Paper elevation={10} style={{padding: "10px"}}>
              <Grid item>
                    <img src="https://firebasestorage.googleapis.com/v0/b/doctor-doctor-5006e.appspot.com/o/survey-tiger%2Fsurvey-tiger.png?alt=media&token=410f4fdb-1b71-484c-80f1-4c824b6245a5"></img>
              </Grid>
              <Grid item>
                <Button onClick={()=>{
                        props.history.push("/create")
                }} className="bcolor" fullWidth style={{ textTransform:"none", marginTop:"25px",backgroundColor: "#eda180"}}>
                Create Survey
              </Button>
              </Grid>
              <Grid item>
                <Button onClick={()=>{
                    props.history.push("/take")
                }} className="bcolor" fullWidth style={{ textTransform:"none", marginTop:"15px",marginBottom:"30px",backgroundColor: "#eda180"}}>
                Take Survey
              </Button>
            </Grid>
           </Paper>
      </Grid>
      </>
  );
}