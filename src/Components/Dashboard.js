import '../styles/style.css';
import Card from './Card';
import Form from '../Components/Form';

function Dashboard() {
    return (
        <>
            <section className='mg-t-12'>
                <Card title="Card 1" content="Lorem Ipsum" />
                <Card title="Card 2" content="Lorem Ipsum" />
                <Card title="Card 3" content="Lorem Ipsum" />
            </section>
            <Form />
        </>
    )
}

export default Dashboard;