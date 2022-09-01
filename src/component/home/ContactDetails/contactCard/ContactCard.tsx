import Swal from 'sweetalert2';
import { useState } from 'react';
import { Layout, Card } from 'antd';
import { useLocalStore } from '../../../../hooks';
import { useAppDispatch } from '../../../../app/hooks';
import { BottomIcon, DetailTexts, EditDetail } from './index';
import { deleteUserDetail } from '../../../../feature/requests';
import { DeleteIcon, EditIcon, FavouriteIcon, UnfavouriteIcon } from '../../../../assets';


const { Content } = Layout;


interface IContactCardProps{
      id: number
      name: string,
      email: string,
      phone: string,
      website: string,
      avatar: string
}

function ContactCard({ id, name, email, phone, website, avatar }: IContactCardProps) {
      const dispatch = useAppDispatch();
      const [localStore, modifyLocalStore] = useLocalStore();
      const [toEditContact, setToEditContact] = useState(false);

      return (
            <Card
                  className='contact-card__container w-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]'
                  
                  hoverable

                  cover={
                        <figure className='w-full h-[16rem]'>
                              <img
                                    className='object-cover bg-fixed w-full h-full'
                                    alt="user-image"
                                    src={avatar}
                              />
                        </figure>
                  }

                  actions={[
                        <BottomIcon
                              name="favourite-icon"
                              icon={localStore.includes(id) ?FavouriteIcon :UnfavouriteIcon}
                              clickEvent={()=>modifyLocalStore(id)}

                        />,
                        <BottomIcon
                              name="edit-icon"
                              icon={EditIcon}
                              clickEvent={()=>  setToEditContact(preState => !preState)}
                        />,
                        <BottomIcon
                              name="delete-icon"
                              icon={DeleteIcon}
                              clickEvent={()=>{
                                    dispatch(deleteUserDetail(id));

                                    localStore.includes(id) && modifyLocalStore(id);
                                    
                                    Swal.fire(`${name} deleted successfully`, 'This is temporary delete', 'success');

                              }}
                        />,
                  ]}
            >

                  <Content className={`card__body flex flex-col ${!toEditContact ?'body-text--padding' :'body-input--padding'}  justify-center m-0`}>
                        {!toEditContact
                              ? <DetailTexts
                                    name={name}
                                    email={email}
                                    phone={phone}
                                    website={website}
                                /> 
                                    
                              : <EditDetail
                                    id={id}
                                    name={name}
                                    email={email}
                                    phone={phone}
                                    website={website}
                                 />
                        }
                  </Content>

            </Card> 
      )
}

export default ContactCard