import React from "react";

export default function Calculator(){

    // Set the state
    const [symbol, setSymbol] = React.useState('');

    function handleClick(e){
        // Update the state with the button value
        setSymbol(symbol + e.target.value);

        // Clear the input
        if(e.target.value === "C"){
            setSymbol('');
        }

        // Show the result
        if(e.target.value === "="){
            try{
                let result = eval(symbol);
                if(result.toString() === "Infinity"){
                    setSymbol("Can't divide by zero");
                }else{
                    setSymbol(result);
                }
            }catch{
                setSymbol("Error");
            }
            
        }

    }

    function handleChange(ev){
        setSymbol(ev.target.value);
    }
    
    return(
        <div className="calc-container">
            <input 
                type="text" 
                onChange={handleChange}
                value={symbol}
                name="calc"
                disabled
            />
            <div className="button-container">
                <button value="1" onClick={handleClick} className="buttons nums">1</button>
                <button value="2" onClick={handleClick} className="buttons nums">2</button>
                <button value="3" onClick={handleClick} className="buttons nums">3</button>
                <button value="/" onClick={handleClick} className="buttons">/</button>
                <button value="**" onClick={handleClick} className="buttons">^</button>
                <button value="4" onClick={handleClick} className="buttons nums">4</button>
                <button value="5" onClick={handleClick} className="buttons nums">5</button>
                <button value="6" onClick={handleClick} className="buttons nums">6</button>
                <button value="*" onClick={handleClick} className="buttons">x</button>
                <button value="**(1/2)" onClick={handleClick} className="buttons">√</button>
                <button value="7" onClick={handleClick} className="buttons nums">7</button>
                <button value="8" onClick={handleClick} className="buttons nums">8</button>
                <button value="9" onClick={handleClick} className="buttons nums">9</button>
                <button value="-" onClick={handleClick} className="buttons">-</button>
                <button value="/100" onClick={handleClick} className="buttons">%</button>
                <button value="C" onClick={handleClick} className="buttons">C</button>
                <button value="0" onClick={handleClick} className="buttons nums">0</button>
                <button value="." onClick={handleClick} className="buttons">.</button>
                <button value="+" onClick={handleClick} className="buttons">+</button>
                <button value="=" onClick={handleClick} className="buttons">=</button>
                <button value="(" onClick={handleClick} className="buttons">(</button>
                <button value=")" onClick={handleClick} className="buttons">)</button>
            </div>
        </div>
    )
}