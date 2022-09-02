import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../app/store';
import { NavBar } from '../../../component';

jest.mock("nanoid", () => {
      return { nanoid: () => "1234" };
});



describe('NavBar component', () => {

      beforeEach(()=>{

            render(<Provider store={store}><NavBar/></Provider>)
      })

      test('should have "सम्पर्क" as title text', ()=>{
            const  titleText = screen.getByText(/सम्पर्क/i);
      
            expect(titleText).toBeInTheDocument();
      })
})