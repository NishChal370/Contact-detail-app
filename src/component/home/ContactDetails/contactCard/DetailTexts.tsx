import { Card, Avatar, } from 'antd';
import { EmailIcon, PhoneIcon, WebIcon } from '../../../../assets';

const { Meta } = Card;

interface DetailTexts{
      email: string,
      phone: string,
      website: string,
}

function DetailTexts({email, phone, website}: DetailTexts) {

      return (
            <>
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
                        title={<a href={`http://www.${website} `}>{website}</a>}
                        avatar={
                              <a href={`http://www.${website} `}>
                                    <Avatar src={WebIcon} className="w-7 h-full"/>
                              </a>}
                  />
            </>
      )
}

export default DetailTexts