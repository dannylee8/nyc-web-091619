import React from 'react'

import { connect } from 'react-redux'
import { thunkyChangePokemonName } from './redux/actions'

class SomeChild extends React.Component {
  componentDidMount(){
    this.props.thunkyChangePokemonName(342)
  }
  render(){
    return (
      <div> SomeChild</div>
    )
  }
}

export default connect(null, { thunkyChangePokemonName })(SomeChild)