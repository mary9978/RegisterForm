import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {AuthContainer} from './Styled';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
function SignUp() {
    const base_url ="http://localhost:3000/login"
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [repassword,setRepassword]=useState('');
    const [nameErr,setnameErr]=useState('');
    const [emailErr,setemailErr]=useState('');
    const [passwordErr,setpasswordErr]=useState('');
    const [repasswordErr,setRepasswordErr]=useState('');
    const handleChange =(e,name)=>{
         const user ={};
         const emailRegEx=RegExp(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         );
         user[name]= e.target.value;
         switch (name) {
             case 'name':
                 setName(user.name);
                 user.name.length < 3 ? setnameErr('name must be at least 3 characters'):setnameErr('')
                 break;
             case 'email':
                    setEmail(user.email);
                    !emailRegEx.test(user.email) ? setemailErr('Invalid email'):setemailErr('')
                    break;
             case 'password':
                      setPassword(user.password);
                      user.password.length < 8 ? setpasswordErr('password must be at least 3 characters'):setpasswordErr('')
                     break;  
             case 'repassword':
                setRepassword(user.repassword);
                        user.repassword !== password ? setRepasswordErr('password do not matches'):setRepasswordErr('')
                       break;          
             default:
                 break;
         }
         console.log(user,nameErr,emailErr)
    }
          useEffect(() => {
              axios
              .post(base_url,{
                  name,email,password
              })
              .then(response =>console.log(response))
          }, [])
    const handleSignUp = (e)=>{
        e.preventDefault();
        //check if is no error
        if(name && email&& password&& repassword && !nameErr && !emailErr && !passwordErr && !repasswordErr){
            
        }
    }
    return (
        <div>
            <AuthContainer>
                <h2 classemail={'text-center'}>sign up</h2>
                <form className={'mt-5'} onSubmit={(e)=>handleSignUp(e)}>
                    <div className="form-group">
                        <label htmlFor="name">enter full name</label>
                        <input 
                        onChange={(e)=>handleChange(e,'name')}
                         className={classnames("form-control",{'is-invalid':nameErr,
                         'is-valid':!nameErr && name.length})} 
                         type={'text'} 
                         name={'name'}
                          id={'name'}
                           placeholder={'full name'}
                            />
                        {nameErr && <span className={'text-danger'}>{nameErr}</span>}    
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">enter email</label>
                        <input onChange={(e)=>handleChange(e,'email')}
                         className={classnames("form-control",{'is-invalid':emailErr,
                         'is-valid':!emailErr && email.length})} 
                          type={'email'} name={'email'} id={'email'} placeholder={'your email'} />
                          {emailErr && <span className={'text-danger'}>{emailErr}</span>}   
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">enter password</label>
                        <input 
                        onChange={(e)=>handleChange(e,'password')}
                        className={classnames("form-control",{'is-invalid':passwordErr,
                        'is-valid':!passwordErr && password.length})}  
                         type={'password'} name={'password'} id={'password'} placeholder={'password'} />
                         {passwordErr && <span className={'text-danger'}>{passwordErr}</span>}   
                    </div>
                    <div className="form-group">
                        <label htmlFor="repassword">enter password again</label>
                        <input 
                        onChange={(e)=>handleChange(e,'repassword')}
                        className={classnames("form-control",{'is-invalid':repasswordErr,
                        'is-valid':!repasswordErr && repassword.length})} 
                          type={'password'} name={'repassword'} id={'repassword'} placeholder={'repassword'} />
                          {repasswordErr && <span className={'text-danger'}>{repasswordErr}</span>}   
                    </div>
                    <input type="submit" value={'sign up'} className={'btn btn-lg btn-primary mt-2'}/>
                    <p className={'float-left'}>
                        Already have an acoount ?<Link to={'login'}> signin</Link>
                    </p>

                </form>
            </AuthContainer>
        </div>
    )
}

export default SignUp
