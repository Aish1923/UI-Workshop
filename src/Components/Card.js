import '../styles/style.css';

function Card({ title, content }) {
    return (
        <article className='p-4 mg-8'>
            <h3>{title}</h3>
            <p>{content}</p>
        </article>
    )
}

export default Card;