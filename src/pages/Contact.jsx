import React from 'react';
import Form from '../components/Form';
import Scrolltop from '../components/Scrolltop';

const Contact = () => {
  return (
    <>

      <section id='sec6' className='backimg mt-lg-5 pt-lg-4'>
        <div className="container p-0 my-lg-5 py-3 py-md-5" >
            <div className="text-center">
              <span className='fontbe darkfont fs-4'>Contact US</span>
              <h1 className='fontbu h1'>Book your table</h1>
            </div>
          <Form className='col-12 col-lg-6  pt-5 py-lg-5 mx-auto needs-validation'
            part="has-validation form-floating col-12 py-3"
            submitbtn="col-12 py-3 w-md-50"
            btn="Submit"
            partd="form-floating col-12 col-md-6 py-3 "
          />
        </div>
      </section>
      <Scrolltop />
    </>
  )
}
export default Contact;