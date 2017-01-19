const React = require('react')
const xhr = require('xhr')
const {Link} = require('react-router')
const Topics = React.createClass({
  getInitialState() {
    return {
        topics: []
    }
  },
  componentDidMount() {
  xhr.get('http://localhost:4000/topics', {
    json: true
  }, (e, r, topics) => {
    if (e) return console.log(e.message)
    this.setState({topics})
   })
  },
  render () {
    const listTopic = topic => <li>{topic.name}</li>
    return (
      <div>
        <h1>Topics List</h1>
        <ul>
          {this.state.topics.map(listTopic)}
        </ul>
        <Link to="/">Home</Link>
      </div>
    )
  }
})
module.exports = Topics
