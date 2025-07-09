function Button(probs){
    function handleClick(){
        switch (probs.name) {
            case "Add":;
                probs.stateChanger(parseInt(probs.result)+parseInt(probs.inputNumber));
                break;

            case "Subtract":;
                probs.stateChanger(parseInt(probs.result)-parseInt(probs.inputNumber));
                break;

            case "Multiply":;
                probs.stateChanger(parseInt(probs.result)*parseInt(probs.inputNumber));
                break;

            case "Divide":;
                probs.stateChanger(parseInt(probs.result)/parseInt(probs.inputNumber));
                break;
        
            default:
                break;
        }
    }
    return (
        <button onClick={handleClick}>{probs.name}</button>
    )
}
export default Button;