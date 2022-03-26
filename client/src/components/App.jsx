import React from 'react';
import Axios from 'axios';
import AddCow from './AddCow.jsx';
import CowList from './CowList.jsx';
import SelectedCow from './SelectedCow.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cowList: [],
      currentCowName: '',
      currentCowDescription: '',
      selectedCow: []
    };
  }

  getCows() {
    Axios.get('/api/cows')
    .then((result) => {
      this.setState({
        cowList: result.data
      })
    })
    .catch((err) => {
      console.log(`Error found in getCows: ${err}`);
    })
  }

  addCow() {
    var cow = {
      name: this.state.currentCowName,
      description: this.state.currentCowDescription
    };
    Axios.post('/api/cows', cow)
    .then((result) => {
      console.log(result);
      this.getCows();
    })
    .catch((err) => {
      console.log(`Error found in addCow: ${err}`);
    })
  }

  onCowNameInputChange(event) {
    var name = event.target.value;
    this.setState({
      currentCowName: name
    })
  }

  onCowDescriptionInputChange(event) {
    var description = event.target.value;
    this.setState({
      currentCowDescription: description
    })
  }

  onCowSubmitClick() {
    this.addCow();
  }

  onCowNameClick(event, index) {
    var selectedCow = this.state.cowList[index];
    this.state.selectedCow = [];
    this.state.selectedCow.push(selectedCow);
    this.setState({
      selectedCow: this.state.selectedCow,
    })
  }

  // emptySelectedCow() {
  //   this.setState({
  //     selectedCow: []
  //   })
  // }
  render() {
    return (
      <div>
        <h1>Cow List!</h1>
        <AddCow onCowNameInputChange={this.onCowNameInputChange.bind(this)} onCowDescriptionInputChange={this.onCowDescriptionInputChange.bind(this)} onCowSubmitClick={this.onCowSubmitClick.bind(this)}/>
        <SelectedCow cow={this.state.selectedCow}/>
        <CowList cowList={this.state.cowList} onCowNameClick={this.onCowNameClick.bind(this)}/>
      </div>
    );
  }
  componentDidMount() {
    this.getCows();
  }
}

export default App;