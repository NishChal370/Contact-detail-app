import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { Home } from '../../pages';

jest.mock("nanoid", () => {
      return { nanoid: () => "1234" };
});


describe('Home page', () => {

      beforeEach(()=>{

            render(<Provider store={store}><Home/></Provider>)
      })

      test('should have "Contact Detail" as title text', ()=>{
            const  titleText = screen.getByText(/Contact Detail/i);
      
            expect(titleText).toBeInTheDocument();
      })

      test('should have image', ()=>{
            const displayedImage = document.querySelector("img") as HTMLImageElement;

            expect(displayedImage).toBeInTheDocument();
      })

})