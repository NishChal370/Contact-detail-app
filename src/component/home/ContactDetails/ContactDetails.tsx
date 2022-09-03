import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import ContactCard from './contactCard/ContactCard';
import { fetchUsersDetail } from '../../../feature/requests';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { ErrorMessage, LoadingMessage } from '../../common/message';




function ContactDetails() {
      const dispatch = useAppDispatch(); 
      const { loading, error, usersDetail } = useAppSelector(state => state.usersDetail);


      useEffect(()=>{

            dispatch(fetchUsersDetail());    
      },[])

      if ( loading ) return  <LoadingMessage/>

      if ( !loading && error ) return <ErrorMessage error={error}/>

      if (!loading && Object.keys(usersDetail).length) return (
            <>
            {usersDetail.map( (userDetail)=>{return(

                  <ContactCard key={nanoid()}
                        {...userDetail}
                  />
            )} )  }
            </>
      )

      
      return null
}

export default ContactDetails