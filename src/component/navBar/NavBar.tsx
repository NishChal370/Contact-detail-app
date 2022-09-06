import { Dropdown, Layout, Menu, Space, Typography  } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import i18next from 'i18next';
import { useTranslation } from "react-i18next";
import { useAppDispatch } from '../../app/hooks';
import { fetchUsersDetail } from '../../feature/requests';
import { LANGUAGE_OPTIONS } from '../../language/constant';


const { Header  } = Layout;
const { Title } = Typography;

function NavBar() {
      const dispatch = useAppDispatch();
      const { t } = useTranslation();
      const {language, changeLanguage} = i18next;     

      return (
            <Layout className='navbar__container flex flex-row justify-between px-4 bg-white--color border-b-2 fixed z-10 w-full
                              lg:px-10
                              xl:px-20'
            >
                  <Header className="bg-white--color p-0 m-0 flex ">
                        <Title className="text-4xl p-0 m-0 self-center flex gap-2">
                              <span className='text-blue-600'>{t('Contact')}</span>
                              <span className='text-red-600'>{t('Detail')}</span>
                        </Title>
                  </Header> 

                  <aside className='self-center'>
                        <Dropdown 
                              className='cursor-pointer text-blue-600 text-center'
                              overlay= {
                                    <Menu
                                          onClick={({key})=>{ 
                                                changeLanguage(key);
                                                dispatch(fetchUsersDetail(key));
                                          }}
                                          items={LANGUAGE_OPTIONS}
                                    />
                              }                   
                        >
                              <Space>
                                    <span className='hidden sm:block'>
                                          {LANGUAGE_OPTIONS.find(({key})=> key ===language)?.label}
                                    </span>
                                    
                                    <DownOutlined/>
                              </Space>
                        </Dropdown>
                  </aside>
            </Layout>
      )
}

export default NavBar