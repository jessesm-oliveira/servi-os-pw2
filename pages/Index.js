
import { filmes } from "../data/filmes.js";

function CardFilme({filme}) { 
     
      const estiloimagem={
       width:"300px"

  };
     
     return(

          <li >

                         <p> NOME DO FILME: </p>
                         <p> {filme.titulo} </p>
                         <p>ano: {filme.ano}</p>
                         <p>gênero: {filme.genero}</p>
                         <p> nota: {filme.nota}</p>

                         <img style={estiloimagem} src={filme.poster}></img> 


                     </li>

          

     );

}

function home () {

 

return <> <h2> FILMES </h2>

   <ul>
          {
               filmes.map((filme)=>{ 

                    return ( 
                    
                         <CardFilme key={`card-filme-${filme.id}`} filme={filme}/>


                         );

               })
          }
        


   </ul>
</>

}
export default home; 