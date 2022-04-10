import styles from '../../styles/Home.module.css';

const EarnAmount = ({accomodationStatus, setAccomodationStatus}) => {

    // const formatValue = (value) => Intl.NumberFormat('en-US', {
    //     style: 'currency',
    //     currency: 'NGN',
    //     maximumSignificantDigits: 3,
    //   }).format(value);

    const handleEarnAmount =(e)=> {
        setAccomodationStatus({
                ...accomodationStatus,
                earnAmount:e.target.value,
            })
    }

    return (
        <div className={styles.acmdnStatus}>
            <p>How much do you earn monthly?</p>
            <div className={styles.selectBox}>    
                <input type={'text'} onChange={(e)=>handleEarnAmount(e)} placeholder='amount' value={accomodationStatus.earnAmount}
                className={accomodationStatus.earnAmount ? styles.selectBoxActive: styles.selectBoxInActive}/>
            </div>
        </div>
    )
}
export default EarnAmount;