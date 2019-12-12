import './SharkTank.scss';
import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';
import LivingStudent from '../LivingStudent/LivingStudent';

class SharkTank extends React.Component {
  static propTypes = {
    livingStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const livingStudents = this.props.liveStudents;

    const studentCards = livingStudents.map((student) => <LivingStudent key={student.id} student={student} />);

    return (
      <div id='sharkTank'>
        <h3>Shark Tank</h3>
        <button className='btn btn-outline-light'>SHARK ATTACK!</button>
        <div className='livingStudents row d-flex flex-wrap justify-content-around'>
          {studentCards}
        </div>
      </div>
    );
  }
}

export default SharkTank;
