import React from 'react';

import RateList from  './components/rates-list/rate-list.component';
import SearchRate from './components/search-rate/search-rate.component';

import './App.css';

class App extends React.Component {
  constructor() {
      super();

      this.state = {
        searchRate: '',
        rates: [
        ]
      }
    }

    componentDidMount() {
      fetch('http://api.nbp.pl/api/exchangerates/tables/a?format=json')
        .then(response => response.json())
        .then(a => this.setState({ rates: a[0].rates }));
    }

    onSearchChange = event => {
      this.setState({ searchRate: event.target.value })
    }

  render() {
    const { rates, searchRate } = this.state;
    const filteredRatesByCode = rates.filter(rate =>
      rate.code.toLowerCase().includes(searchRate.toLowerCase())
    );
    const filteredRatesByCurrency = rates.filter(rate =>
      rate.currency.toLowerCase().includes(searchRate.toLowerCase())
    );
    const filteredRates = filteredRatesByCode.concat(filteredRatesByCurrency);
  

    return(
      <div>
        <SearchRate onSearchChange={this.onSearchChange}/>
        <RateList rates={filteredRates} />
      </div>
    )
  }
}

export default App;
