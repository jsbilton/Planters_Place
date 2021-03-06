const React = require('react')
const xhr = require('xhr')
const {Link, Redirect} = require('react-router')
const labelStyle = { display: 'block'}

const TopicForm = React.createClass({
  getInitialState() {
    return {
      name: '',
      description: '',
      category: '',
      location: '',
      reported_by: '',
      success: false
    }
  },
  handleChange(field) {
    return (e) => {
      const newState = {}
      newState[field] = e.target.value
      this.setState(newState)
    }
  },
  handleSubmit(e) {
    e.preventDefault()
    if (this.state.id) {
      xhr.put('http://localhost:4000/topics/' + this.state.id, { json: this.state }, (e, r, body) => {
        if (e) return console.log(e.message)
        this.setState({success: true})
        })
    } else {
      xhr.post('http://localhost:4000/topics', { json: this.state }, (e, r, body) => {
        if (e) return console.log(e.message)
        this.setState({success: true})
      })
     }
  },
  componentDidMount() {
    if (this.props.params.id) {
      xhr.get('http://localhost:4000/topics/' + this.props.params.id, { json: true }, (e, r, topic) => {
        if (e) return console.log(e.message)
        this.setState(topic)
      })
    }
  },
  render() {
    const formState = this.state.id ? 'Edit' : 'New'
    return (
      <div>
        {this.state.success && this.state.id ? <Redirect to={`/topics/${this.state.id}/show`} /> : null }
        {this.state.success && !this.state.id ? <Redirect to={`/topics`} /> : null }

        <h3>{formState} Topic</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label style={labelStyle}>Name</label>
            <input
              onChange={this.handleChange('name')}
              value={this.state.name}
              type="text"/>
          </div>
          <div>
            <label style={labelStyle}>Description</label>
            <input
              onChange={this.handleChange('description')}
              value={this.state.description}
              type="text"/>
          </div>
          <div>
            <label style={labelStyle}>Category</label>
            <input
              onChange={this.handleChange('category')}
              value={this.state.category}
              type="text"/>
          </div>
          <div>
            <label style={labelStyle}>Location</label>
            <input
              onChange={this.handleChange('location')}
              value={this.state.location}
              type="text"/>
          </div>
          <div>
            <label style={labelStyle}>Reported By</label>
            <input
              onChange={this.handleChange('reported_by')}
              value={this.state.reported_by}
              type="text"/>
          </div>
          <div>
            <button>Save</button>
            <Link to="/topics">Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
})
module.exports = TopicForm
