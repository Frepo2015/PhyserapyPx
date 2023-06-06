import React from 'react'
import { map } from "lodash"
import { Grid, Card } from "semantic-ui-react"
import { bannerHome } from "../../assets"
import { Player, BigPlayButton } from "video-react"
import "./Videos.scss"


export function Videos(props) {

  const { data, paciente } = props

  
  

  return (
    <div className='home-page'>
      <div 
      className='home-page__banner' 
      style={{backgroundImage: `url(${bannerHome})` }}>
      </div>

      <div className='home-page__data'>
          <h2>Bienvenido {paciente.nombre}</h2>
          <p>Clave de expediente: <span> {paciente.id} </span></p>

          <h3>Videos: </h3>
      </div>
      <Grid divided="stackable">
        <Grid.Row columns={2}>
          

      

      
      {map(data, (item) => {
        const d = item.created_at.seconds
        const date = convertDate(d);
        return (
          <Grid.Column key={item.id}>

          
          <Card>
          <Card.Header>{item.title}</Card.Header>
           <Player playsInline src={item.file} fluid={false}><BigPlayButton position="center" /></Player>
            <Card.Content>
              
              <Card.Meta>
                <span className='date'>Asignado el dia: {date.toDateString()}</span>
              </Card.Meta>
              <Card.Description>
                {item.description}
              </Card.Description>
            </Card.Content>
            
          </Card>
          </Grid.Column>

        )
      })}
        </Grid.Row>
      </Grid>


    </div>























    // <div className='container-slider'>
    //   <Slick {...settings} className='slider'>
    //     {map(data, (item) => {
    //       const d = item.created_at.seconds
    //       const date = convertDate(d);
    //       return (
    //         <div key={item.id} className='slider__item'>
    //           <div className='slider__item-header'>
    //             <h3>{item.title}</h3>
    //             <p> Fecha de asignacion:<span> {date.toDateString()}</span></p>
    //           </div>
    //           <div className='slider__item-player'>
    //             <Grid divided='vertically'>
    //               <Grid.Row columns={2}>
    //                 <Grid.Column>
    //                   <Player
    //                     playsInline
    //                     src={item.file}
    //                     fluid={false}
    //                   >
    //                     <BigPlayButton position="center" />
    //                   </Player>
    //                 </Grid.Column>
    //                 <Grid.Column>
    //                   <TextArea disabled value={item.description} />
    //                 </Grid.Column>
    //               </Grid.Row>
    //             </Grid>

    //           </div>

    //         </div>
    //       )
    //     })}
    //   </Slick>

    // </div>
  )
}
function convertDate(utcSeconds) {
  let timestamp = utcSeconds * 1000
  let d = new Date(timestamp);
  return d
}
