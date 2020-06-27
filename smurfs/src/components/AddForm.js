import React,{useState} from 'react';
import { connect } from 'react-redux';
import { submitForm} from '../actions';


const AddForm = (props) => {

    const [form, setForm] = useState({name:'', age: '', height: ''});


    const handleChanges = (e) => {
        setForm(
            {
                ...form,
                [e.target.name]: e.target.value
            }
        )
    }

    const submitHandler = (e) => {
        e.preventDefault();
        submitForm(form)

    }
    
    
    
   
    return(
        <>
        <form onSubmit={submitHandler}>
            <h2>Come Join Our Village</h2>
            <label htmlFor="name">
                <input 
                    type='text'
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChanges}
                    placeholder='Enter Your Name'
                />
            </label>
            <label htmlFor="age">
                <input
                    type='number'
                    name='age'
                    id='age'
                    value={form.age}
                    onChange={handleChanges}
                    placeholder='Enter Your Age'
                />
            </label>
            <label htmlFor="height">
                <input
                    type='text'
                    name='height'
                    id='height'
                    value={form.height}
                    onChange={handleChanges}
                    placeholder='Enter Your Height'
                />
            </label>
            <button>Join Village</button>
        </form>
        {form.name}{form.age}{form.height}
        </>
    )

}

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = {

    submitForm
}
export default connect(mapStateToProps, mapDispatchToProps) (AddForm);