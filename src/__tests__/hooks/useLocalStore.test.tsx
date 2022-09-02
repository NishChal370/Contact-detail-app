import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useLocalStore } from "../../hooks";


const mockDispatch = jest.fn();

jest.mock( 'react-redux', () => ({
      useDispatch: () => mockDispatch,
}) );


describe('useLocalStore custom hook', ()=>{

      let useLocalStoreHook = renderHook(() => useLocalStore());

      beforeEach(()=>{

            useLocalStoreHook = renderHook(() => useLocalStore());
      })

      test('showDetail index value should be empty by default', () => {
            const [localStore, modifyLocalStore] = useLocalStoreHook.result.current;

            expect(localStore).toEqual([]);
            expect(modifyLocalStore).toBeInstanceOf(Function);
      })

      test('modifyLocalStore should add "9" to localStore', () => {
            const { result } = useLocalStoreHook;

            expect(result.current[0]).toEqual([]);

            act(() => {
                  result.current[1](9);
            })


            expect(result.current[0]).toEqual([9]);
      })

      test('modifyLocalStore should remove "9" to localStore', () => {
            const { result } = useLocalStoreHook;

            expect(result.current[0]).toEqual([9]);

            act(() => {
                  result.current[1](9);
            })

            expect(result.current[0]).toEqual([]);
      })

})