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
    this.setState({ livingStudents, deadStudents });
  }

  randomizer = () => {
    const living = studentData.livingStudents();
    const maxNum = living.length;
    const pickIndex = Math.floor((Math.random() * maxNum));
    return living[pickIndex].id;
  }

  sharkAttack = () => {
    const livingStudentId = this.randomizer();
    studentData.followTheLight(livingStudentId);
    const livingStudents = studentData.livingStudents();
    const deadStudents = studentData.dearlyDeparted();
    this.setState({ livingStudents, deadStudents });
  };

  render() {
    return (
      <div className="App">
        <h1>E10 Pool Day</h1>
        <div className="row d-flex">
          <SharkTank liveStudents={this.state.livingStudents} sharkAttack={this.sharkAttack} />
          <GraveYard departedStudents={this.state.deadStudents} />
        </div>
      </div>
    );
  }
}

export default App;
