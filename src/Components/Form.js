import { useState } from "react";

function Form() {
    const [name, setName] = useState("");
    const [displayMessage, setdisplayMessage] = useState({
        message: '',
        error: false
    });

    const submit = (e) => {
        e.preventDefault();
        if (name.length === 0) {
            setdisplayMessage({ error: true, message: 'Please enter a name' });
        } else {
            setdisplayMessage({ error: false, message: `Hi ${name}` });
        }

    }

    const updateName = (name) => {
        setName(name);
        setdisplayMessage({ error: false, message: '' });
    }
    return (
        <form className='mg-t-12'>
            <label className='mg-12'> Name:</label><br />
            <input className="mg-12 p-12" placeholder="Enter your name..." type="text" id="name" name="name" onChange={(e) => updateName(e.target.value)} />
            <input className="p-12" type="submit" value="Submit" onClick={(e) => submit(e)} />
            <p className={"mg-12 " + (displayMessage.error ? "error" : "success")}>{displayMessage.message}</p>
        </form>
    )

}

export default Form;