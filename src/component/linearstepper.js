import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
          <form>
            <input value={"name"}></input>
          </form>
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
      <h3>{activeStep}</h3>
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

