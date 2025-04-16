import markerIcon from "/src/assets/marker.png"

export default function Entry() {
    return (
        <article className='journal-entry'>
            <div className='main-image-container'>
                <img className='main-image' src='https://scrimba.com/links/travel-journal-japan-image-url' alt='mount fuji' />
            </div>
            <div className='journal-info-container'>
                <img className='marker-icon' src={markerIcon} alt='marker icon' />
                <span className='country'>CANADA</span>

                
                <a href='https://maps.app.goo.gl/3txWZhiDWntz9r6q9'>View on Google Maps</a>
                <h2 className="entry-title">Mount Fuji</h2>
                <p className="entry-dates">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className='entry-description'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>

        </article>
    )
}