import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UsuarioIndividual from './UsuarioIndividual'
import { set } from 'mongoose'
function ListaUsuarios(){

    const[datausuarios, setdatausuario]=useState([])

    useEffect(() => {
        axios.get('api/usuario/obtenerusuarios').then(res =>{
            console.log(res.data)
            setdatausuario(res.data)
        }).catch(err => {
            console.log(err)
        })
        
    }, [])

    // mapear listadeusuarios en objeto usuario
    const Listausuarios = datausuarios.map(usuario=>{
        return(
            <div>
                <UsuarioIndividual usuario={usuario}/>
            </div>
        )
    })

    return(
        <div>
            <h2>lista de usuarios</h2>
            {listaUsuarios}
        </div>
    )
}

export default ListaUsuarios