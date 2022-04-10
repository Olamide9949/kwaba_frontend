import styles from '../../styles/Home.module.css';

const RentStatus = ({accomodationStatus, setAccomodationStatus, setProgressstatus}) => {
    const handleRenew =()=> {
        setAccomodationStatus({
                ...accomodationStatus,
                renewRent:'Looking to renew rent',
                newPlace:'',
                searching:''
            })
            setProgressstatus(true);
    }

    const handleNewPlace =()=> {
        setAccomodationStatus({
                ...accomodationStatus,
                newPlace:'Want to pay for a new place',
                renewRent:'',
                searching:''
            })
            setProgressstatus(true);
        }

    const handleSearching =()=> {
        setAccomodationStatus({
                ...accomodationStatus,
                searching:'I\'m still searching',
                renewRent:'',
                newPlace:''
            })
            setProgressstatus(true);
    }

    return (
        <div className={styles.acmdnStatus}>
            <p>What's your accomodation status?</p>
            <div className={styles.selectBox}>    
                <div onClick={(e)=>handleRenew(e)} 
                className={accomodationStatus.renewRent ? styles.selectBoxActive: styles.selectBoxInActive}>
                    <span>Looking to renew rent</span>
                </div>
                <div onClick={(e)=>handleNewPlace(e)} 
                className={accomodationStatus.newPlace ? styles.selectBoxActive: styles.selectBoxInActive}>
                    <span>Want to pay for a new place</span>
                </div>
                <div onClick={(e)=>handleSearching(e)} 
                className={accomodationStatus.searching ? styles.selectBoxActive: styles.selectBoxInActive}>
                    <span>I'm still searching</span>
                </div>
            </div>
        </div>
    )
}
export default RentStatus;