import './SharkTank.scss';
import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    livingStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    return (
      <div id='sharkTank'>
        <h3>Shark Tank</h3>
        <button className='btn btn-outline-light'>SHARK ATTACK!</button>
      </div>
    );
  }
}

export default SharkTank;
