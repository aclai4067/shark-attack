import './GraveStone.scss';
import React from 'react';
import flowers from './assets/images/floralRelief.jpg';

import studentShape from '../../helpers/propz/studentShape';

class GraveStone extends React.Component {
  static propTypes = {
    deceased: studentShape.studentShape,
  }

  render() {
    const departed = this.props.deceased;

    return (
      <div className='card grave col-2 m-2 p-0'>
        <div className='card-body p-0'>
          <img className='card-img-top graveImg' src={flowers} alt='floral relief sculpture' />
          <h5 className='card-title pt-5 pb-5'>{departed.firstName} {departed.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default GraveStone;
