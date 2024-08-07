console.log('JS OK')
/*FizzBuzz
L'obiettivo è quello di far comparire a schermo i numeri da 1 a 100.
I numeri divisibili per 3 devono apparire come ''Fizz'', i numeri divisibili per 5 devono apparire come ''Buzz'' e quelli divisibili per entrambi devono apparire come ''FizzBuzz''

TODOLIST
1.Recupero elementi dal DOM 
2.Far apparire i numeri da 1 a 100 con un ciclo iterativo
3.Creare un sistema che sostituisce i numeri divisibili per 3 in Fizz, per 5 in Buzz e per entrambi in FizzBuzz


*/ 

//Recupero elementi dal DOM
const numberDisplay = document.getElementById('number')


//Apparizione nel DOM dei numeri tramite creazione ciclo iterativo
 
for (let i=1; i < 101; i++){
   //apparizione fizz e buzz
    if (i % 15 == 0) {
        const div = document.createElement('div') //Creazione del div e aggiunta dello stile
        div.append('FizzBuzz')
        numberDisplay.appendChild(div)

        div.classList.add("fizzbuzz");
    }  
  
    else if (i % 3 == 0) {
        const div = document.createElement('div') //Creazione del div e aggiunta dello stile
        div.append('Fizz')
        numberDisplay.appendChild(div)
        
        div.classList.add("fizz");

    }
  
    else if (i % 5 == 0) {
        const div = document.createElement('div') //Creazione del div e aggiunta dello stile
        div.append('Buzz')
        numberDisplay.appendChild(div)

        div.classList.add("buzz");
    }
  
        else  numberDisplay.innerHTML += (`${i}<br/>`);  

}




   

       
    



