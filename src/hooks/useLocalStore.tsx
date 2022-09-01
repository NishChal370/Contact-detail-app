import { useState } from "react";


const getLocalStore = (): number[] =>{
      let localStorePresent = localStorage.getItem('favouriteUsers');
      
      if(localStorePresent == null) return []

      return JSON.parse(localStorePresent); 
}


function useLocalStore() {
      const [localStore, setLocalStore] = useState<number[]>(getLocalStore());

      const modifyLocalStore = (id: number): void=>{
            let localStorePresent: number[] =  getLocalStore();

            localStorePresent = (!localStorePresent.includes(id))
                        ? addLocalStore(id)
                        : removeLocalStore(id)
            
            setLocalStore(localStorePresent);

            localStorage.setItem('favouriteUsers', JSON.stringify(localStorePresent));
      }

      const addLocalStore = (id: number): number[]=>{
            let localStorePresent: number[]  =  getLocalStore();

            localStorePresent.push(id);

            return localStorePresent;
      }


      const removeLocalStore = (id: number): number[]=>{
            let localStorePresent: number[]  =  getLocalStore();

            
            return localStorePresent.filter((presentId: number) => presentId !== id);
      }

      return [localStore, modifyLocalStore] as const
}

export default useLocalStore