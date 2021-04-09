import { ChangeEvent, useState } from 'react';


export const useForm = ( initialState: any ) => {

    const [formulario, setformulario]= useState(initialState);

        const handleChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {
            const { name, value } = target;
       
      setformulario({
          ...formulario,
           [name]: value
      });
    }
}