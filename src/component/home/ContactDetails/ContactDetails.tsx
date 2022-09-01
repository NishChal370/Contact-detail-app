import { nanoid } from 'nanoid';
import { useEffect } from 'react'
import ContactCard from './contactCard/ContactCard';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchUsersDetail } from '../../../feature/UsersDetailSlice';



function ContactDetails() {
      const dispatch = useAppDispatch();
      
      const { loading, error, usersDetail } = useAppSelector(state => state.usersDetail);


      useEffect(()=>{

            dispatch(fetchUsersDetail());    
      },[])

      if ( loading ) return <h1>Loading..</h1>

      if ( !loading && error ) return <h1>Error: {error}</h1>

      if (!loading && Object.keys(usersDetail).length) return (
            <>
            {usersDetail.map( ({name, email, phone, website, id})=>{return(

                  <ContactCard key={nanoid()}
                        id={id}
                        name= {name}
                        email= {email}
                        phone= {phone}
                        website= {website}
                        image= "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  />
            )} )  }
            </>
      )

      
      return null
}

export default ContactDetails