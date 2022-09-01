import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { ErrorMessage, LoadingMessage } from '../../common/message';
import ContactCard from './contactCard/ContactCard';
import getUserImage from '../../../utils/getUserImage';
import { fetchUsersDetail } from '../../../feature/requests';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';




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
            {usersDetail.map( ({name, email, phone, website, id})=>{return(

                  <ContactCard key={nanoid()}
                        id={id}
                        name= {name}
                        email= {email}
                        phone= {phone}
                        website= {website}
                        avatar={getUserImage()}
                  />
            )} )  }
            </>
      )

      
      return null
}

export default ContactDetails