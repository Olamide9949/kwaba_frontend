import axios from "axios";
import * as React from 'react';

export default function jobsListing(){

    const [jobs, setJobs] = React.useState([]);
  const [err, setErr] = React.useState('');

  const data  = () =>{
    axios.get('https://remotive.com/api/remote-jobs')
    .then(res=>setJobs(res.data.jobs))
    .catch(err=>setErr(err.message))
  }
  React.useEffect(()=>{
    let mounted = true;
    if(mounted){
      data();
    }
    return mounted = false;
  },[]);

  return {
      jobs,
      err,
  }
}