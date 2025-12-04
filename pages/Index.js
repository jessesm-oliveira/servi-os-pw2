 "use client"

import { filmes } from "../data/filmes.js";
import CardFilme from "../components/CardFilme/index.js";


console.log(process.env.NEXT_PUBLIC_TMDB_API_KEY);

function home () {

     const estilolistaCards= {

          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))',
          gap:'16px',
          liststyle:'nome'
     } 

const urlvamoschamar=
`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR&page=1`

let resposta = "batata";

fetch(urlvamoschamar).then(res => {
     resposta = res;
     console.log(res.json())

});



return <> <h2>FILMES</h2>

   <ul style={estilolistaCards}>
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