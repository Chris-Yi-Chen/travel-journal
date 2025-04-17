import globeIcon from '/src/assets/globe.png'

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <img className="globeIcon" src={globeIcon} alt='globe icon'></img>
                    <span>my travel journal.</span>
                </nav>
            </header>
        </>
    ) 
};