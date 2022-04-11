import styles from '../../styles/Home.module.css';
import * as React from 'react';
import * as Icon from '@heroicons/react/solid';
import BASE_URL from '../../Utils';

const ContentHeader = ({progressStatus, progressCompleted}) => {
        const [loanBalance, setLoanBalance] = React.useState('');
    const formatValue = (value) => Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
        maximumSignificantDigits: 3,
      }).format(value);

     React.useEffect(()=>{
        let mounted = true;
        if(mounted){
            axios.get(`${BASE_URL}loan/offer`)
            .then(res=>{
                if(res.data.data.loans.length !==0){
                    setLoanBalance(res.data.data.loans[0].loan_amount)
                }else{
                    setLoanBalance('')
                }
            })
            .catch(err=>console.log(err.message))
        }
        return ()=> mounted = false;
    },[]);
        
    return(
        <div className={styles.contentHeader}>
            <div className={styles.titleBalanceContainer}>
                <h2>Payment Option</h2>
                {loanBalance && <p>Current Loan: <span>{` ${formatValue(loanBalance)}` || ' You have no pending loan'}</span></p>}
            </div>
            <div className={styles.progressBar}>
                <span>{progressStatus ? (progressCompleted ? '3': '2') : '1'} of 3</span>
                <div className={progressStatus ? (progressCompleted ? styles.progressCircleComplete: styles.progressCircle2) : styles.progressCircle}>
                    {progressCompleted && <Icon.BadgeCheckIcon width={25} height={25} color='#23dc9a'/>}
                </div>
            </div>
        </div>
    )
}
export default ContentHeader;
