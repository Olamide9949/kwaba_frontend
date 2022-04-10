import styles from '../../styles/Home.module.css';
import * as React from 'react';

const RentAmount = ({accomodationStatus, setAccomodationStatus}) => {

    const handleRentAmount =(e)=> {
        setAccomodationStatus({
            ...accomodationStatus,
            renewReqAmount:e.target.value,
        })
    }

    return (
        <div className={styles.acmdnStatus}>
            <p>How much is your rent request amount?</p>
            <div className={styles.selectBox}>    
                <input type={'text'} onChange={(e)=>handleRentAmount(e)} placeholder='amount' value={accomodationStatus.renewReqAmount}
                className={accomodationStatus.renewRent ? styles.selectBoxActive: styles.selectBoxInActive}/>
            </div>
        </div>
    )
}
export default RentAmount;