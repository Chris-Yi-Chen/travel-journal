import markerIcon from "/src/assets/marker.png"

export default function Entry(props) {
    return (
        <article className='journal-entry'>
            <div className='main-image-container'>
                <img className='main-image' src={props.img.src} alt={props.img.alt} />
            </div>
            <div className='journal-info-container'>
                <img className='marker-icon' src={markerIcon} alt='marker icon' />
                <span className='country'>{props.country}</span>

                
                <a href={props.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="entry-dates">{props.dates}</p>
                <p className='entry-description'>{props.text}</p>
            </div>

        </article>
    )
}