// Dashboard Page

import React from 'react';
import Income from '../components/dashboard/Income';
import Expense from '../components/dashboard/Expense';
import Savings from '../components/dashboard/Savings';
import classes from './Dashboard.module.css';
import DonutChart from '../components/dashboard/DonutChart';
import authService from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { Navigate } from 'react-router-dom';


// import BudgetingForm from '../components/dashboard/BudgetingForm';





function Dashboard() {

      
        // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
        const [me] = useQuery(QUERY_ME);
      
        // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
        const {data} = me;      
        // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
        if (authService.loggedIn()) {
          return <Navigate to="/dashboard" />;
        } 
        if(!authService.loggedIn()) {
            return (
            // <h1>help</h1>
            <Navigate to="/" />
            )
        }
    return (
        <div>
            <h1 id={classes.head}> Burning Money Dashboard</h1>
            <Income profileId={data.me._id} />
            {/* <Expense expenses={""} /> */}
            {/* <Savings savings={""} /> */}
            {/* <DonutChart /> */}
        </div>
    )

}

export default Dashboard;

