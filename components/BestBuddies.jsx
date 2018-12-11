const Component = (props) => <section id="best-buddies">
    <div className="flex">
        <div className="g1-flex4 g2-flex6 g3-flex10 g3-offset1">
            <hr className="horz-rule alt3"/>
            <a className="button-w-icon alt2 icon-beercan">Our best Drinking Buddies</a>
            <ul className="logos">
                {props.logos && props.logos.map(logo => <li key={logo.id}>
                    <img src={logo.url} alt={logo.title}/>
                </li>)}
            </ul>
        </div>
    </div>
    <div className="flex">
        <div className="g1-flex4 g2-flex6 g3-flex10 g3-offset1">
            <h1 className="beta center">Some Partners Make it all worth while</h1>
            <h2 className="subfont delta center">Robin Richards &middot; President, Happy Lager</h2>
        </div>
    </div>
</section>

Component.defaultProps = {
    logos: [
        {"id": 1, "url": "https://placehold.it/148x67", "title": "logo title"}
    ]
}

export default Component