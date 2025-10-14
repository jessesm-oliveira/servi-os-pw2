
import { filmes } from "../data/filmes.js";



function home () {

  const estiloimagem={
       width:"300px"

  };

return <> <h2> FILMES </h2>

   <ul>
          {
               filmes.map((filme)=>{ //sempre que usar map, usar key

                    return ( 
                    <li key={`card-filme-${filme.id}`}> 

                         <p> NOME DO FILME: </p>
                         <p> {filme.titulo} </p>
                         <p>ano: {filme.ano}</p>
                         <p>gênero: {filme.genero}</p>
                         <p> nota: {filme.nota}</p>

                         <img style={estiloimagem} src={filme.poster}></img> 


                     </li>


                         );

               })
          }
        


   </ul>
</>

}
export default home; 