import React, {useEffect} from 'react'
import * as ApiTmbService from '../../servics/apiTMDB'

function Catalog () {
const [popularMovies, setPopularMovies]=(response.results)

const img



  useEffect(() => {
    ApiTmbService.getPolular()
      .then((response) => console.log(response))
  }, [])

  return  <>
  <h1>Catalogo</h1>

  <div>
  <h2>Populares</h2>
  {
      popularMovies.map((popularMovies) =>{
          return <h5>{popularMovies.tittle}</h5>
          <img src={imgUrl + popularMovies}> </img>
      })
  }
  </div>
  </>
}

export default Catalog