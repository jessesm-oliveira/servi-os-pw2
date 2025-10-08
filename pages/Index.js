
import { filmes } from "../data/filmes.js";



function home () {
  console.log(filmes)

  const primeirofilme = filmes[0]

  const estiloimagem={
       width:"300px"

  };

return <> <h2> FILMES </h2>

   <ul>

        <li>

              <p> NOME DO FILMEs: </p>
              <p> {primeirofilme.titulo} </p>
              <p>ano: {primeirofilme.ano}</p>
              <p>gênero: {primeirofilme.genero}</p>
              <p> nota: {primeirofilme.nota}</p>
              
              <img style={estiloimagem} src={primeirofilme.poster}></img>


        </li>


   </ul>
</>

}
export default home; 