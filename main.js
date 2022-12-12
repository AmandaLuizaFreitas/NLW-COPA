
function createGame(player1,hour,player2){
 return `
  <li>
    <img src="assets/icon=${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong> <img src="assets/icon=${player2}.svg" alt="Bandeira da  ${player2}">
  </li>
 `
}


let delay = - 0.3;
function createCard (date,day,games){
  delay = delay + 0.3
 return `
  <div class="card" style="animation-delay:${delay}";>
   <h2>${date} <span>${day}</span></h2>
   <ul>
    ${games}
   
    

   </ul>
   </div>
 `

}

 document.querySelector('#cards').innerHTML = 




  createCard('20/11','Domingo',
  createGame("qatar","13:00","ecuador")
 
 
 )

+

createCard('24/11','quinta',
createGame("switzerland","07:00","cameroon")+
createGame("uruguay","10:00","south korea")+
createGame("portugal","13:00","ghana")+
createGame("brazil","16:00","serbia"))

+
createCard('25/11','sexta',
createGame("wales","07:00","iran")+
createGame("qatar","10:00","senegal")+
createGame("netherlands","13:00","ecuador")+
createGame("england","16:00","usa"))
+
createCard('26/11','sábado',
createGame("tunisia","07:00","australia")+
createGame("poland","10:00","saudi arabia")+
createGame("france","13:00","denmark")+
createGame("argentina","16:00","mexico"))
+

 createCard('02/11','sexta',createGame("brazil","16:00","cameroon"))

+
createCard('28/11','segunda',createGame("brazil","13:00","switzerland"))+
 createCard('02/11','sexta',createGame("brazil","16:00","cameroon"))

