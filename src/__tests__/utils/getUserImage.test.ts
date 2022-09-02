import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import getUserImage from '../../utils/getUserImage';


describe('getUserImage', () => {

      test('should get image as string', ()=>{
            
            let image: string  = '';

            act(()=>{
                  image = getUserImage();
            })

            
            expect(typeof image).toBe('string')
      })

})