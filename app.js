var quote;
function showName(){

 var req=document.getElementById('name-id').value;
 check(req);
 
}
function quotes(){
    var numBer=Math.floor((Math.random())*5+1)
    console.log(numBer)

    if(numBer===1){
        quote=' Act as if what you do makes a difference. It does.'
    }
    else if(numBer===2){
        quote='Never bend your head. Always hold it high. Look the world straight in the eye.'
    }
    else if(numBer===3){
quote='What you get by achieving your goals is not as important as what you become by achieving your goals.'
    }
    else if(numBer===4){
quote='When you have a dream, youve got to grab it and never let go.'
    }
    else {
quote=`No matter what you're going through, there's a light at the end of the tunnel.`
    }
    
}
function check(v){
    if (v==="")
    {
        alert('Please enter the name in the field')
    }
    else{
      quotes();  
      document.getElementById('print').textContent='"Dear '+v+'.'+quote+'"'

    }
}
