import './LivingStudent.scss';
import React from 'react';

import studentShape from '../../helpers/propz/studentShape';

class LivingStudents extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const aStudent = this.props.student;
    return (
      <div className='card livingCard col-3'>
        <img src={aStudent.imgUrl} className='card-img-top studentImg' alt={aStudent.firstName} />
        <div className='card-body'>
          <h5 className='car-title'>{aStudent.firstName} {aStudent.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default LivingStudents;
