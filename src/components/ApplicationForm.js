import {useState} from 'react';
import MortgageCalculator from './MortgageCalculator.js'

const ApplicationForm = ({onApplicationSubmit}) => {

    const [salary1, setSalary1] = useState();
    const [salary2, setSalary2] = useState();

    const handleSalary1Change = (event) => {
        setSalary1(event.target.value);
    } 

    const handleSalary2Change = (event) => {
        setSalary2(event.target.value);
    } 

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const salary1Submit = salary1
        const salary2Submit = salary2
        if (!salary1Submit || !salary2Submit) {
            return 
        } else {
            onApplicationSubmit({
                salary1: salary1Submit,
                salary2: salary2Submit
            })
        }

        setSalary1()
        setSalary2()
    } 

    return (
        <form classname="application-form" onSubmit={MortgageCalculator}>
            <input type="number"
                placeholder="Enter salary"
                value={salary1}
                onChange={handleSalary1Change}/>
            <input type="number"
                placeholder="Enter salary"
                value={salary2}
                onChange={handleSalary2Change}/>
            <input
                type="submit"
                value="Post"
            />
        </form>
    )
};

export default ApplicationForm;