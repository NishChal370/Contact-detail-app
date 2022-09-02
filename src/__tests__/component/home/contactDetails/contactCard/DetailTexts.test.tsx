import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../../../app/store';
import { DetailTexts } from '../../../../../component/home/contactDetails/contactCard';


jest.mock("nanoid", () => {
      return { nanoid: () => "1234" };
});

describe('DetailText component', () => {

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

            render(
                  <Provider store={store}>
                        <DetailTexts
                              name='Mike'
                              email='mike@gmail.com'
                              phone='982987876'
                              website='mike.com'
                        />
                  </Provider>
            )
      })

      test('should have "Mike" as title text', ()=>{
            const  titleText = screen.getAllByText(/Mike/i)[0];
            
            expect(titleText).toBeInTheDocument();
      })

      test('should have email as "mike@gmail.com"',()=>{
            const  emailText = screen.getAllByText(/mike@gmail.com/i)[0];
            
            expect(emailText).toBeInTheDocument();
      })

      test('should have "982987876" as phone text', ()=>{
            const  phoneText = screen.getAllByText(/982987876/i)[0];
            
            expect(phoneText).toBeInTheDocument();
      })
})