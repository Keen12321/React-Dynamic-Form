import React, { Component } from 'react'
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    stuff: [],
    id: '',
    type: '',
    label: '',
    icon: '',
  }

  componentDidMount() {
    axios.get('http://localhost:3001/fields').then(resp => {

      console.log(resp.data)

      this.setState({
        stuff: resp.data,
        id: resp.data.id,
        type: resp.data.type,
        label: resp.data.label,
        icon: resp.data.icon,
      })
    })
  }

  render() {
    return (
      <div>
        <form>
         {this.state.stuff.map(data => (
              data.type === 'text' | data.type === 'email' | data.type === 'tel' ? <input key={data.id} type={data.type} placeholder={data.label}/>
                : data.type === 'textarea' ? <textarea key={data.id} placeholder={data.label}></textarea>
                : data.type === 'select' ? <select key={data.id} id={data.id} placeholder={data.label}>
                  <option value=''>{data.label}</option>
                {this.state.options.map(items => (
                <option value={items.value}>{items.label}</option>
            ))}
                </select>
          ))}
        </form>
      </div>
  )
}