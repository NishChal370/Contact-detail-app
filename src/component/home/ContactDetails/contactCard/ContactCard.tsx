import Swal from 'sweetalert2';
import { useState } from 'react';
import { Layout, Card, Typography } from 'antd';
import { useLocalStore } from '../../../../hooks';
import { useAppDispatch } from '../../../../app/hooks';
import { BottomIcon, DetailTexts, EditDetail } from './index';
import { deleteUserDetail } from '../../../../feature/requests';
import { DeleteIcon, EditIcon, FavouriteIcon, UnfavouriteIcon } from '../../../../assets';


const { Content } = Layout;
const { Title } = Typography;


interface IContactCardProps{
      id: number
      name: string,
      email: string,
      phone: string,
      website: string,
      image: string
}

function ContactCard({ id, name, email, phone, website, image }: IContactCardProps) {
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
                                    src={image}
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

                  <Content className={`contact-card__info flex flex-col  ${!toEditContact ?'gap-6 body-text--padding' :'gap-2 body-input--padding'}  justify- m-0`}>
                        <Title className='text-2xl m-0'>{name}</Title>

                        <Content className={`flex flex-col gap-3`}>
                              {!toEditContact
                                    ? <DetailTexts
                                          email={email}
                                          phone={phone}
                                          website={website}
                                      /> 
                                      
                                    : <EditDetail
                                          id={id}
                                          email={email}
                                          phone={phone}
                                          website={website}
                                     />
                              }
                        </Content>
                  </Content>

            </Card> 
      )
}

export default ContactCard