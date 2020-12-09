import './MortgageCalculator.css'
const MortgageCalculator = ({salary1, salary2, deposit}) => {

    
    const result = (salary1 *3) + (salary2 *3) + +deposit;

    return (
        <h2 className = "Calculator">Your Mortgage Value is £{result}</h2>
    )
}

export default MortgageCalculator;