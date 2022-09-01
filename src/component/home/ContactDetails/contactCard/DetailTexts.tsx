import { Card, Avatar, Layout, Typography  } from 'antd';
import { EmailIcon, PhoneIcon, WebIcon } from '../../../../assets';

const { Meta } = Card;
const { Content } = Layout;
const { Title } = Typography;

interface DetailTexts{
      name: string
      email: string,
      phone: string,
      website: string,
}

function DetailTexts({ name, email, phone, website}: DetailTexts) {

      return (
            <Content className={`contact-card__info flex flex-col gap-6 justify-center`}>
                  <Title className='text-2xl m-0'>{name}</Title>

                  <Content className={`flex flex-col gap-3`}>
                        <Meta
                              title={<a href={`mailto: ${email}`}>{email}</a>}
                              avatar={
                                    <a href={`mailto: ${email}`}> 
                                          <Avatar src={EmailIcon} className="w-7 h-full"/> 
                                    </a>
                              }
                        />

                        <Meta
                              title={<a href={`tel: ${phone}`}>{phone}</a>}
                              avatar={
                                    <a href={`tel: ${phone}`}>
                                          <Avatar src={PhoneIcon} className="w-7 h-full"/>
                                    </a>}
                        />

                        <Meta
                              title={<a href={`http://www.${website} `}>{website}</a>}
                              avatar={
                                    <a href={`http://www.${website} `}>
                                          <Avatar src={WebIcon} className="w-7 h-full"/>
                                    </a>
                              }
                        />
                  </Content>
            </Content>
      )
}

export default DetailTexts