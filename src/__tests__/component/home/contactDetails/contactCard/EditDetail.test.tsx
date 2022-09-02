import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent, render } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import store from '../../../../../app/store';
import { EditDetail } from '../../../../../component/home/contactDetails/contactCard';


jest.mock("nanoid", () => {
      return { nanoid: () => "1234" };
});

jest.mock('react-redux', () => ({
      ...jest.requireActual('react-redux'),
      useDispatch: jest.fn()
}));
    
const mockDispatch = useDispatch as jest.Mock;
    

describe('EditDetail component', () => {

      let renderReturns:any;

      beforeAll(() => {
            window.matchMedia = (query) => ({
                  matches: false,
                  media: query,
                  onchange: null,
                  addListener: jest.fn(), // deprecated
                  removeListener: jest.fn(), // deprecated
                  addEventListener: jest.fn(),
                  removeEventListener: jest.fn(),
                  dispatchEvent: jest.fn(),
            })
      });

      beforeEach(()=>{

            renderReturns = render(
                  <Provider store={store}>
                        <EditDetail
                              id={1}
                              name='Mike'
                              email='mike@gmail.com'
                              phone='9893876745'
                              website='mike.com'
                        />
                  </Provider>
            )
      })


      test('should have inputs',()=>{
            const inputs = document.querySelector("input") as HTMLInputElement;

            expect(inputs).toBeInTheDocument();
      })


      test('should change value of input[name="name"] to Jack' ,()=>{
            const  input = renderReturns.container.querySelector(`input[name="name"]`);

            expect(input.value).toBe('Mike');

            act(()=>{
                  fireEvent.change(input, {target: {value: 'Jack'}});
            })

            expect(input.value).toBe('Jack');
      })


      test('should change value of input[name="email"] to jack@gmail.com' ,()=>{
            const  input = renderReturns.container.querySelector(`input[name="email"]`);

            expect(input.value).toBe('mike@gmail.com');

            act(()=>{
                  fireEvent.change(input, {target: {value: 'jack@gmail.com'}});
            })

            expect(input.value).toBe('jack@gmail.com');
      })

      test('should change value of input[name="phone"] to 9893876745' ,()=>{
            const  input = renderReturns.container.querySelector(`input[name="phone"]`);

            expect(input.value).toBe('9893876745');

            act(()=>{
                  fireEvent.change(input, {target: {value: '9878765654'}});
            })

            expect(input.value).toBe('9878765654');
      })
      
      test('should change value of input[name="website"] to mike.com' ,()=>{
            const  input = renderReturns.container.querySelector(`input[name="website"]`);

            expect(input.value).toBe('mike.com');

            act(()=>{
                  fireEvent.change(input, {target: {value: 'jack.com'}});
            })

            expect(input.value).toBe('jack.com');
      })
})