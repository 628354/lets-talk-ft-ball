import React from 'react'
import Menubar from '../dashboard/Menubar';
import { Container, Row } from 'react-bootstrap';


export default function DashboardPage() {
  return (
    <div>
         <Menubar/>

         <div className='right-side-contant py-3'>
           <section className='min-section-one'>
           <Container fluid>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
           </Container>
           </section>
          </div>
    </div>
  )
}