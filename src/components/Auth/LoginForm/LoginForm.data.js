import * as Yup from 'yup';

export function initialValues(){
    return{
        px: "",
    };
}

export function validationSchema(){
    return Yup.object({
        px: Yup.string().required(true),
    })
}