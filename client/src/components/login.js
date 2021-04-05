import React, {useState} from 'react';
import axios from 'axios';


const Login = () => {
    const [data, setData] = useState({
        login:'',
        password: '',
        errors: {}
    });
    const userData = {
        login: data.login,
        password: data.password
      };

    const changeHandler = (event) =>{
        setData({...data, [event.target.name]: event.target.value });
        console.log(data);
        console.log(userData);
        
    }
    const registerHandler = async()=>{
        try {
            await axios.post('/api/user/login', {...userData}, {
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(response => response)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="main-container">
            <div className="form-group row container-sm">
                <h1>{text}</h1>
                <form className="form" onSubmit={(e)=> e.preventDefault}>
                <div className="form-group">
                    <label htmlFor="exampleInputLogin"> Логин</label>
                    <input type="text"name="login" className="form-control" id="exampleInputLogin" aria-describedby="emailHelp" placeholder="Введите ваш логин" onChange={changeHandler}/>

                </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputPassword"> Пароль</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword" placeholder="Введите ваш пароль" onChange={changeHandler}/>
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={registerHandler}>Войти</button>
                </form>
            </div>
        </div>
    )
};

export default Login;