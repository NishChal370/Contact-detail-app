import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '../../../../component/common/message';


describe('ErrorMessage component', () => {

      beforeEach(()=>{

            render(
                  <ErrorMessage
                        error='Something is wrong'
                  />
            )
      })


      test('should display error message', ()=>{
            const  errorMessage = screen.getByText('Something is wrong');
      
            expect(errorMessage).toBeInTheDocument();
      })

      test('should have image', ()=>{
            const displayedImage = document.querySelector("img") as HTMLImageElement;

            expect(displayedImage).toBeInTheDocument();
      })

})