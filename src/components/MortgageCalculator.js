
const MortgageCalculator = ({salary1, salary2, deposit}) => {

    
    const result = (salary1 *3) + (salary2 *3) + +deposit;

    return (
        <p>Your Mortgage Value is £{result}</p>
    )
}

export default MortgageCalculator;