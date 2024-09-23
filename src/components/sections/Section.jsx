
export const Section = ({ component, id }) => {
    return (
        <section id={id} className="section-fullscreen">
            {component}
        </section>
    )
}
