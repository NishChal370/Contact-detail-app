import { Layout, Typography  } from 'antd';

const { Header  } = Layout;
const { Title } = Typography;

function NavBar() {

      return (
            <Layout className='navbar__container flex flex-row justify-start px-4 bg-white--color border-b-2 fixed z-10 w-full
                              lg:px-10
                              xl:px-20'
            >
                  <Header className="bg-white--color p-0 m-0 flex ">
                        <Title className="text-4xl p-0 m-0 self-center flex gap-2">
                              <span className='text-blue-600'>सम्पर्क</span>
                              
                              <span className='text-red-600'>विवरण</span>
                        </Title>
                  </Header> 
            </Layout>
      )
}

export default NavBar