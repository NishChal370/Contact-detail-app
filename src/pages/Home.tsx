import { Layout, PageHeader } from 'antd';
import { ContactDetails } from '../component';

const { Content } = Layout;

function Home() {
      
      return (
            <Layout className='home__container  bg-semi-white flex flex-col justify-center gap-10 w-[98%] self-center 
                              xl:w-[80rem]
                              2xl:w-[94rem]'
            >
                  <PageHeader
                        className="p-0 m-0"
                        title="Title"
                  />

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