interface IBottomIconProps{
      icon: string,
      name: string,
      clickEvent?: ()=> void
}

function BottomIcon({icon, name, clickEvent}: IBottomIconProps) {

      return (
            <figure className='w-8 h-8 flex flex-col justify-center align-middle shake-icon--hover' onClick={clickEvent}>
                  <img
                        className='object-cover bg-fixed w-full h-full self-center'
                        alt={name}
                        src={icon}
                  />
            </figure>
      )
}

export default BottomIcon