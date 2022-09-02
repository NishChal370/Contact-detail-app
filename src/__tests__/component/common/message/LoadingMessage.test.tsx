import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { LoadingMessage } from '../../../../component/common/message';


describe('LoadingMessage component', () => {

      beforeEach(()=>{

            render( <LoadingMessage/> )
      })

      test('should have svg', ()=>{
            const svg = document.querySelector("svg") as SVGSVGElement;

            expect(svg).toBeInTheDocument();
      })

})