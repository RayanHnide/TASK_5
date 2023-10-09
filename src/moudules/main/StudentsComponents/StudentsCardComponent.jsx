// @flow
import * as React from 'react';

import '../../../components/Style.css'

export  function StudentsCardComponent({name,age,email,description}) {

    return (
          <>

              <div className=' col-md-3 shadow-lg mt-4 mx-3 card bla  p-3 ' style={{borderRadius:'9px 9px 100px    9px',position:'relative',background:'#ffffff'}}>
                  <img style={{border: "0.2px solid black",position:'absolute',top:'-40px',right:'-10px',width:'16%',borderRadius:'  50%  50% 0 50%  '}} src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" alt=""/>
                  <h3 className='text-primary'>{name}</h3>
                  <p style={{color:'gray'}}>{age}</p>
                  <p className='text-info'>{email}</p>
                  <p style={{color:'gray'}} >{description}</p>
              </div>




          </>
    );
}