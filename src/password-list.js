import React, { Component } from 'react'
import { connect } from 'react-redux'

class PasswordList extends Component {

    getList() {
        return this.props.passwords.map((pass, index) => {
            return (
                <div key={index}>
                    name: { pass.nmae } password: { pass.password}
                </div>
            )
        })
    }
    render() {
        return (
            <div>
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