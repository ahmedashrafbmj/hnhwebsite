import React, { useState } from 'react'

const Login = () => {

    const [inputFields, setInputFields] = useState(
        { username: '', password: '' }
    )

    const handleFormChange = (event) => {
        // const file = URL.createObjectURL(event.target.files[0])
        // console.log()
        const value = event.target.value;
        setInputFields({
            ...inputFields,
            [event.target.name]: value
        });
        console.log(event.target.name,"event.target.name")
        console.log(event.target.value,"event.target.value")
    }

    const submit = (e) => {
        e.preventDefault();  // is used for to stop reload page on submit
        let { username,password} = inputFields
        // console.log(email,password)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        var raw = JSON.stringify({
            "username": username,
            "password": password,
            "action":"login"
        });
        console.log(raw,"raw")

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://hnhwebsite-pcuu.vercel.app/api/login", requestOptions)
            .then(response => response.text())
            .then(result => {
                // console.log(result)
                let user = JSON.parse(result)
                let {success} = user
                if(success){
                    localStorage.setItem('token', result)
                }
            })
            .catch(error => console.log('error', error));
    }


    return (
        <>
            <div className='container-fluid' style={{ height: '100vh' }}>
                <div className="container border-rounded mt-5" style={{ height: '80%', maxHeight: '100vh', minHeight: '85vh' }}>
                    <form className='m-5' >
                        <h3 className='mb-3'>Login In</h3>
                        <div className="mb-3">
                            <label>UserName</label>
                            <input
                                type="text"
                                name="username"
                                className="form-control" placeholder="Enter email"
                                // value={inputFields.username}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={inputFields.password}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary" onClick={submit}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login