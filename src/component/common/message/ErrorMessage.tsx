import { Layout, Typography } from "antd";
import { NotFoundIcon } from "../../../assets";

const { Content } = Layout;

interface IErrorMessage{
      error: string
}


function ErrorMessage({error}: IErrorMessage) {

      return (
            <Content  className="flex  flex-col justify-center text-center gap-2 w-full self-center">
                  <img className="w-[10rem] self-center"  src={NotFoundIcon} alt="error-icon" />
                  <Typography className='text-2xl text-[#be123c]'><strong>Error: </strong> {error}</Typography>
            </Content>
      )
}

export default ErrorMessage