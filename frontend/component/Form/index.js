
import * as React from 'react';
import RentStatus from './rentStatus';
import RentAmount from './rentAmount';
import EarnAmount from './earnAmount';
import MonthlyPlan from './monthlyPlan';


const PreApprovalForm = ({setProgressstatus, setProgressCompleted, progressCompleted}) => {
    const [accomodationStatus, setAccomodationStatus] = React.useState({
        renewRent:'',
        newPlace:'',
        searching:'',
        renewReqAmount:'',
        earnAmount:'',
        monthlyPlan:''
    });


    React.useEffect(()=>{},[accomodationStatus]);

    return (
        <div>
            <RentStatus setProgressstatus={setProgressstatus} accomodationStatus={accomodationStatus} setAccomodationStatus={setAccomodationStatus}/>
            <RentAmount accomodationStatus={accomodationStatus} setAccomodationStatus={setAccomodationStatus}/>
            <EarnAmount accomodationStatus={accomodationStatus} setAccomodationStatus={setAccomodationStatus}/>
            <MonthlyPlan progressCompleted={progressCompleted} setProgressCompleted={setProgressCompleted} accomodationStatus={accomodationStatus} setAccomodationStatus={setAccomodationStatus}/>
        </div>
    )
}
export default PreApprovalForm;