// Selectors section 
let calcBtnEl = document.querySelectorAll('.calc-btn');
const screenContent = document.querySelector('.screen .content');
const clearEl = document.querySelector('.clear');
const resultEl = document.querySelector('.result');
 
calcBtnEl.forEach(btn =>{
    btn.addEventListener('click', e=>{
        try{
            let value = e.target.textContent;
            const current = screenContent.value;

            if(['+','-','*','/'].includes(value) && current === '') return;
            if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(current.slice(-1))) return;
            
            if(current === 'ERROR'){    
                screenContent.value = value;
            }else{
                screenContent.value += value;
            }    
        }
        catch(err){
            screenContent.value = err;
        }
    })
});

// Function section 
// claculate  
const calculate = () =>{
    try{
        const expression = screenContent.value;
        if(/^[0-9+\-*/.]+$/.test(expression)){
            const result = Function(`return ${expression}`)();
            screenContent.value = result;
        }else{
            screenContent.value = 'ERROR';
        }
    }
    catch(err){
       screenContent.value = 'ERROR';
    }
};

// Run section 
// Clear screen 
clearEl.addEventListener('click', ()=> screenContent.value = '' );
resultEl.addEventListener('click', calculate);
