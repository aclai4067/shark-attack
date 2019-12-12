import './SharkTank.scss';
import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';
import LivingStudent from '../LivingStudent/LivingStudent';
import sadShark from './assets/images/sadShark.jpg';

class SharkTank extends React.Component {
  static propTypes = {
    liveStudents: PropTypes.arrayOf(studentShape.studentShape),
    sharkAttack: PropTypes.func,
  }

  sharkAttackEvent = (e) => {
    const { sharkAttack } = this.props;
    e.preventDefault();
    sharkAttack();
  };

  render() {
    const livingStudents = this.props.liveStudents;

    const studentCards = livingStudents.map((student) => <LivingStudent key={student.id} student={student} />);

    return (
      <div id='sharkTank'>
        <h3>Shark Tank</h3>
        {
          (livingStudents[0]) ? (<button className='btn btn-outline-light' onClick={this.sharkAttackEvent}>SHARK ATTACK!</button>) 
            : (<img className='lonelyShark' src={sadShark} alt='https://www.instagram.com/scribbleskip/' />)
        }
        <div className='livingStudents row d-flex flex-wrap justify-content-around'>
          {studentCards}
        </div>
      </div>
    );
  }
}

export default SharkTank;
