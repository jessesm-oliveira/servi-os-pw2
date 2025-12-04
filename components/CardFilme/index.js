export default function CardFilme({filme}) {
    
    const estiloCardFilme={
        width:'100%',
        height:'100%',
        borderRadius: '8px',
        overFlow: 'hidden',
        Position: 'relative',

    }

     
      const estiloimagem={
       width:"200px",
       height: "100%",  
       ObjectFit: 'cover',
       opacity: 1,

  };

  const estiloConteninerInfoFilme={

    color: "#ffffff",
    Position: "absolute",
    bottom: 0,
    background:'liner-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.9))',
    height: '200px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifycontent: 'end',
    padding:'10px'
  }
     
     return(

          <li style={estiloCardFilme}>

                        <img style={estiloimagem} src={filme.poster}></img> 

                        <div style={estiloConteninerInfoFilme}>
                         <p> NOME DO FILME: </p>
                         <p> {filme.titulo} </p>
                         <p>ano: {filme.ano}</p>
                         <p>gênero: {filme.genero}</p>
                         <p> nota: {filme.nota}</p>

                         </div>


                     </li>

          

     );

}