import React, {useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Box from '@mui/material/Box';


function Userform(){
     const url="http://localhost:3000/user"
     const[activeStep,setActiveStep]= React.useState(0)
     const nextStep=()=>{
       if(activeStep<6)
       setActiveStep((currentStep)=>currentStep+1) 
     }
     const previousStep=()=>{
       if(activeStep !== 0)
       setActiveStep((currentStep)=>currentStep-1)
     }
    const[deta,setDeta]=useState({
        name:"", gender:"", category:"",   Religion:"",  dob:"", father:"", mother:"",spouse:"",children:"",number:"",
        email:"",  degree:"",course:"", startyear:"",endyear:"" 
    }
    )
    function Submit(e){
        e.preventDefault();
        axios.post(url,{
            name:deta.name, gender:deta.gender, Religion:deta.Religion, dob:deta.dob, father:deta.father, mother:deta.mother,
            spouse:deta.spouse,children:deta.children, number:deta.number, email:deta.email, number:deta.email, degree:deta.degree,
            course:deta.course,startyear:deta.startyear,endyear:deta.endyear
        })
        .then((response)=>response.data)
        setTimeout(window.location.reload.bind(window.location), 100);
    }
    function handle(e){
        const newdeta={...deta}
        newdeta[e.target.id]=e.target.value
        setDeta(newdeta)
        console.log(newdeta)
}
function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
            <div className="form-group_1">
                <TextField onChange={(e)=>handle(e)} id="name" value={deta.name} label="Name" variant="outlined" />
                <div className="Box1">
                 <TextField onChange={(e)=>handle(e)} id="gender" value={deta.gender} label="Gender" variant="outlined"/>
                 <TextField onChange={(e)=>handle(e)} id="Religion" value={deta.Religion} label="Religion"  variant="outlined"/>
                </div>
                <div className="Box2">
                 <TextField onChange={(e)=>handle(e)} id="category" value={deta.category} label="category" variant="outlined"/>
                 <TextField onChange={(e)=>handle(e)} id="dob" value={deta.dob} label="Date of Birth" variant="outlined"/>
                </div>
                <div className="Box3">
                 <TextField onChange={(e)=>handle(e)} id="father" value={deta.father} label="Father" variant="outlined"/>
                 <TextField onChange={(e)=>handle(e)} id="mother" value={deta.mother} label="Mother" variant="outlined"/>
                </div>
                <div className="Box4">
                 <TextField onChange={(e)=>handle(e)} id="spouse" value={deta.spouse} label="Spouse" variant="outlined"/>
                 <TextField onChange={(e)=>handle(e)} id="children" value={deta.children} label="Children" variant="outlined"/>
                </div>         
            </div>
        );
      case 1:
        return (
          <form class="form-group">
           <TextField onChange={(e)=>handle(e)} id="number" value={deta.number} label="Number" variant="outlined"/>
           <TextField onChange={(e)=>handle(e)} id="email" value={deta.email} label="Email" variant="outlined"/>
          </form>
        );
      case 2:
        return (
          <form class="form-group">
            <TextField onChange={(e)=>handle(e)} id="degree" value={deta.degree} label="Degree" variant="outlined"/>
            <TextField onChange={(e)=>handle(e)} id="course" value={deta.course} label="Course" variant="outlined"/>
            <TextField onChange={(e)=>handle(e)} id="startyear" value={deta.startyear} label="Start Year" variant="outlined"/>
            <TextField onChange={(e)=>handle(e)} id="endyear" value={deta.endyear} label="End Year" variant="outlined"/>
          </form>
        );
        case 3:(
            <form class="form-group">
            </form>
            
        )
        case 4:(
            <form class="form-group">
            </form>  
        )
        case 5:(
            <form class="form-group">
            <input {...activeStep === step.length - 1 ? 'Finish' : 'Next'} /> 
            </form> 
        )
        break;  
      default:
        return 'Unknown step';
    }
  }
   return(

    <div className="STEP">
      <Box>  
        <Stepper activeStep={activeStep} alternativeLabel>      
          <Step>
            <StepLabel>Personal Details</StepLabel>  
              <StepContent>
                  {getStepContent(activeStep)}
              </StepContent>
          </Step>
                
          <Step>
            <StepLabel>Communication Details</StepLabel>
              <StepContent>
                {getStepContent(activeStep)}
                </StepContent>
          </Step> 

          <Step>
           <StepLabel>Professional Details</StepLabel>
              <StepContent>
               {getStepContent(activeStep)}
              </StepContent>
          </Step>

          <Step>
             <StepLabel>Political</StepLabel>
          </Step>


          <Step>
             <StepLabel>Government</StepLabel>
          </Step>

          <Step>
            <StepLabel>Final</StepLabel>
              <StepContent>
                <button>Submit</button>
                  {getStepContent(activeStep)}
              </StepContent>
          </Step>
                   
        </Stepper>

      </Box> 

      <footer className="FOOTER">
        <div className="BUTTONS">
          <div className="btn1">
             <Button 
                 variant="outlined"
                  color="primary"
                  onClick={()=>previousStep()}
                  >Previous Step
              </Button>
          </div>
          <div className="btn2">
            <Button 
               variant="outlined"
                color="primary"
                onClick={()=>nextStep()}
                >Next
            </Button>
          </div>

        </div>
      </footer>          
    </div>
  )
}
export default Userform;