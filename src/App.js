import React from 'react';
import './App.css';
import Dropdown from './components/dropdown/Dropdown';
import Picture from './components/picture/picture';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.effect = false
    this.state = {
      breed: '',
      responseURL: ''
    }
  }
  getDropdownValue = (event) => {
    let dropdownValue = event.target.value.trim().toLowerCase()
    this.setState((prevState) => ({
      breed: dropdownValue
    }))
    this.fetchData(dropdownValue)
  }

  fetchData = async (breed = '') => {
    let url = 'https://dog.ceo/api/breeds/image/random'
    if (breed) {
      url = `https://dog.ceo/api/breed/${breed}/images/random`
    } else {
      url = 'https://dog.ceo/api/breeds/image/random'
    }

    const response = await fetch(url)
    const responseData = await response.json()

    this.setState((prevState) => ({
      responseURL: responseData.message
    }))
  }

  componentDidMount() {
    if (!this.effect)
      this.fetchData()
    this.effect = true
  }

  render() {
    return <section className='App'>
      <Dropdown getDropdownValue={this.getDropdownValue} />
      <Picture breed={this.state.breed} image={this.state.responseURL} />
    </section>
  }

}

export default App;
