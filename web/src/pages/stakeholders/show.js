const React = require('react')
const xhr = require('xhr')
const { Link } = require('react-router')

const Stakeholder = React.createClass({
  getInitialState(){
    return {
      stakeholder: {}
    }
  },
  componentDidMount() {
    xhr.get('http://localhost:4000/stakeholders/' + this.props.params.id, {
      json: true
    }, (e, r, stakeholder) => {
      if (e) return console.log(e.message)
      this.setState({stakeholder})
      }
    )
  },
  render() {
    return(
      <div>
        <h3>{this.state.stakeholder.firstName + ' ' + this.state.stakeholder.lastName}</h3>
        <Link to="/stakeholders">Return</Link>
      </div>
    )
  }
})

module.exports = Stakeholder
