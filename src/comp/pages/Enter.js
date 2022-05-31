import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { maxWidth } from '@mui/system';

export default function Enter() {

    //React hoook form only work in functional components, not in class compoment//

    const {register, handleSubmit, formState : {errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    
    return (
        <div className="container " style={{maxWidth:300}}>
           
            <Form onSubmit={handleSubmit(onSubmit)} className="ui form ">
            
                <Form.Field className="field">
                    <label>First Name</label>
                    <input className="" placeholder='First Name' type="text"
                    {...register("firstName", { required: true, maxLength: 10,
                     })} />
                    
                </Form.Field>
                {errors.firstName && <p>Please check the First Name</p>}

                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' type="text"
                    {...register("lastName",{ required: true, maxLength: 10 })} />
                </Form.Field>
                {errors.lastName && <p>Please check the First Name</p>}
                
                <Form.Field>
                    <div className="ui form">
                <div className="field">
                <label>User Type</label>
                <div className="ui selection dropdown">
                    <input type="hidden" name="user type"/>
                    <i className="dropdown icon"></i>
                    <div className="default text">Select User</div>
                    <div className="menu">
                        <div className="item" data-value="1">Farmer</div>
                        <div className="item" data-value="0">Customer</div>
                    </div>
                </div>
                </div>
                </div>
                
                </Form.Field>
                
                <select>
                    
                    <option value="farmer">Farmer</option>
                    <option value="cuntomer">Customer</option>
                    
                </select>

                


                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' type="email"
                    {...register("email",{required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                </Form.Field>
                {errors.email && <p>Please check the Email</p>}

                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' type="password"
                    {...register("password",{required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })} />
                </Form.Field>
                {errors.password && <p>Please check the Password</p>}

                <Button type='submit'>Submit</Button>
                
            </Form>
            
        </div>
    )
}