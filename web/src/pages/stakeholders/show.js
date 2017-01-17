const React = require('react')
// const xhr = require('xhr')
const { Link, Redirect } = require('react-router')

const Stakeholder = React.createClass({
  getInitialState(){
    return {
      stakeholder: {},
      removed: false
    }
  },
  componentDidMount() {
    this.props.get(this.props.params.id,
      (e, stakeholder) => {
      if (e) return console.log(e.message)
      this.setState({stakeholder})
      })
  },
  handleRemove(e) {
    e.preventDefault()
    if (confirm("Are you sure?") ) {
      this.props.remove(this.props.params.id, this.state.stakeholder, (e, body) => {
        if (e) return console.log(e.message)
        this.setState({removed: true})
      })
    }
  },
  render() {
    return(
      <div>
        {this.state.removed ? <Redirect to="/stakeholders" /> : null}
        <h3>{this.state.stakeholder.firstName + ' ' + this.state.stakeholder.lastName}</h3>
        <p>{this.state.stakeholder.email}</p>
        <p>{this.state.stakeholder.phone}</p>
        <p>{this.state.stakeholder.unit}</p>
        <Link to={`/stakeholders/${this.state.stakeholder.id}/edit`}>Edit</Link>
        |
        <a href="#" onClick={this.handleRemove}>Remove</a>
        |
        <Link to="/stakeholders">Return</Link>
      </div>
    )
  }
})

module.exports = Stakeholder
