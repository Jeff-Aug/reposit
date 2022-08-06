import React,{useCallback, useState} from "react"
import { FaGithub, FaPlus } from "react-icons/fa"
import {Container, Form, SubmitButton} from './styles'
import api from '../../services/api.js'

export default function Main(){
    
    const [newRepo,setNewRepo] = useState('')
    const [repositorios,setRepositorios] = useState([])

    function handleInputChange(e){
        setNewRepo(e.target.value)
    }
    const handleSubmit = useCallback((e)=>{
        e.preventDefault()

        async function submit(){

            const response = await api.get(`repos/${newRepo}`)
            // const response = await api.get(`${newRepo}`)//api pokemon
            
            const data = {
                name: response.data.full_name,
            }
            
            setRepositorios([...repositorios, data])
            setNewRepo('')
        }
        submit()
    },[newRepo, repositorios])

    return(
        <>
            <Container>
                <h1>
                <FaGithub size={27} />
                    Meus repos
                    </h1>
                <Form onSubmit={handleSubmit} >
                    <input 
                    type="text" 
                    onChange={handleInputChange}
                    value={newRepo}
                    placeholder="Adicionar Repositorios"
                    />
                    <SubmitButton>
                        <FaPlus color="#fff" size={14}   />
                    </SubmitButton>

                </Form>
            </Container>


        </>
    )
}