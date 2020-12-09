import {useState} from 'react';
import MortgageCalculator from './MortgageCalculator.js'
import'./ApplicationForm.css';

const ApplicationForm = ({onApplicationSubmit}) => {

    const [salary1, setSalary1] = useState();
    const [salary2, setSalary2] = useState();
    const [deposit, setDeposit] = useState();

    const handleSalary1Change = (event) => {
        setSalary1(event.target.value);
    } 

    const handleSalary2Change = (event) => {
        setSalary2(event.target.value);
    } 

    const handleDepositChange = (event) => {
        setDeposit(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const salary1Submit = salary1
        const salary2Submit = salary2
        const depositSubmit = deposit
        if (!salary1Submit && !salary2Submit) {
            return 

        } else if (!salary1Submit && !salary2Submit && !depositSubmit){
            return
        
        }else{
            onApplicationSubmit(
                salary1Submit,
                salary2Submit,
                depositSubmit
            )
        }
        setSalary1(0)
        setSalary2(0)
        setDeposit(0)
    } 

    return (
        <form className="application-form" onSubmit={handleFormSubmit}>
            <input type="number"
                placeholder="Enter salary"
                value={salary1}
                onChange={handleSalary1Change}/>
            <input type="number"
                placeholder="Enter salary"
                value={salary2}
                onChange={handleSalary2Change}/>
            <input type="number"
                placeholder="Enter your deposit"
                value={deposit}
                onChange={handleDepositChange}/>
            <input
                type="submit"
                onClick = {MortgageCalculator}
                value="Calculate"/>
        </form>
    )
};

export default ApplicationForm;