const Component = (props) => <section id="on-tap">
    <div className="flex">
        <div className="g1-flex4 g2-flex6 g3-flex12">
            <div className="on-tap-buttons-wrap">
                <a className="button-w-icon icon-beer" href="/work">What’s on Tap</a>
                <a href="/work" className="view-more">View More</a>
            </div>
        </div>
    </div>
    <div className="flex">
        {props.entries && props.entries.map(entry => <div key={entry.id} className="g1-flex4 g2-flex2 g3-flex4">
            <a href={entry.url} className="services-entry-wrap">
                {entry.featuredThumb && <img src={entry.featuredThumb[0].url} alt={entry.featuredThumb[0].title}/>}
                <h3 className="center">{entry.title}</h3>
                {entry.shortDescription && <div dangerouslySetInnerHTML={{__html:entry.shortDescription.content}}></div>}
            </a>
        </div>)}
    </div>
</section>

Component.defaultProps = {
    entries: [
        {
            "id": 1,
            "url": "/example",
            "featuredThumb": [{"url": "https://placehold.it/280x204", "title": "foo"}],
            "title": "Example Work",
            "shortDescription": {"content": "<p>short description in here</p>"}
        }
    ]
}

export default Component