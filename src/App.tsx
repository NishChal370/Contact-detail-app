import './App.css';
import { Layout } from 'antd';
import { Home } from './pages';
import { NavBar } from './component';

 const { Content } = Layout;

function App() {
      
      return (
            <Layout className='App bg-semi-white'>
                  <NavBar/>

                  <Content className='main__container px-6 pt-10 pb-20 my-14 h-full flex flex-col justify-center'>
                        
                        <Home/>
                  </Content>
            </Layout>
      );
}

export default App;