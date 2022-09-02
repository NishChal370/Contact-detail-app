import { Avatar, Button, Form, Input, Layout } from "antd"
import { useFormInput } from "../../../../hooks";
import { EmailIcon, PhoneIcon, WebIcon } from "../../../../assets";

const { Item } = Form;
const { Content } = Layout;

interface IEditDetail{
      id: number,
      name: string,
      email: string,
      phone: string,
      website: string,
}


function EditDetail({id, name, email, phone, website}: IEditDetail) {
      const [inputValue, inputChangeHandler, submitHandler] = useFormInput({id, name, email, phone, website});

      return (
            <Form
                  className="flex flex-col gap-[0.57rem] justify-center m-0"
                  onFinish={submitHandler}
            >
                  <Input className="border-0 border-b-2 p-0 text-2xl m-0 font-bold"
                        placeholder="users name.."
                        name="name"
                        required
                        value={inputValue.name} onChange={inputChangeHandler}
                  />

                  <Content className={`flex flex-col gap-0 p-0 m-0`}>
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
                  </Content>
            </Form>
      )
}

export default EditDetail