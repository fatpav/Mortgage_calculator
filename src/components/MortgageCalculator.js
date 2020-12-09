const MortgageCalculator = (props) => {

    const result = (props.salary1 + props.salary2)*3;
        

    return (
        <p>{result}</p>
    )
}

export default MortgageCalculator;