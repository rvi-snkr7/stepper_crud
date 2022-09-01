<FieldArray name="options">
{(fieldArrayProps)=>(<>
<div>
  <button type="button" onClick={()=>fieldArrayProps.push({children:""})}>
    addfield
  </button>
</div>
{formikProps.children.map((index)=>(
  
  <Field name={`options.${index}.children`} onChange={(e)=>handle(e)} id="children" value={deta.children}  type='text' component={TextField}>
    {(fieldProps)=>(
      <div>
      <input placeholder="add children"{...fieldProps.field}/>

      <button type="button" onClick={()=>fieldArrayProps.remove(index)}>
        remove
      </button>
      </div>

    )}
    

  </Field>
))}

</>)}

</FieldArray>
x.
setDeta((prevData) => {
      
    console.log('prevData:',prevData);

    return {...prevData,
      gender:e.target.value,
    
    };
  })




                          <FieldArray name="option">
                            {(fieldArrayprops)=>(
                              <>
                              <button type="button" onClick={()=> fieldArrayprops.push({children:""})}>+</button>
                              {formik.values.options.map((option,index)=>
                              <Field name={`options.${index}.children`}>

                                {(fieldProps)=>(
                                  <div>
                                      <input placeholder="Children" {...fieldProps}/>
                                     <button type="button" onClick={()=>fieldArrayprops.remove({index})}>-
                                     
                                     </button>
                                  </div>
                                 
                                )}
                                

                              </Field>)}
                              </>
                            )}

                          </FieldArray>