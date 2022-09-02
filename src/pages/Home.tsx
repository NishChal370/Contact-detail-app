import { Layout, Typography } from 'antd';
import { ContactDetails } from '../component';

const { Content } = Layout;
const { Title } = Typography;

function Home() {
      
      return (
            <Layout className='home__container  bg-semi-white flex flex-col justify-center gap-10 w-[98%] self-center 
                              sm:gap-14
                              xl:w-[80rem]
                              2xl:w-[94rem]'
            >
                  <Content className='flex  flex-col self-center justify-center'>

                  
                        <img
                              className='h-30 self-center
                                    sm:w-[30rem] '
                              src='https://selectra.co.uk/sites/selectra.co.uk/files/images/sky_contact_number_banner.png' alt="" 
                        />
                        
                        <Title className="text-6xl p-0 m-0 self-center flex gap-2 text-center">
                              <span className='text-blue-600'>Contact Detail</span>
                        </Title>
                  </Content>

                  <Content className='home-body__container  grid grid-cols-1 gap-10
                                    sm:grid-cols-2 sm:gap-y-14
                                    xl:grid-cols-3
                                    2xl:grid-cols-4 lg:gap-y-16'
                  >
                        
                        <ContactDetails/>
                  </Content>

            </Layout>
      )
}

export default Home