interface ILabelWithIcon{
      icon: string,
      text: string,
}

function LabelWithIcon({icon, text}: ILabelWithIcon) {
      return (
            <span className="flex gap-2">
                  <img className="w-[1.4rem] self-center" src={icon}/> 
                  <h3 className="self-end">{text}</h3>
            </span>
      )
}

export default LabelWithIcon