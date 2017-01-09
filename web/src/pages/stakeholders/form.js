const React = require('react')
const {Redirect, Link} = require('react-router')
const xhr = require('xhr')
const StakeholderForm = React.createClass({
  getInitialState() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      unit: '',
      success: false
    }
  },
  handleChange(field) {
    return e => {
      const newState = {}
      newState[field] = e.target.value
      this.setState(newState)
    }
  },
  handleSubmit(e) {
    e.preventDefault()
    xhr.post('http://localhost:4000/stakeholders', {
      json: this.state
    }, (e, r, body) => {
      if (e) return console.log(e.message)
      this.setState({success: true})
    })
  },
  render () {
    return (
      <div>
        {this.state.success
          ? <Redirect to="/stakeholders" />
          : null }
        <h1>New Stakeholder Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">First Name</label>
            <input
              onChange={this.handleChange('firstName')}
              value={this.state.lastName}
              type="text"/>
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input onChange={this.handleChange('lastName')}
              value={this.state.lastName}
              type="text"/>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              onChange={this.handleChange('email')}
              value={this.state.email}
              mail="text"/>
          </div>
          <div>
            <label htmlFor="">Phone</label>
            <input
              onChange={this.handleChange('phone')}
              value={this.state.phone}
              type="text"/>
          </div>
          <div>
            <label htmlFor="">Unit</label>
            <input
              onChange={this.handleChange('unit')}
              value={this.state.unit}
              type="text"/>
          </div>
          <div>
            <button>Save</button>
            <Link to="/stakeholder">Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = StakeholderForm
