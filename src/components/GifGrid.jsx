import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "./GifCard";


export const GifGrid = ({category}) =>{
  
    //de aquí recibiremos las imagenes y el estado de carga en el que se encuentran
    const {images, isLoading} = useFetchGifs( category );

    return (
        <div key={category}>

            <h1> {category} </h1>

            {
                isLoading && (<h4>Cargando...</h4>)
            }

            <div className="card-grid">

                {//recordemos retornar pq es codigo jsx. Sabemos que el map argumento elementos
                    images.map( (image) => (
                        <GifCard 
                            key   = {image.id}
                            {...image} //extender las propiedades a otro componente
                        />
                    ))
                }
            </div>
        </div>
    )

}


