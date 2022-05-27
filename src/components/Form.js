import React from 'react';


export default function Form({addTodo}){
    const [formData, setFormData] = React.useState({todo:""})

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData=>(
            {
                ...prevFormData,
                [name] : value
                
            }
        ))
    }

    function handleAddTodo() {
        if(!formData.todo) return alert("Todo must not be blank!")
        addTodo({todo: formData.todo})
    }
    return (
        <div className="form--container">
            <input 
                type="text" 
                name="todo" 
                className="form-control"
                onChange={handleChange}
                value={formData.todo}
            />
            <button onClick={handleAddTodo} className="btn"> <i className="fas fa-plus-circle"></i> ADD</button>
        </div>
    )
}