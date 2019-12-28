import './GraveYard.scss';
import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';
import GraveStone from '../GraveStone/GraveStone';

class GraveYard extends React.Component {
  static propTypes = {
    departedStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const deceasedStudents = this.props.departedStudents;

    const graveCards = deceasedStudents.map((student) => <GraveStone key={student.id} deceased={student} />);

    return (
      <div id='graveyard' className="col-6">
        <div className='departedStudents row d-flex flex-wrap justify-content-around'>
          {graveCards}
        </div>
      </div>
    );
  }
}

export default GraveYard;
