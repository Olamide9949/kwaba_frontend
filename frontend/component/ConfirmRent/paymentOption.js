import styles from '../../styles/Home.module.css';
import * as React from 'react';
import axios from 'axios';
import BASE_URL from '../../Utils';


const PaymentOption = ({ salary, rentStatus, amount, rentAmount, month, tenure}) => {

        const formatValue = (value) => Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
        maximumSignificantDigits: 3,
      }).format(value);

        const monthlyDue = (parseInt(rentAmount?rentAmount:amount) * (2 * 0.01)) / parseInt(rentAmount?rentAmount:amount);
        let payment = ((parseInt(rentAmount?rentAmount:amount) / parseInt(tenure?tenure:month)) + monthlyDue).toFixed(2);

        const handleAcceptance =()=>{
            let data = {
                rentStatus:rentStatus,
                rentAmount:rentAmount?rentAmount:amount,
                salary:salary,
                tenure:tenure?tenure:month
            }
            axios.post(`${BASE_URL}loan`, data)
            .then(res=>{
                if(res.data.success===true && res.data.data !=='You have pending loan.'){
                    window.location.replace('/');
                }
                alert(res.data.data)                
            })
            .catch(err=>alert(err.mesage))
        }

    return (
        <div className={styles.acmdnStatus} style={{paddingLeft:'4rem'}}>
            <p>Payment option</p>
            <div className={styles.paymentOption}>
                <p style={{fontWeight:'normal'}}>Pre-approved amount</p>
                <p>{rentAmount?formatValue(rentAmount):formatValue(amount)}</p>
            </div>
            <div className={styles.paymentOption}>
                <p style={{fontWeight:'normal'}}>Monthly payment plan</p>
                <p>{formatValue(payment)}</p>
            </div>
            <div className={styles.paymentOption}>
                <p style={{fontWeight:'normal'}}>Tenor</p>
                <p>{tenure?tenure:month}</p>
            </div>
            <button onClick={handleAcceptance} className={styles.acceptButton}><span>Accept</span></button>
        </div>
    )
}
export default PaymentOption;
