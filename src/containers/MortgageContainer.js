import MortgageCalculator from '../components/MortgageCalculator.js';
import ApplicationForm from '../components/ApplicationForm.js'

const MortgageContainer = () => {
    return (
        <>
        <h1>Hello, I am your mortgage!</h1>
        <ApplicationForm/>
        <MortgageCalculator/>
        </>
    )
};

export default MortgageContainer;