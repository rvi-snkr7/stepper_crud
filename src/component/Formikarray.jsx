// import React from "react";
// import { Formik, Form, Field, FieldArray } from 'formik';


// function formikArray() {


// const initialValues = {
//     numberOfChildrens: '',
//         childrens: []
//     };
//     function onChangeChildrens(e, field, values, setValues) {
//         // update dynamic form
//         const childrens = [...values.childrens];
//         const numberOfChildrens = e.target.value || 0;
//         const previousNumber = parseInt(field.value || '0');
//         if (previousNumber < numberOfChildrens) {
//             for (let i = previousNumber; i < numberOfChildrens; i++) {
//                 childrens.push({ name: '',});
//             }
//         } else {
//             for (let i = previousNumber; i >= numberOfChildrens; i--) {
//                 childrens.splice(i, 1);
//             }
//         }
//         setValues({ ...values, childrens });

//         // call formik onChange method
//         field.onChange(e);
//     }
//     function onSubmit(fields) {
//         // display form field values on success
//         alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
//     }

//   return (
//     <div>
//         <h1>Add Children</h1>
//           <Formik initialValues={initialValues}  onSubmit={onSubmit}>
//                 <Form>
//                     <div className="card m-3">
//                         <h5 className="card-header">React + Formik Dynamic Form Example</h5>
//                         <div className="card-body border-bottom">
//                             <div className="form-row">
//                                 <div className="form-group">
//                                     <label>Number of Tickets</label>
//                                     <Field name="numberOfChildrens">
//                                     {({ field }) => (
//                                         <select {...field}  onChange={e => onChangeTickets(e, field, values, setValues)}>
//                                             <option value=""></option>
//                                             {[1,2,3,4,5,6,7,8,9,10].map(i => 
//                                                 <option key={i} value={i}>{i}</option>
//                                             )}
//                                         </select>
//                                     )}
//                                     </Field>
//                                 </div>
//                             </div>
//                         </div>
//                         <FieldArray name="Childrens">
//                         {() => (values.childrens.map((children, i) => {
                    
//                             return (
//                                 <div key={i} className="list-group list-group-flush">
//                                     <div className="list-group-item">
//                                         <h5 className="card-title">Ticket {i + 1}</h5>
//                                         <div className="form-row">
//                                             <div className="form-group col-6">
//                                                 <label>Name</label>
//                                                 <Field name={`childrens.${i}.name`} type="text"/>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         }))}
//                         </FieldArray>
//                         <div className="card-footer text-center border-top-0">
//                             <button type="submit" className="btn btn-primary mr-1">
//                                 add childrens
//                             </button>
//                             <button className="btn btn-secondary mr-1" type="reset">Reset</button>
//                         </div>
//                     </div>
//                 </Form>
//         </Formik>
//     </div>
//   )
// }

// export default formikArray