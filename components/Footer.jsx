let Component = (props) => <footer id="footer">
    <div className="flex">
        <div className="g1-flex4 g2-flex3 g3-flex6">
            <img src="/static/images/hl.svg" width="76" height="76" alt="H.L."/>
            <p className="copyright">{props.copyrightNotice && props.copyrightNotice.replace('{year}', new Date().getFullYear())}</p>
        </div>
        <div className="g1-flex4 g2-flex3 g3-flex6">
            <a className="contact" href={"mailto:"+props.email}>{props.contactUsLabel}</a>
        </div>
    </div>
</footer>

Component.defaultProps = {
    copyrightNotice: '(default copyrightNotice)',
    email: '(default email)',
    contactUsLabel: '(default contactUsLabel)'
}

export default Component