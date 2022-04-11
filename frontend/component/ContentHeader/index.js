import styles from '../../styles/Home.module.css';
import * as React from 'react';
import * as Icon from '@heroicons/react/solid';

const ContentHeader = ({progressStatus, progressCompleted}) => {
    return(
        <div className={styles.contentHeader}>
            <h2>Payment Option</h2>
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
