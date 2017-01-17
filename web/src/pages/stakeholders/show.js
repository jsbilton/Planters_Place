const React = require('react')
const xhr = require('xhr')
const { Link, Redirect } = require('react-router')

const Stakeholder = React.createClass({
  getInitialState(){
    return {
      stakeholder: {},
      removed: false
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
  handleRemove(e) {
    e.preventDefault()
    if (confirm("Are you sure?") ) {
      xhr.del('http://localhost:4000/stakeholders/' + this.state.person.id, {
        json: this.state.stakeholder
      }, (e, r, body) => {
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
