const React = require('react')
const {Link, Redirect} = require('react-router')

const Topic = React.createClass({
  getInitialState() {
    return {
      topic: {},
      removed: false
    }
  },
  componentDidMount() {
    this.props.get(this.props.params.id, (e, topic) => {
      if (e) return console.log(e.message)
      this.setState({topic})
    })
  },
  handleRemove(e) {
    e.preventDefault()
    if (confirm("Sure?")) {
      this.props.remove(this.props.params.id, this.state.topic, (e, body) => {
        if (e) return console.log(e.message)
        this.setState({removed: true})
      })
    }
  },
  render() {
    return (
      <div>
        {this.state.removed ? <Redirect to="/topics" /> : null}
        <h3>{this.state.topic.name}</h3>
        <p>{this.state.topic.description}</p>
        <p>{this.state.topic.category}</p>
        <p>{this.state.topic.location}</p>
        <p>{this.state.topic.reported_by}</p>
        <Link to={`/topics/${this.state.topic.id}/edit`}>Edit</Link>
        |
        <a href="#" onClick={this.handleRemove}>Remove</a>
        |
        <Link to="/topics">Return</Link>
      </div>
    )
  }
})

module.exports = Topic
