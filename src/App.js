import React, {Component} from 'react';

export default class App extends Component {
    
   state = {
       dados : [
          {
            nome: "Bruno",
            idade: 23,
            cor: "amarelo"
          },
          {
            nome: "Vanessa",
            idade: 19,
            cor: "vermelho"
          },
          {       
            nome: "Tiago", 
            idade: 25,
            cor: "violeta"
          },
          {  
            nome: "Kaio",
            idade: 20,
            cor: "verde"
          },
          {
            nome: "Carla",
            idade: 29,
            cor: "cinza"
          },
          { 
            nome: "Bianca",
            idade: 21,
            cor: "azul"
          }
       ]
   }
    render(){
       return(
         <div>
             {this.state.dados.map((item) => (
               <div>
                  <h2>Nome: {item.nome}</h2>
                  <h2>Idade: {item.idade}</h2>
                  <h2>Cor Favorita: {item.cor}</h2>    
               </div>
             ))}
         </div> 
       )
    } 
} 

