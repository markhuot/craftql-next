const Component = (props) => <div id="hero">
    {props.image && <img src={props.image.url} alt={props.image.alt}/>}

    <div className="hero-info">
        <h1>We always see the glass<br/><span className="ir">Half Full</span></h1>
        <p className="center reverse">Work with Happy Lager and you will find an endless<br/>tap of ideas, wit and creativity.</p>
        <p className="center"><a href="mailto:hi@happylager.dev" className="hero-cta">Pull up a bar stool</a></p>
    </div>
</div>

Component.defaultProps = {
    image: {"url":"https://placehold.it/300x300/d06b35", "alt":"foo bar"}
}

export default Component