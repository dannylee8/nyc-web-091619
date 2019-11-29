import React from 'react'

class HogTile extends React.Component {

  state = {
    open: false
  }

  renderDetails = () => {
    return (
      <div>
        <h3>Specialty: {this.props.specialty}</h3>
        <h3>This is {this.props.greased ? "" : "not"} a greased boi</h3>
        <h3>Weight: {this.props.weight}</h3>
        <h3>Highest Medal: {this.props["highest medal achieved"] }</h3>
      </div>
    )
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  slugify = () => {
    return this.props.name.toLowerCase().replace(/\s/g, "_") + ".jpg"
  }

  render(){
    return (
      <div className="pigTile" onClick={this.toggle}>
        <img src={`./hog-imgs/${this.slugify()}`}/>
        <div>
          {this.props.name}
        </div>
        {
          this.state.open
          ?
            this.renderDetails()
          :
            null
        }

      </div>
    )
  }
}

export default HogTile