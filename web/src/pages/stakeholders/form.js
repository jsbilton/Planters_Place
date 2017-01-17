const React = require('react')
const {Redirect, Link} = require('react-router')
const xhr = require('xhr')
const {labelStyle} = {display: 'block'}
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
  componentDidMount() {
    // check if there is an id props; if yes get the stakeholder doc
    if (this.props.params.id) {
      xhr.get('http://localhostl:4000/stakeholders/' + this.props.params.id, {
        json:true
      }, (e, r, stakeholder) => {
        if (e) return console.log(e.message)
        this.setState(stakeholder)
      })
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
    // if an update and a post if new stakeholder doc
    if (this.state.id)
    xhr.put('http://localhost:4000/stakeholders/' + this.state.id, {
      json: this.state
    }, (e, r, body) => {
      if (e) return console.log(e.message)
      this.setState({success: true})
    })
    else {
      xhr.post('http://localhost:4000/stakeholders', {
        json: this.state
      }, (e, r, body) => {
        if (e) return console.log(e.message)
        this.setState({success: true})
      })
    }
  },
  render () {
    const formState = this.state.id
    ? 'Edit'
    : 'New'
    return (
      <div>
        {this.state.success && this.state.id ?
          <Redirect to={`/stakeholders/${this.state.id}/show`} /> : null }

        {this.state.success && !this.state.id ?
          <Redirect to={`/stakeholders`} /> : null }

        <h1>{formState} Stakeholder Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label style={labelStyle}>First Name</label>
            <input
              onChange={this.handleChange('firstName')}
              value={this.state.firstName}
              type="text"/>
          </div>
          <div>
            <label style={labelStyle}>Last Name</label>
            <input
              onChange={this.handleChange('lastName')}
              value={this.state.lastName}
              type="text"/>
          </div>
          <div>
            <label style={labelStyle}>Email</label>
            <input
              onChange={this.handleChange('email')}
              value={this.state.email}
              email="text"/>
          </div>
          <div>
            <label style={labelStyle}>Phone</label>
            <input
              onChange={this.handleChange('phone')}
              value={this.state.phone}
              type="text"/>
          </div>
          <div>
            <label style={labelStyle}>Unit</label>
            <input
              onChange={this.handleChange('unit')}
              value={this.state.unit}
              type="text"/>
          </div>
          <div>
            <button>Save</button>
            <Link to="/stakeholders">Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = StakeholderForm
