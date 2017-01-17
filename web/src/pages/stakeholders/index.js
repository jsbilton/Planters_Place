const React = require('react')
const {Link} = require('react-router')
const xhr = require('xhr')
const Stakeholders = React.createClass({
  getInitialState() {
    return {
      stakeholders: []
    }
  },
  componentDidMount() {
    this.props.allDocs((e, stakeholders) => {
      if (e) return console.log(e.message)
    this.setState({stakeholders})
    })
  },
  render() {
    const listStakeholder = stakeholder =>
    <li key={stakeholder.id}>
      <Link to={`stakeholders/${stakeholder.id}/show`}>
      {stakeholder.firstName + ' ' + stakeholder.lastName}
    </Link>
    </li>
    return (
      <div>
        <h1>Stakeholder Roster</h1>
        <Link to="/stakeholders/new">New Stakeholder</Link>
        <ul>
          {this.state.stakeholders.map(listStakeholder)}
        </ul>
        <Link to="/">Home</Link>
      </div>
    )
  }
})

module.exports = Stakeholders
