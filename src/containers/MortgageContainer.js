import MortgageCalculator from '../components/MortgageCalculator.js';
import ApplicationForm from '../components/ApplicationForm.js'
import {useState} from 'react';
import './MortgageContainer.css'

const MortgageContainer = () => {

    const [salary1, setSalary1] = useState(0)
    const [salary2, setSalary2] = useState(0)
    const [deposit, setDeposit] = useState(0)

    const onApplicationSubmit = (salary1, salary2, deposit) => {
        setSalary1(salary1)
        setSalary2(salary2)
        setDeposit(deposit) 
    };

    return (
        <div className= "Mortgage-Container">
        <h1 className = "heading">Hello, I am your mortgage!</h1>
        <ApplicationForm onApplicationSubmit = {onApplicationSubmit} />
        <MortgageCalculator salary1={salary1} salary2={salary2} deposit={deposit}/>
        </div>
    )
};

export default MortgageContainer;