export default () => <div id="bar">
    <div className="flex">
        <div className="g1-flex4 g2-flex6 g3-flex12">
            <div id="social">
                <a href="https://dribbble.com/" data-icon="dribbble" title="Happy Lager on Dribbble"></a>
                <a href="https://twitter.com/" data-icon="twitter" title="Happy Lager on Twitter"></a>
                <a href="https://www.facebook.com/" data-icon="facebook" title="Happy Lager on Facebook"></a>
            </div>
            <div id="search">
                <form action="/search/results" className="search-form">
                    <input type="search" name="q" placeholder="Search"/>
                </form>
            </div>
        </div>
    </div>
</div>