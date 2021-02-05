

const GifGridItem = ( { title, url } ) => {

    return (
        <div className="card animate__animated animate__fadeIn"> {/* Recordar que en REACT es className, no un class */}
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
      );
}
 
export default GifGridItem;