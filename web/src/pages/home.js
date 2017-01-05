const React = require('react')
const {Link} = require('react-router')
const Home = React.createClass({
  render () {
    return (
      <div>
        <h1>
          Planters Place HOA
        </h1>
        <h3>Menu</h3>
        <ul>
          <li><Link to="/stakeholders">Stakeholders</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    )
  }
})

module.exports = Home
