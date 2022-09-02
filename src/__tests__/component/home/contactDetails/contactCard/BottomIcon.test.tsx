import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import store from '../../../../../app/store';
import { BottomIcon } from '../../../../../component/home/contactDetails/contactCard';


jest.mock("nanoid", () => {
      return { nanoid: () => "1234" };
});

jest.mock('react-redux', () => ({
      ...jest.requireActual('react-redux'),
      useDispatch: jest.fn()
}));
    
const mockDispatch = useDispatch as jest.Mock;
    

describe('BottomIcon component', () => {

      beforeEach(()=>{

            render(
                  <Provider store={store}>
                        <BottomIcon
                              name='delete-icon'
                              icon='iAmImage'
                              clickEvent={mockDispatch}
                        />
                  </Provider>
            )
      })

      test('should image alt name be "delete-icon and image link be "http://localhost/iAmImage"', ()=>{
            const displayedImage = document.querySelector("img") as HTMLImageElement;
            
            expect(displayedImage.alt).toContain("delete-icon");
            expect(displayedImage.src).toContain("http://localhost/iAmImage");
      })

      test('should call dispatch once on click event', ()=>{
            const figureButton = document.querySelector("figure") as HTMLImageElement;

            act(()=>{

                  figureButton.click();
            })

            expect(mockDispatch).toHaveBeenCalledTimes(1);
      })
})