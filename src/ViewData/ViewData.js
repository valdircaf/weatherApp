import {Container} from './styles.js';

import {IoWaterOutline} from 'react-icons/io5'
import {TbTemperature} from 'react-icons/tb'


export default function ViewData({data}){

return(



<Container>
<div>
    {data.map(result => (
    <>
      <h1>{result.data.name}</h1>
      <h2><TbTemperature/>{parseInt(result.data.main.temp)}&deg;</h2>
      <h3>{result.data.weather[0].description}</h3>
      <h4><span><IoWaterOutline/></span>{result.data.main.humidity}%</h4>
    </>
    ))}

</div>


</Container>
)

}
