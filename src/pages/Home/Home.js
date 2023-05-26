import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { Auth } from "../../api"
import { Loader } from 'semantic-ui-react'
import { size } from "lodash"
import { Videos } from "../../components/Videos"


const videoController = new Auth()

export function Home() {

    const { id } = useParams();

    const [videos, setVideos] = useState([])
    const [paciente, setPaciente] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await videoController.obtainVideoByPx(id)
                setVideos(response);
            } catch (error) {
                console.error(error)
            }
        })()
    }, [id])

    useEffect(() => {
        (async () => {
            try {
                const response = await videoController.logIn(id)
                setPaciente(response);
            } catch (error) {
                console.error(error)
            }
        })()
    }, [id])

    if (size(videos) === 0) {
        return (
            <Loader active inline="centered" size='large'  >
                Cargando
    
            </Loader>
        )
    }
      

    return (
       <div>
            <Videos data={videos} paciente={paciente} />
       </div>
    )
}
