import * as React from 'react';
import styles from '../../styles/Home.module.css';

const MonthlyPlan = ({month, tenure, setTenure}) => {

    const handleMonth =(e)=>{
        setTenure(e.target.value);
    }

    return (
        <div className={styles.acmdnStatus} style={{paddingLeft:'4rem'}}>
            <p>Monthly payment plan</p>
            <div className={styles.selectBox}>    
                <select className={tenure ? styles.selectBoxActive: styles.selectBoxInActive} onChange={handleMonth}>
                    <option value={tenure?tenure:month}>{`${month} Month`}</option>
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
        </div>
    )
}
export default MonthlyPlan;