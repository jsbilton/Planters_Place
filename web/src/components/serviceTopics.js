const React = require('react')
const xhr = require('xhr')
const url = process.env.REACT_APP_API

const ServiceTopics = Component => React.createClass({
  allDocs (callback) {
    xhr.get(`${url}/topics`, {json: true}, (e, r, body) => {
      callback(e, body)
    })
  },
  get (id, callback) {
    xhr.get(`${url}/topics/${id}`, {json: true}, (e, r, body) => {
      callback(e, body)
    })
  },
  post (doc, callback) {
    xhr.post(`${url}/topics`, {json: doc}, (e, r, body) => {
      callback(e, body)
    })
  },
  put (id, doc, callback) {
    xhr.put(`${url}/topics/${id}`, {json: doc}, (e, r, body) => {
      callback(e, body)
    })
  },
  remove (id, body, callback) {
    xhr.del(`${url}/topics/${id}`, {json: body}, (e, r, body) => {
      callback(e, body)
    })
  },
  render () {
    return (
      <Component {...this.props}
        allDocs={this.allDocs}
        get={this.get}
        post={this.post}
        put={this.put}
        remove={this.remove}
      />
    )
  }
})

module.exports = ServiceTopics
