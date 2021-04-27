import React, {useState} from 'react';
import NumberFormat from 'react-number-format';

const App = () => {
  const [phone, setPhone] = useState('');
  // const price = '8888.88'

  return (
    <div>
      <h2>Phone Number Formatter</h2>
      <NumberFormat format="+1 (###) ###-####" mask="_" onValueChange={value => setPhone(value.value)}/>

      <br/><br/>
      Phone: {phone}

{/* 
      <br/><br/>
      <NumberFormat value={parseFloat(price)} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/> */}
    </div>
  )
}

export default App
