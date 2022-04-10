import styles from '../../styles/Home.module.css';
import * as React from 'react';

const ConfirmRentAmount = ({amount, rentAmount, setRentAmount}) => {

        const formatValue = (value) => Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
        maximumSignificantDigits: 3,
      }).format(value);

      const handleFinalAmount =(e)=>{
          setRentAmount(e.target.value)
      }

    return (
        <div className={styles.acmdnStatus} style={{paddingLeft:'4rem'}}>
            <p>Rent request amount?</p>
            <div className={styles.inputBox}>
                <span>Amount</span>
                <input type={'text'} placeholder='amount' disabled onChange={handleFinalAmount} value={rentAmount?formatValue(rentAmount):formatValue(amount)}/>
            </div>
        </div>
    )
}
export default ConfirmRentAmount;