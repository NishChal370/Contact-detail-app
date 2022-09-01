import { Avatar, Button, Form, Input } from "antd"
import { useFormInput } from "../../../../hooks";
import { EmailIcon, PhoneIcon, WebIcon } from "../../../../assets";

const { Item } = Form;

interface DetailTexts{
      id: number,
      email: string,
      phone: string,
      website: string,
}


function EditDetail({id, email, phone, website}: DetailTexts) {
      const [inputValue, inputChangeHandler, submitHandler] = useFormInput({id, email, phone, website});

      return (
            <Form
                  className="flex flex-col gap-0"
                  onFinish={submitHandler}
            >
                  <Item 
                        className="h-fit"
                        label={
                              <a href={`mailto: ${email}`}> 
                                    <Avatar src={EmailIcon} className="w-7 h-full"/> 
                              </a>
                        }
                        rules={[{ required: true, message: 'Please input user name!' }]}
                  >
                        
                        <Input className="border-0 border-b-2 p-0"
                              placeholder="email.."
                              name="email"
                              required
                              value={inputValue.email} onChange={inputChangeHandler}
                        />
                  </Item>
            
                  <Item
                        label={
                              <a href={`tel: ${phone}`}>
                                    <Avatar src={PhoneIcon} className="w-7 h-full"/>
                              </a>
                        }
                        rules={[{ required: true, message: 'Please input user phone number!' }]}
                  >
                        
                        <Input className="border-0 border-b-2 p-0" 
                              placeholder="phone number.."
                              name="phone"
                              required
                              value={inputValue.phone} onChange={inputChangeHandler}
                        />
                  </Item>

                  <Item
                        label={
                              <a href={`http://www.${website} `}>
                                    <Avatar src={WebIcon} className="w-7 h-full"/>
                              </a>
                        }
                        rules={[{ required: false, message: 'Please input user web link!' }]}
                  >

                        <Input className="border-0 border-b-2 p-0" 
                              placeholder="website.."
                              name="website"
                              required
                              value={inputValue.website} onChange={inputChangeHandler}
                        />
                  </Item>
            
                  <Item className="flex justify-end">
                        <Button htmlType="submit" ghost style={{color:'blue'}} >
                              Submit
                        </Button>
                  </Item>
            </Form>
      )
}

export default EditDetail