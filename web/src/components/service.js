const React = require('react')
const xhr = require('xhr')
const API_URL = process.env.REACT_APP_API

const Service = Component => React.createClass({
  allDocs (cb) {
    xhr.get(API_URL + '/stakeholders', {json: true}, (e, r, body) => {
      cb(e, body)
    })
  },
  get(id, cb) {
    xhr.get(API_URL + '/stakeholders/' + id,
    {json: true}, (e, r, body) => {
      cb(e, body)
    })
  },
  post(doc, cb) {
    xhr.post(`${API_URL}/stakeholders`, {json: doc}, (e, r, body) => {
      cb(e, body)
    })
  },
  put(id, doc, cb) {
    xhr.put(`${API_URL}/stakeholders/${id}`, {json: doc}, (e, r, body) => {
      cb(e, body)
    })
  },
  remove(id, body, cb) {
    xhr.del(`${API_URL}/stakeholders/${id}`, {json: body}, (e, r, body) => {
      cb(e, body)
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

module.exports = Service
