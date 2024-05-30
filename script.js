const number=document.querySelector('#number'),
    output=document.querySelector('#output'),
      button=document.querySelector('#convert-btn');


 
button.addEventListener('click', handleClick)

function handleClick() {

    
    if(number.value===''){
        output.textContent="Please enter a valid number"
    }

    else if(number.value<=0){
        output.textContent="Please enter a number greater than or equal to 1"
    }

    else if(number.value>=4000){
        output.textContent="Please enter a  number less than or equal to 3999"
    }

    else{
        if(number.value.length===1){
        // console.log('the input is '+number.value+10)
        output.textContent=`the value is  ${tenth_converter(number.value)}`;
        }

        else if(number.value.length===2){
            output.textContent=`the value is  ${hundredth_converter(number.value)}`;
        }

        else if(number.value.length===3){
            output.textContent=`the value is ${thousandth_converter(number.value)}`
        }
        // output.textContent=""

        else if(number.value.length===4){
            output.textContent=`the value is ${ten_thousandth_converter(number.value)}`
        }
    }
}


const all_symbols=['i', 'v', 'x', 'l', 'c', 'd', 'm']
const tenth_symbols=['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x']
const hundredth_symbols=['x', 'xx', 'xxx', 'xl', 'l', 'lx', 'lxx', 'lxxx', 'xc', 'c']
const thousandth_symbols=['c', 'cc', 'ccc', 'cd', 'd', 'dc', 'dcc', 'dccc', 'cm', 'm']

// for(let i=0; i<index; i++){

// }

function tenth_converter(value){
    return(
        Number(value)!==0?tenth_symbols[value-1]:`0 is not defined in roman`
    )
}

function hundredth_converter(value){
 
    return(
        Number(value)%10!==0?hundredth_symbols[value[0]-1]+tenth_converter(Number(value)%10):hundredth_symbols[value[0]-1]
    )
}

function thousandth_converter(value){
    // console.log(Number(value)%100)
    return(
        Number(value)%100!==0?thousandth_symbols[value[0]-1]+hundredth_converter(String(Number(value)%100)):thousandth_symbols[value[0]-1]
    )
}

function ten_thousandth_converter(value){
    // console.log(Number(value)%100)
    return(
        Number(value)%1000!==0?thousandth_symbols[thousandth_symbols.length-1]+thousandth_converter(String(Number(value)%1000)):String(thousandth_symbols[thousandth_symbols.length-1]).repeat(Number(value[0]))
    )
}









