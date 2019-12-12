import React from 'react';
import './App.scss';
import studentData from '../helpers/data/studentData';
import SharkTank from '../components/SharkTank/SharkTank';
import GraveYard from '../components/GraveYard/GraveYard';

class App extends React.Component {
  state = {
    livingStudents: [],
    deadStudents: [],
  }

  componentDidMount() {
    const livingStudents = studentData.livingStudents();
    const deadStudents = studentData.dearlyDeparted();
    this.setState({ livingStudents });
    this.setState({ deadStudents });
  }

  render() {
    return (
      <div className="App">
        <h1>E10 Pool Day</h1>
        <div>
          <SharkTank className='col-6' liveStudents={this.state.livingStudents} />
          <GraveYard className='col-6' departedStudents={this.state.deadStudents} />
        </div>
      </div>
    );
  }
}

export default App;
