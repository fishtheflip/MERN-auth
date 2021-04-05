const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys')
const passport = require('passport');

const validateRegisterInput = require('../../validator/register');
const validateLoginInput = require('../../validator/login');

const User = require('../../models/User');

router.post('/register', (req, res)=>{
    const { errors, isValid} = validateRegisterInput(req.body);
    console.log(req.body); 

    if(!isValid){
        return res.status(400).json(errors);
    }
    User.findOne({login:req.body.login}).then(user=>{
        if(user){
            return res.status(400).json({login: 'Login allready exists'});
        } else {
            const newUser = new User({
                login: req.body.login,
                role: req.body.role,
                name: req.body.name,
                surname: req.body.surname,
                sursurname: req.body.sursurname,
                password: req.body.password
            });
        
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                });
              });

        }
    });
});

router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    console.log(req.body); 
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const login = req.body.login;
    const password = req.body.password;
    User.findOne({ login }).then(user => {
      if (!user) {
        return res.status(404).json({ emailnotfound: "Login not found" });
      }
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {

          const payload = {
            id: user.id,
            name: user.name
          };
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

  module.exports = router;