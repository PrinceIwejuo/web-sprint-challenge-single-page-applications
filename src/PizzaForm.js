import React, { useState } from "react"
import axios from 'axios'
import FormSchema from './FormSchema'
import * as yup from 'yup'



export default function PizzaForm() {

    const { pizzaForm, setPizzaForm } = useState("")
    const defaultState = {
        size: "",
        sauce: "",
        toppings: "",
        instructions: "",
    }
    const { formState, setFormState } = useState(defaultState)

    const formSubmit = e => {
        e.preventDefault()
        axios
            .post('https://reqres.in/api/users',)
            .then(res => {
                setPizzaForm(JSON.stringify(res.data))
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    const inputChange = e => {

    }

    const [errors, setErrors] = useState({ ...defaultState })

    const [buttonDisabled, setButtonDisabled] = useState(true)

    const validatChage = e => {
        yup
            .reach(FormSchema, e.target.name)
            .validate(e.target.value)
            .then((valid) => {
                setButtonDisabled(!valid)
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            })
            .catch(error =>
                setErrors({
                    ...errors,
                    [e.target.name]: error.errors[0]
                }))
    }


    return (
        <div>
            <h1>Build Your Own Pizza</h1>
            <form onSubmit={formSubmit}>
                <label htmlFor="size" onChange={inputChange} >
                    Choice of size
                <select id="size" name="size">
                        <option value="small"> Small </option>
                        <option value="medium"> Medium </option>
                        <option value="large"> Large </option>
                    </select>
                </label>
                <label htmlFor="sauce" onChange={inputChange} >
                    Choice of sauce
                <input name="red" type="radio" /> Red
                <input name="alfredo" type="radio" /> Alfredo
                <input name="pesto" type="radio" /> Pesto
            </label>
                <label htmlFor="toppings" onChange={inputChange} > Add Toppings
            <label htmlFor="pineapple">
                        Pineapple
                <input onChange={inputChange}
                            name="pineapple"
                            type="checkbox"
                            value="pineapple"
                        />
                    </label>
                    <label> Pepperoni
                <input type="checkbox" name="pepperoni" value="pepperoni" />
                    </label>
                    <label> Sausage
                <input type="checkbox" name="sausage" value="sausage" />
                    </label>
                    <label> Ham
                <input type="checkbox" name="ham" value="ham" />
                    </label>
                    <label> Mushrooms
                <input type="checkbox" name="mushrooms" value="mushrooms" />
                    </label>
                    <label htmlFor="instructions">
                        Additional instructions
                <input
                            id="instructions"
                            type="text"
                            name="instructions"
                            placeholder="Enter Here"
                            data-cy="instructions"
                            onChange={inputChange}
                        />
                    </label>
                </label>
                <button name="submit" onChange={inputChange} >Submit Order</button>
            </form>

        </div>
    )
};