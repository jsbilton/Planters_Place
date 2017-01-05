const React = require('react')
const {BrowserRouter, Match, Miss, Link} = require('react-router')

const Home = require('./pages/home')
const About = require('./pages/about')
const Stakeholders = require('./pages/stakeholders')
const Stakeholder = require('./pages/stakeholders/show')
//adding a Miss route
const NoMatch = () => (
  <div>
    <h3>Page Not Found</h3>
    <Link to="/">Home</Link>
  </div>
)
const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/about" component={About} />
          <Match exactly pattern="/stakeholders" component={Stakeholders} />
          <Match pattern="/stakeholders/:id/show" component={Stakeholder} />

          <Miss component={NoMatch} />
        </div>
      </BrowserRouter>
    )
  }
})

module.exports = App
