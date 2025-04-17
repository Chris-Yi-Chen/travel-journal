import markerIcon from "/src/assets/marker.png"

export default function Entry(props) {
    return (
        <article className='journal-entry'>
            <div className='main-image-container'>
                <img className='main-image' src={props.data.img.src} alt={props.data.img.alt} />
            </div>
            <div className='journal-info-container'>
                <img className='marker-icon' src={markerIcon} alt='marker icon' />
                <span className='country'>{props.data.country}</span>

                
                <a href={props.data.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.data.title}</h2>
                <p className="entry-dates">{props.data.dates}</p>
                <p className='entry-description'>{props.data.text}</p>
            </div>

        </article>
    )
}