import Head from "next/head";
import { useRouter } from "next/router";
import { Footer, Header, Navbar } from "../../component";
import { ConfirmRentAmount, MonthlyPlan, PaymentOption } from "../../component/ConfirmRent";
import * as React from 'react';


const RentBreakDown = () => {
    const router = useRouter();
    const data = router.query;
    const [tenure, setTenure] = React.useState('');
    const [rentAmount, setRentAmount] = React.useState('');
    return (
        <div>
            <Head>
            <title>My Rent Breakdown</title>
            <meta name="description" content="Provides house rent loans.." />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Header />
            <ConfirmRentAmount rentAmount={rentAmount} setRentAmount={setRentAmount} amount={data.rentAmount}/>
            <MonthlyPlan tenure={tenure} setTenure={setTenure} month={data.tenure}/>
            <PaymentOption rentStatus={data.rentStatus} salary={data.salary} rentAmount={rentAmount} tenure={tenure} month={data.tenure} amount={data.rentAmount}/>
            <Footer />
        </div>
    )
}
export default RentBreakDown;