import { toast  } from 'react-toastify';

type InputValue = {
      [key: string]: string | number,
      id: number,
      name: string
      email: string,
      phone: string,
      website: string,
}

const EMAIL_REGEX: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
const WEB_LINK_REGEX: RegExp = /^[a-z]{1,10}(\.[a-z]{2,5})$/;
const ALPHABET_REGEX: RegExp = /[a-wy-zA-WY-Z]+$/;

const validateInputs = (inputValue: InputValue): boolean =>{
      const { id, name, email, phone, website } = inputValue;
      
      if(!name.trim().length || name.trim().length >=25){

            return errorMessage({id, name:'name'});
      }

      if(!email.trim().length || !email.trim().match(EMAIL_REGEX)){
            
            return errorMessage({id, name:'email'});
      }

      if(!phone.trim().length || phone.trim().match(ALPHABET_REGEX) || phone.trim().length <10){

            return errorMessage({id, name:'phone'});
      }

      if(!website.trim().length || !website.trim().match(WEB_LINK_REGEX)){
            
            return errorMessage({id, name:'website'});
      }

      return true
}

const errorMessage = ({id, name}:{id: number, name: string}): boolean=>{
      const element = document.querySelector(`form[id='${id}'] input[name='${name}']`) as HTMLInputElement;

      element.focus();
      element.style.backgroundColor = '#fabbbb';

      toast.error(`invalid ${name}!!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
      });

      setTimeout(()=>{ 
            element.style.backgroundColor='white' 
      }, 1000)

      return false
}


export default validateInputs;