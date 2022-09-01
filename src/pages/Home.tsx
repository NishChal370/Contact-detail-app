import { Layout, PageHeader } from 'antd';
import { ContactCard } from '../component';

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
                        
                        <ContactCard
                              name= "MY name"
                              email= "nishchal.350@gmail.com"
                              phone= "9878787934"
                              website= 'www.google.com'
                              image= "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        />

                        <ContactCard
                              name= "MY name"
                              email= "nishchal.350@gmail.com"
                              phone= "9878787934"
                              website= 'www.google.com'
                              image= "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        />

                        <ContactCard
                              name= "MY name"
                              email= "nishchal.350@gmail.com"
                              phone= "9878787934"
                              website= 'www.google.com'
                              image= 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                        />

                        <ContactCard
                              name="MY name"
                              email="nishchal.350@gmail.com"
                              phone="9878787934"
                              website='www.google.com'
                              image= 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                        />
                        
                        <ContactCard
                              name="MY name"
                              email="nishchal.350@gmail.com"
                              phone="9878787934"
                              website='www.google.com'
                              image='https://images.pexels.com/photos/9623734/pexels-photo-9623734.jpeg?w=1000&h=600&fit=crop&dpr=1'
                        />
                        
                        <ContactCard
                              name="MY name"
                              email="nishchal.350@gmail.com"
                              phone="9878787934"
                              website='www.google.com'
                              image='https://images.pexels.com/photos/11203593/pexels-photo-11203593.jpeg?w=1000&h=600&fit=crop&dpr=1'
                        />

                        <ContactCard
                              name="MY name"
                              email="nishchal.350@gmail.com"
                              phone="9878787934"
                              website='www.google.com'
                              image='https://images.pexels.com/photos/10953168/pexels-photo-10953168.jpeg?w=1000&h=600&fit=crop&dpr=1'
                        />


                        <ContactCard
                              name="MY name"
                              email="nishchal.350@gmail.com"
                              phone="9878787934"
                              website='www.google.com'
                              image='https://images.pexels.com/photos/10488973/pexels-photo-10488973.jpeg?w=1000&h=600&fit=crop&dpr=1'
                        />



                  </Content>

            </Layout>
      )
}

export default Home