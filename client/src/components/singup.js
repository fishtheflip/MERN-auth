import React, {useState} from 'react';
import axios from 'axios';

const Singup = () => {
    const [data, setData] = useState({
        login:'',
        role: '',
        name: '',
        surname: '',
        sursurname: '',
        password: '',
        password2: '',
        errors: {}
    });

    const newUser = {
        login: data.login,
        role: data.role,
        name: data.name,
        surname: data.surname,
        sursurname: data.sursurname,
        password: data.password,
        password2: data.password2
      };
    
    const changeHandler = (event) =>{
        setData({...data, [event.target.name]: event.target.value });
        console.log(data);
        console.log(newUser);
    }
    const registerHandler = async()=>{
        try {
            await axios.post('/api/users/register', {...newUser}, {
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(response => console.log(response))
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="main-container">
        <div className="form-group row container-sm">
            <form className="form" onSubmit={(e)=> e.preventDefault} >

            <div className="form-group">
                <label htmlFor="login">Логин</label>
                <input type="text" className="form-control" id="login" name="login"  placeholder="+7 7777 777 777" onChange={changeHandler}/>

            </div>
                
            

            <div className="form-check">
                <input className="form-check-input" type="radio" name="role" id="client" value="client"  onChange={changeHandler}/>
                <label className="form-check-label" htmlFor="role">
                    Клиент
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="role" value="manager" id="manager" onChange={changeHandler}/>
                <label className="form-check-label" htmlFor="role">
                    Менеджер
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="name">Имя</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Введите ваше имя" onChange={changeHandler}/>

            </div>

            <div className="form-group">
                <label htmlFor="surname">Фамилия</label>
                <input type="text" className="form-control" id="surname" name="surname" placeholder="Введите вашу фамилию" onChange={changeHandler}/>

            </div>

            <div className="form-group">
                <label htmlFor="sursurname">Отчество</label>
                <input type="text" className="form-control" id="sursurname" name="sursurname" placeholder="Введите ваше отчество" onChange={changeHandler}/>

            </div>

            <div className="form-group">
                <label htmlFor="password">Пароль</label>
                <input type="password" className="form-control" id="password" name="password"  placeholder="Придумайте пароль" onChange={changeHandler}/>

            </div>

            <div className="form-group">
                <label htmlFor="secpassword">Пароль</label>
                <input type="password" className="form-control" id="password2" name="password2" placeholder="Повторите пароль" onChange={changeHandler}/>

            </div>


            <button type="submit" className="btn btn-primary" onClick={registerHandler}>Зарегистрироваться</button>
            </form>
        </div>
        

          </div>
    )
}

export default Singup;