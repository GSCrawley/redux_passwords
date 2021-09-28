import React, { Component } from 'react'
import { connect } from 'react-redux'



class PasswordList extends Component {
    constructor(props) {
        super(props)
        this.state = { 
          password: 'p@ssw0rd', 
          name:'My Password',
          strength: '0'
        }
      }
    

    getList() {
        return this.props.passwords.map((pass, index) => {
            return (
                <div key={index} >
                  <h3> { pass.name }:  { pass.password} </h3> 
                </div>
            )
        })
    }
    render() {

        return (
            <div style={{paddingBottom:'2em'}}> 
                {this.getList()}
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        passwords: state.passwords 
    }
}

export default connect(mapStateToProps)(PasswordList)