const React = require('react')
const xhr = require('xhr')
const {Link} = require('react-router')

const Topic = React.createClass({
  getInitialState() {
    return {
      topic: {}
    }
  },
  componentDidMount() {
    xhr.get('http://localhost:4000/topics/' + this.props.params.id, {json: true}, (e, r, topic) => {
      if (e) return console.log(e.message)
      this.setState({topic})
    })
  },
  render() {
    return (
      <div>
        <h3>{this.state.topic.name}</h3>
        <Link to={`/topics/${this.state.topic.id}/edit`}>Edit</Link>
        <Link to="/topics">Return</Link>
      </div>
    )
  }
})

module.exports = Topic
