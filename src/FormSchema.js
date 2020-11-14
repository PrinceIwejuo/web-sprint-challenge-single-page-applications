import * as yup from 'yup'


export default yup.object().shape({

 size: yup.string()    
    .oneOf([ 'small', 'medium', 'large'], 'size is required'),
 pepperoni: yup.boolean(),
 mushrooms: yup.boolean(),
 sausage: yup.boolean(),
 ham: yup.boolean(),
 pineapple: yup.boolean(),
 instructions: yup.string()
})