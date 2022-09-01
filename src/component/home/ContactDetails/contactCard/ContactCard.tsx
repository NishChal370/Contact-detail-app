import { Layout, Card, Avatar, Typography } from 'antd';
import { DeleteIcon, EditIcon, EmailIcon, FavouriteIcon, PhoneIcon, UnfavouriteIcon, WebIcon } from '../../../../assets';
import BottomIcon from './BottomIcon';


const { Meta } = Card;
const { Content } = Layout;
const { Title } = Typography;


interface IContactCardProps{
      name: string,
      email: string,
      phone: string,
      website: string,
      image: string
}

function ContactCard({ name, email, phone, website, image }: IContactCardProps) {
      return (
            <Card
                  className='contact-card__container w-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]'
                  
                  hoverable

                  cover={
                        <figure className='w-full h-[16rem]'>
                              <img
                                    className='object-cover bg-fixed w-full h-full'
                                    alt="example"
                                    src={image}
                              />
                        </figure>
                  }

                  actions={[
                        <BottomIcon
                              name="favourite-icon"
                              icon={UnfavouriteIcon}
                        />,
                        <BottomIcon
                              name="edit-icon"
                              icon={EditIcon}
                        />,
                        <BottomIcon
                              name="delete-icon"
                              icon={DeleteIcon}
                        />,
                  ]}
            >

                  <Content className='contact-card__info flex flex-col gap-6 justify-start p-0 m-0'>
                        <Title className='text-2xl m-0'>{name}</Title>

                        <Content className='flex flex-col gap-3'>
                              <Meta
                                    title={<a href={`mailto: ${email}`}>{email}</a>}
                                    avatar={
                                          <a href={`mailto: ${email}`}> 
                                                <Avatar src={EmailIcon} className="w-7 h-full"/> 
                                          </a>}
                              />

                              <Meta
                                    title={<a href={`tel: ${phone}`}>{phone}</a>}
                                    avatar={
                                          <a href={`tel: ${phone}`}>
                                                <Avatar src={PhoneIcon} className="w-7 h-full"/>
                                          </a>}
                              />

                              <Meta
                                    title={<a href={website}>{website}</a>}
                                    avatar={
                                          <a href={`http://www.${website} `}>
                                                <Avatar src={WebIcon} className="w-7 h-full"/>
                                          </a>}
                              />
                        </Content>

                  </Content>

            </Card> 
      )
}

export default ContactCard