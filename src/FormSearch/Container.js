import { useState} from 'react'

import axios from 'axios'

import {Weather} from './styles'
import Input from '../Input/Input'
import {MdSearch} from 'react-icons/md'
import ViewData from '../ViewData/ViewData'


export default function Container(){
  const [cityValue, setCityValue] = useState('');
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState([]);

  const apiKey = 'a4b12d45c28f85d922bd1f7c703c5f29';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${apiKey}`
  const urlSplash = `https://api.unsplash.com/search/photos/?query=${cityValue}&client_id=kXjG7eVauszZSFaK68r7PLN7bAfD-N6lWf2alaIpWrc`;





  const handleOnChange = (e)=>{
    setCityValue(e.target.value);
  }

  //response data results[0] urls raw

  const submit = ()=>{
    axios.get(url).then(response => setData([response])).catch(err => console.log(err));
    axios.get(urlSplash).then(response => setPhoto(response.data.results[0].urls.raw));
  }


  return(

    <Weather style={{backgroundImage: `url(${photo})`}}>
      <form onKeyDown={(e)=>{
        if(e.keyCode === 13){
          e.preventDefault();
          submit();
        }
      }}>
        <Input placeholder='Digite uma cidade' onChange={handleOnChange}/>
        <span onClick={submit}><MdSearch/></span>
      </form>
      <ViewData data={data}/>
    </Weather>

  )
}
