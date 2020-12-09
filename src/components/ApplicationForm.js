import {useState} from 'react';

const ApplicationForm = () => {

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

    
};

export default ApplicationForm;