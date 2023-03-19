let timerId
function startTimer(event){
    if(event.key=="Enter"){
        clearInterval(timerId)
        let inputVal=document.getElementById("input-field")
        let count=Math.floor(Number(inputVal.value));
        let Timer=document.getElementById("counter")
        Timer.innerHTML=count
        if(count>0){
            let tempCount=count
        timerId=setInterval(()=>{
            tempCount--
            Timer.innerHTML=tempCount
            if(tempCount==0){
                clearInterval(timerId)
            }
        },1000)
    }
        else{
            Timer.innerHTML=0
        }
   
        inputVal.value=""
    }
}