// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import StepContent from '@mui/material/StepContent';
// import {useForm,FormProvider,useFormContext} from "react-hook-form";


function getStepContent(step: number) {
  switch (step) {
    case 0:
      return (
        <form class="form-group">
        <label>First Name</label>
        <input type="text" placeholder="First Name"></input>
        <br></br>
        <label>Last Name</label>
        <input type="text" placeholder="Last Name"></input>
        </form>
      );
    case 1:
      return (
        <form class="form-group">
        <label>High School Percentage</label>
        <input type="number" placeholder="High School Percentage"></input>
        <br></br>
        <label>Graduation percentage</label>
        <input type="number" placeholder="Graduation Percentage"></input>
        </form>
      );
    case 2:
      return (
        <form class="form-group">
        <label>Permanent Address</label>
        <input type="text" placeholder="Permanent Address"></input>
        <br></br>
        <label>Temporary Address</label>
        <input type="text" placeholder="Temporary Address"></input>
        </form>
      );
    default:
      return 'Unknown step';
  }
}

function HorizontalLinearStepper() {
  const[activeStep,setActiveStep]= React.useState(0)
  const nextStep=()=>{
    if(activeStep<7)
    setActiveStep((currentStep)=>currentStep+1) 
    return({
      
    }
    )
  }
  const previousStep=()=>{
    if(activeStep !== 0)
    setActiveStep((currentStep)=>currentStep-1)
  }

  return(
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        <Step>
          <StepLabel>Personal Details</StepLabel>
          <StepContent>
              {getStepContent(activeStep)}
            </StepContent>
        </Step>
        <Step>
          <StepLabel>Communication Details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Professional Details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Political Details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Government</StepLabel>
        </Step>
        <Step>
          <StepLabel>Attachement</StepLabel>
        </Step>
        <Step>
          <StepLabel>Final</StepLabel>
        </Step>
      </Stepper>
      {/* <h3>{activeStep}</h3> */}
      <Button 
      variant="outlined"
       color="primary"
       onClick={()=>nextStep()}
       >Next</Button>
      <br></br>
      <Button 
       variant="outlined"
       color="primary"
      onClick={()=>previousStep()}
      >Previous Step</Button>
    </div>
  );

}
export default HorizontalLinearStepper;

