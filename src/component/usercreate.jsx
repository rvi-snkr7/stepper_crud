import React, { Component, useState } from "react";
import axios from "axios";
import { Formik, Form, Field, FieldArray } from 'formik';
import TextField from '@mui/material/TextField';
import { Button, InputLabel, StepContent } from "@mui/material";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// import Select from '@mui/material/Select';
// import { Select } from "formik-material-ui";
function Userform() {
  const url = "http://localhost:3000/user"
  const [activeStep, setActiveStep] = React.useState(0)
  const nextStep = () => {
    if (activeStep < 6)
      setActiveStep((currentStep) => currentStep + 1)
  }
  const previousStep = () => {
    if (activeStep !== 0)
      setActiveStep((currentStep) => currentStep - 1)
  }
  const [deta, setDeta] = useState({
    name: "",
    gender: "",
    category: "",
    Religion: "", 
    dob: "",
    father: "", 
    mother: "", 
    spouse: "",
    child:"",
    number: "",
    email: "", 
    degree: "", 
    course: "", 
    startyear: "",
    endyear: ""}
  );

  function Submit(e) {
    e.preventDefault();
    axios.post(url, {
      name:  deta.name, gender: deta.gender, Religion: deta.Religion, dob: deta.dob, father: deta.father,
      mother: deta.mother, spouse: deta.spouse, child: deta.child,
      number: deta.number, email: deta.email,
       degree: deta.degree, course: deta.course, startyear: deta.startyear,
    })
      .then((response) => response.data)
    setTimeout(window.location.reload.bind(window.location), 100);
  }
  function handle(e) {
    const newdeta = { ...deta }
    newdeta[e.target.id] = e.target.value

    // console.log('name is:',e.target.name);
    // console.log('value is:',e.target.name);
    setDeta(newdeta)
    console.log(deta)
  }

  return (
    <>
      
      <Formik initialValues={{
        name: "", gender: "", category: "", Religion: "", dob: "", father: "", mother: "",
        child:"",number: "",
        email: "", degree: "", course: "", startyear: "", endyear: ""
      }
      } onSubmit={(e) => Submit(e)}>
       


        {(formik) => (
          <Form onSubmit={(e) => Submit(e)}>

            <div className="FORM">
              <Stepper activeStep={activeStep} alternativeLabel>

                <Step>
                  <StepLabel>Personal Details</StepLabel>
                  <div className="steper-context">
                    <StepContent>
                      <h3>Personal Details</h3>
                      <div className="steper1-name">
                        <Field onChange={(e) => handle(e)} id="name" value={deta.name} placeholder="Name" name="Name" type='text' component={TextField} />
                      </div>

                      <div className="steper1-G-R-D">
                        <Field onChange={(e) => handle(e)} id="gender" value={deta.gender} placeholder="Gender" name="Gender" type='text' component={TextField}>
                        </Field>

                        <div className="Select">
                          <Field as="select" onChange={(e) => handle(e)} id="Religion" value={deta.Religion} name="Religion" >
                            <option value="" disabled>Religion</option>
                            <option>Hinduism</option>
                            <option>Islam</option>
                            <option>Christianity</option>
                            <option>Buddhism</option>
                            <option>Jainism</option>
                          </Field>
                        </div>

                      </div>


                      <div className="steper1-G-R">
                        <div>
                          <Field onChange={(e) => handle(e)} id="category" value={deta.category} placeholder="category" type='text' name="category" component={TextField} />
                        </div>
                        <div className="dob">
                          <Field onChange={(e) => handle(e)} id="dob" value={deta.dob} placeholder="Date of Birth" type='integer' name="dob" component={TextField} />
                        </div>
                      </div>
                      <h3>Family Relation</h3>
                      <div className="Steper1-gr" >
                        <div className="steper1-gr-gap">
                          <Field onChange={(e) => handle(e)} id="father" value={deta.father} placeholder="Father" type='text' name="father" component={TextField} />
                        </div>
                        <div className="steper1-gr-gap">
                          <Field onChange={(e) => handle(e)} id="mother" value={deta.mother} placeholder="Mother" type='text' name="mother" component={TextField} />
                        </div>
                        <div className="steper1-gr-gap">
                          <Field onChange={(e) => handle(e)} id="spouse" value={deta.spouse} placeholder="Spouse" type='text' name="spouse" component={TextField} />
                        </div>

                        <div className="steper1-gr-gap">
                         
                          
                          <Field onChange={(e) => handle(e)} id="child" value={deta.child} placeholder="Children" type='text' name="child" component={TextField} />
                        
                         

                        



                        </div>
                      </div>

                    </StepContent>
                  </div>
                </Step>
                <Step>
                  <StepLabel>Communication Details</StepLabel>
                  <div className="steper-context1">
                    <StepContent>
                      <h3>Communication Details</h3>
                      <div className="steper1-N-E">
                        <Field onChange={(e) => handle(e)} id="number" value={deta.number} placeholder="Number" type='text' name="number" component={TextField} />
                        <Field onChange={(e) => handle(e)} id="email" value={deta.email} placeholder="Email" type='text' name="email" component={TextField} />
                      </div>
                    </StepContent>
                  </div>
                </Step>

                <Step>
                  <StepLabel>Professional Details</StepLabel>
                  <div className="steper-context2">
                    <StepContent>
                      <h3>Professional Details</h3>
                      <p>Education Details</p>
                      <div className="steper1-N-E">
                        <Field onChange={(e) => handle(e)} id="degree" value={deta.degree} placeholder="Degree" type='text' name="degree" component={TextField} />
                        <Field onChange={(e) => handle(e)} id="course" value={deta.course} placeholder="Course" type='text' name="course" component={TextField} />
                      </div>

                      <div className="steper1-N-E">
                        <Field onChange={(e) => handle(e)} id="startyear" value={deta.startyear} placeholder="Startyear" type='text' name="startyear" component={TextField} />
                        <Field onChange={(e) => handle(e)} id="endyear" value={deta.endyear} placeholder="Endyear" type='text' name="endyear" component={TextField} />
                      </div>
                    </StepContent>
                  </div>
                </Step>

                <Step>
                  <StepLabel>Political</StepLabel>
                  <div className="SUBMIT-P">
                    <StepContent>
                      <h3>Political</h3>
                      <p>No Fields</p>
                      <p>Skip</p>
                    </StepContent>
                  </div>
                </Step>

                <Step>
                  <StepLabel>Government</StepLabel>
                  <div className="SUBMIT-G">
                    <StepContent>
                      <h3>Government</h3>
                      <p>No Fields</p>
                      <p>Skip</p>
                    </StepContent>
                  </div>
                </Step>

                <Step>
                  <StepLabel>Final</StepLabel>
                  <div className="SUBMIT">
                    <StepContent>
                      <h1>ThankYou!</h1>
                      <p>Please click Submit to save your form.</p>
                      <div className="Submit-btn">
                        <button>Submit</button>
                      </div>
                    </StepContent>
                  </div>
                </Step>
              </Stepper>
            </div>
            <div className="step-button">
              <Button
                variant="outlined"
                color="primary"
                onClick={() => previousStep()}
              >Back
              </Button>
              <br></br>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => nextStep()}
              >Next
              </Button>
            </div>
          </Form>
        )}


      </Formik>

    </>
  )
}
export default Userform;