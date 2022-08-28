import React, {useState } from "react";
import axios from "axios";
import {Formik,Form, Field,FormikConfig,FormikValues} from 'formik';
import TextField from '@mui/material/TextField';
import { Button, StepContent } from "@mui/material";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// import StepContent from '@mui/material/StepContent';



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
        name:"",
        gender:"",
        category:"",
        Religion:"",
        dob:"",
        father:"",
        mother:"",
        spouse:"",
        children:"",
        number:"",
        email:"",
        degree:"",
        course:"",
        startyear:"",
        endyear:""
    }
    )
    function Submit(e){
        e.preventDefault();
        axios.post(url,{
            name:deta.name,
            gender:deta.gender,
            Religion:deta.Religion,
            dob:deta.dob,
            father:deta.father,
            mother:deta.mother,
            spouse:deta.spouse,
            children:deta.children,
            number:deta.number,
            email:deta.email,
            number:deta.email,
            degree:deta.degree,
            course:deta.course,
            startyear:deta.startyear,
            endyear:deta.endyear
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
return(
    <div>
        <Formik initialValues={{
              name:"",
              gender:"",
              category:"",
              Religion:"",
              dob:"",
              father:"",
              mother:"",
              spouse:"",
              children:"",
              number:"",
              email:"",
              degree:"",
              course:"",
              startyear:"",
              endyear:""
        }} onSubmit={(e)=>Submit(e)}>
            <Form onSubmit={(e)=>Submit(e)}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    <Step>
                        <StepLabel>Personal Details</StepLabel>
                          <div className="personal-details">
                            <StepContent>
                             <Field onChange={(e)=>handle(e)} id="name" value={deta.name} placeholder="Name" name="name" type='text' component={TextField}/>
                             <Field onChange={(e)=>handle(e)} id="gender" value={deta.gender} placeholder="Gender" type='text' component={TextField}/>
                             <Field onChange={(e)=>handle(e)} id="Religion" value={deta.Religion} placeholder="Religion" type='text' component={TextField}/>
                             <Field onChange={(e)=>handle(e)} id="category" value={deta.category} placeholder="category" type='text' component={TextField}/>
                             <Field onChange={(e)=>handle(e)} id="dob" value={deta.dob} placeholder="Date of Birth" type='integer' component={TextField}/>
                             <Field onChange={(e)=>handle(e)} id="father" value={deta.father} placeholder="Father" type='text' component={TextField}/>
                             <Field onChange={(e)=>handle(e)} id="mother" value={deta.mother} placeholder="Mother" type='text'component={TextField}/>
                             <Field onChange={(e)=>handle(e)} id="spouse" value={deta.spouse} placeholder="Spouse" type='text' component={TextField}/>
                             <Field onChange={(e)=>handle(e)} id="children" value={deta.children} placeholder="Children" type='number' component={TextField}/>
                             </StepContent>
                          </div>
                    </Step>
                
                     <Step>
                         <StepLabel>Communication Details</StepLabel>
                         <div classname="communication-detail">
                          <StepContent>
                           <Field onChange={(e)=>handle(e)} id="number" value={deta.number} placeholder="Number" type='number' component={TextField}/>
                           <Field onChange={(e)=>handle(e)} id="email" value={deta.email} placeholder="Email" type='text' component={TextField}/>
                           </StepContent>
                         </div>
                     </Step> 

                     <Step>
                      <StepLabel>Professional Details</StepLabel>
                        <div className="professional-detail">
                          <StepContent>
                          <Field onChange={(e)=>handle(e)} id="degree" value={deta.degree} placeholder="Degree" type='text' component={TextField}/>
                          <Field onChange={(e)=>handle(e)} id="course" value={deta.course} placeholder="Course" type='text' component={TextField}/>
                          <Field onChange={(e)=>handle(e)} id="startyear" value={deta.startyear} placeholder="Startyear" type='text' component={TextField}/>
                          <Field onChange={(e)=>handle(e)} id="endyear" value={deta.endyear} placeholder="Endyear" type='text' component={TextField}/>
                          </StepContent>
                        </div>
                     </Step>
                     <Step>
                      <StepLabel>Political</StepLabel>
                    </Step>
                    <Step>
                     <StepLabel>Government</StepLabel>
                    </Step>
                    <Step>
                     <StepLabel>Final</StepLabel>
                     <button>Submit</button>
                    </Step>
                    <div>
                        <Button 
                          variant="outlined"
                          color="primary"
                          onClick={()=>nextStep()}
                          >Next
                        </Button>
                        <br></br>
                        <Button 
                          variant="outlined"
                          color="primary"
                          onClick={()=>previousStep()}
                          >Previous Step
                        </Button>
                    </div>
                </Stepper> 
           </Form> 
            
        </Formik>
    </div>
)
}
export default Userform;