import React, { useState } from 'react'

const generatePassword = () => {
  const password = Math.random().toString(36).replace(/[^a-z^A-Z^0-9]+/g, '').substr(0-9); 
    let hyphenPass = ""
    for(let i = 0; i < password.length; i++){
      if (i % 3 === 0 && i !== 0){
        hyphenPass += "-"
      }
        hyphenPass += password[i]
    }
    this.setState({password:hyphenPass, name:''})

  };    
  
function Password() {
  
    
    const [password] = useState('p@$$w0rd')
  
    return (
      <div>
        <div>{password}</div>
        
        <div>
          <button onClick={(e) => {
            generatePassword()
          }}>Generate</button>
        </div>
      </div>
    )
  }

export default Password