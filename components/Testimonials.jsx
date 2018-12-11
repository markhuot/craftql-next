const Component = (props) => <section id="testimonials">
    <div className="flex">
        {props.testimonials && props.testimonials.map(testimonial => <div key={testimonial.id} className="g1-flex4 g2-flex2 g3-flex4 bubble">
            <blockquote>{testimonial.quote}</blockquote>
            {testimonial.photo && <img className="" src={testimonial.photo[0].url} alt={testimonial.photo[0].title}/>}
            <p><cite className="gamma reverse">{testimonial.cite}</cite></p>
        </div>)}
    </div>
</section>

Component.defaultProps = {
    testimonials: [
        {
            "id": 1,
            "quote": "foo bar",
            "cite": "baz",
            "photo": [{"url": "https://placehold.it/82x82", "title":"foo"}]
        }
    ]
}

export default Component