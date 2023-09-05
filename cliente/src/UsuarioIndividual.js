import React, { useEffect } from 'react'
import axios from 'axios'
import {link, useNavigate} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'


function UsuarioIndividual({usuario}){

    const navegar = useNavigate()

    // para animacion scroll
    useEffect(() => {
        AOS.init()
    }, [])

    // funcion para borrarusuario
    function borrarusuario(idusuario){
        axios.post('/api/usuario/borrarusuario', {idusuario: idusuario}).then(res => {
            console.log(res.data)
            const datausuario = res.data[0]
            alert(res.data)
            navegar(0)
        }).catch(err => {
            console.log(err)
        })
    }


    return(
        <div className="container">
            <div className="row">

                <div className="col-sm-6 offset-3" data-aos="flip-right">                   
                    <ul className="list-group">
                        <li className="list-group-item">{usuario.idusuario}</li>
                        <li className="list-group-item">{usuario.nombre}</li>
                        <li className="list-group-item">{usuario.email}</li>
                        <li className="list-group-item">{usuario.telefono}</li>
                    </ul>

                    <link to={`/editarusuario/${usuario.idusuario}`}><li className="btn btn-success">Editar</li></link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={()=>{borrarusuario(usuario.idusuario)}}>Borrar</button>
                    <hr className="mt-4"></hr>
                </div>
            </div>
        </div>
    )
}

export default UsuarioIndividual