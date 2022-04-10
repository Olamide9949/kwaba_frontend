// import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import styles from '../../styles/Home.module.css';

const MonthlyPlan = ({accomodationStatus, setAccomodationStatus, setProgressCompleted, progressCompleted}) => {
    
    const router = useRouter();

    const handleMonthlyPlan =(e)=> {
        setAccomodationStatus({
                ...accomodationStatus,
                monthlyPlan:e.target.value,
            })
            setProgressCompleted(true);
            
        }
        
        const gotoBreakdown = () => {
            router.push({pathname:'/confirm_rent', query:{
                rentStatus:accomodationStatus.renewRent || accomodationStatus.newPlace || accomodationStatus.searching,
                rentAmount:accomodationStatus.renewReqAmount,
                salary:accomodationStatus.earnAmount,
                tenure:accomodationStatus.monthlyPlan,
            }})
        }

    return (
        <div className={styles.acmdnStatus}>
            <p>Choose a monthly payment plan</p>
            <div className={styles.selectBox}>    
                <select onChange={(e)=>handleMonthlyPlan(e)}
                className={progressCompleted ? styles.selectBoxActive: styles.selectBoxInActive}>
                    <option value={''}>choose...</option>
                    <option value={'1'}>1 Month</option>
                    <option value={'2'}>2 Months</option>
                    <option value={'3'}>3 Months</option>
                    <option value={'4'}>4 Months</option>
                    <option value={'5'}>5 Months</option>
                    <option value={'6'}>6 Months</option>
                    <option value={'7'}>7 Months</option>
                    <option value={'8'}>8 Months</option>
                    <option value={'9'}>9 Months</option>
                    <option value={'10'}>10 Months</option>
                    <option value={'11'}>11 Months</option>
                    <option value={'12'}>12 Months</option>
                </select>
            </div>

            {!progressCompleted ? 
            <button className={styles.buttonInActive}><span>Next</span></button>:
            // <Link href={{pathname:'/confirm_rent', query:{
            //     rentStatus:accomodationStatus.renewRent || accomodationStatus.newPlace || accomodationStatus.searching,
            //     rentAmount:accomodationStatus.renewReqAmount,
            //     salary:accomodationStatus.earnAmount,
            //     tenor:accomodationStatus.monthlyPlan
            // }}}>
            // <a>
                <button className={styles.buttonActive} onClick={gotoBreakdown}>
                    <span>Next</span>
                </button>
            // </a>
            // </Link>
            }
        </div>
    )
}
export default MonthlyPlan;