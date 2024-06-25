import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);
//   const [curr, setCurr] = useState(currency);

    const changeCurrency = (val)=>{
           
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
            // setCurr(val)
    }
    

  return (
        <div className='alert alert-success'> Currency {
      <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        {/* <option value="£">£ Pound</option> */}
        <option value="£">£ Pound</option>
        <option value="₹">₹ Ruppee</option>
        <option value="€">€ Euro</option>
        <option value="$">$ Dollar</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;