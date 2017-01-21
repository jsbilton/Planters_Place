const React = require('react')
const {BrowserRouter, Match, Miss, Link} = require('react-router')

const Home = require('./pages/home')
const About = require('./pages/about')

const Stakeholders = require('./pages/stakeholders')
const Stakeholder = require('./pages/stakeholders/show')
const StakeholderForm = require('./pages/stakeholders/form')
const Service = require('./components/service')

const Topics = require('./pages/topics')
const Topic = require('./pages/topics/show')
const TopicForm = require('./pages/topics/form')
const ServiceTopics = require('./components/serviceTopics')

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
          <Match exactly pattern="/stakeholders" component={Service(Stakeholders)} />
          <Match pattern="/stakeholders/:id/show" component={Service(Stakeholder)} />
          <Match exactly pattern="/stakeholders/new" component={StakeholderForm} />
          <Match pattern="/stakeholders/:id/edit" component={StakeholderForm} />

          <Match exactly pattern="/topics" component={ServiceTopics(Topics)} />
          <Match pattern="/topics/:id/show" component={ServiceTopics(Topic)} />
          <Match exactly pattern="/topics/new" component={TopicForm} />
          <Match pattern="/topics/:id/edit" component={TopicForm} />

          <Miss component={NoMatch} />
        </div>
      </BrowserRouter>
    )
  }
})

module.exports = App
