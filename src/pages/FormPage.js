import React, {useState} from 'react';
import axios from "axios";
import {logDOM} from "@testing-library/react";

function FormPage(props) {
    const [post, setPost] = useState({})

    async function submitForm(e) {
        e.preventDefault()

        await axios.post("https://dummyjson.com/posts/add", {
            userId: 69,
            title: e.target.title.value,
            body: e.target.body.value
        })
            .then(resp => {
                console.log(resp)
                setPost(resp.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="form">
            <form className="form" onSubmit={submitForm}>
                <input type="text" name="title" placeholder="title" />
                <textarea name="body" id="body" rows="10" placeholder="body" ></textarea>
                <button>submit</button>
            </form>
        </div>
    );
}

export default FormPage;