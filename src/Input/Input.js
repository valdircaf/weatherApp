import {InputComponent} from './styles'

export default function Input({type, value, onChange, placeholder}){

  return(

    <InputComponent type={type} value={value} onChange={onChange} placeholder={placeholder}/>

  )

}
