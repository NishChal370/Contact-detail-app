import '@testing-library/jest-dom';
import { renderHook } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import { useFormInput } from '../../hooks';


type User = {
      id: number,
      name: string,
      email: string,
      phone: string,
      website: string,  
      avatar: string,
}

type InitialState ={
      loading: boolean,
      error: string,
      usersDetail: User[]
}

const initialState: InitialState = {
      loading: false,
      error: '',
      usersDetail: [] 
}

const mockDispatch = jest.fn();
const mockSelector = jest.fn().mockImplementation( () => (initialState) );

jest.mock( 'react-redux', () => ({
      useDispatch: () => mockDispatch,
      useSelector: () => mockSelector(),
}) );


interface InitialUserDetail{
      [key: string]: string | number
      id: number,
      name: string,
      email: string,
      phone: string,
      website: string,
}

const initialUserDetail: InitialUserDetail ={
      id: 1,
      name: 'Hari',
      email: 'hari@gmail.com',
      phone: '9898787656',
      website: 'hari.com',
}



describe('useFormInput custom hook', ()=>{

      let useFormInputHook = renderHook(() => useFormInput(initialUserDetail));

      beforeEach(()=>{

            useFormInputHook = renderHook( ()=> useFormInput(initialUserDetail));
      })

      test('input value should be empty by default', () => {
            const [inputValue, inputChangeHandler, submitHandler] = useFormInputHook.result.current;
            
            expect(inputValue.id).toBe(1);
            expect(inputChangeHandler).toBeInstanceOf(Function);
            expect(submitHandler).toBeInstanceOf(Function);
      })

      test('email input value should be changed to "hari23@gmail.com" ', () => {
            const { result } = useFormInputHook;

            expect(result.current[0].email).toBe('hari@gmail.com');

            act(() => {
                  const event: any = { target: {value: 'hari23@gmail.com', name:'email'} };

                  result.current[1]( event );
            })

            expect(result.current[0].email).toEqual('hari23@gmail.com');
      })


      test('should call dispatch function at once when submit input value', () => {
            const { result } = useFormInputHook;

            act(() => {
                                  
                  result.current[2]();
            });

            expect(mockDispatch).toHaveBeenCalledTimes(1);
      })
})