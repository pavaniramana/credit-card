import React, {useState} from 'react'

const CreditCard = () => {
    const[number,setNumber] = useState("")

    const [record,setRecord] = useState([])

    const formetAndSetNumber = (e) => {
        const inputVal = e.target.value.replace(/ /g, "");
        let inputNumbersOnly = inputVal.replace(/\D/g, "");

        if(inputNumbersOnly.length >=16) {
            inputNumbersOnly = inputNumbersOnly.substr(0,16)
        }
        const splits = inputNumbersOnly.match(/.{1,4}/g);

        let spacedNumber = "" ;
        if(splits){
            spacedNumber = splits.join(" ");
        }
        setNumber(spacedNumber)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setRecord([...record,number])
    }

    const handleKeyPress = e => {
        if(e.keyCode === 13) {
            handleSubmit();
        }
    }

    const emptyInput = (index) => () =>
      setRecord( (items) => items.filter((_,i)=>i!==index))

  return (
    <div>
        
        <input type='tel' name='number' maxLength={19} 
        value = {number} 
        onChange = {formetAndSetNumber}
        onKeyPress = {handleKeyPress} 
        />
        <button onClick={handleSubmit}>Click here</button>
        {
            record.map((val,index)=>{
                
                return(
                
                    <div>
                        
                        <h5 key={index}>{val}<button onClick={emptyInput(index)}>delete</button></h5>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CreditCard