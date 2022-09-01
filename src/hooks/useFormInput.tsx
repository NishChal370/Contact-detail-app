import { useState } from "react";
import Swal from "sweetalert2";
import { useAppDispatch } from "../app/hooks";
import { putUserDetail } from "../feature/requests";

type InitialState = {
      [key: string]: string | number,
      id: number,
      email: string,
      phone: string,
      website: string,
}

function useFormInput(initialState: InitialState) {
      const dispatch = useAppDispatch();
      const [inputValue, setInputValue] = useState<InitialState>(initialState);

      const inputChangeHandler = ({target}:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void =>{
            inputValue[target.name] = target.value;
            
            setInputValue({...inputValue});
      }

      const submitHandler = (): void=>{
            Swal.fire(`Changed successfully`, 'This is temporary change', 'success'); 

            dispatch(putUserDetail(inputValue))
      }

      return [inputValue, inputChangeHandler, submitHandler] as const
}

export default useFormInput