import React, { useContext } from 'react'
import { UserContext } from '../hooks/useContext'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { useStyles, BootstrapInput } from '../components/subcomponents/Input';
import useForm from '../hooks/userForm';
import { Input } from '@material-ui/core';
export const HomePage = () => {
  const classes = useStyles();
    const {user, setUser} =useContext(UserContext)
    const [form, handlerChangeForm, handlerResetForm] = useForm({username:""})
    const {username}= form;
    const onSubmit = (e) => {
      e.preventDefault();
      //const updateUser={username: username,...user}
      const updateUser={...user, username}
      //console.log(updateUser)
      setUser(updateUser)
    };
    return (
        <div>
        <h2>HomePage {user.username}</h2>
        <form className={classes.root} onSubmit={onSubmit}>
      

        
        <BootstrapInput 
        placeholder="username"
       name="username" 
        value={username} 
        onChange={handlerChangeForm}
    />
    {/*
      <input type="text" name="username"  value={username} onChange={handlerChangeForm}/>
    */}
    </form>
        </div>
    )
}
