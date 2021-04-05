const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data){
    let errors = {};
    data.login = !isEmpty(data.login) ? data.login : "";
    data.role = !isEmpty(data.role) ? data.role : "";
    data.name = !isEmpty(data.name) ? data.name : "";
    data.surname = !isEmpty(data.surname) ? data.surname : "";
    data.sursurname = !isEmpty(data.sursurname) ? data.sursurname : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    if(Validator.isEmpty(data.login)){
        errors.login = "Login field is required";
    }
    if(Validator.isEmpty(data.role)){
        errors.role = "Role field is required";
    }
    if(Validator.isEmpty(data.name)){
        errors.name = "Name field is required";
    }
    if(Validator.isEmpty(data.surname)){
        errors.surname = "Surname field is required";
    }
    if(Validator.isEmpty(data.sursurname)){
        errors.sursurname = "Middle name is required";
    }
    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }
    if(Validator.isEmpty(data.password2)){
        errors.password2 = "Password field is required";
    }

    if(!Validator.isLength(data.password, {min:6})){
        errors.password = "Passord must be at least 6 characters";
    }
    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = "Passwords must match";
    }

    return{ errors, isValid: isEmpty(errors)}
}
    

