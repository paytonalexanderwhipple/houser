import React ,{Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInput } from '../../ducks/reducer.js';

class Step3 extends Component {
    

    submitHome = () => {
        let { property_name, address, city, state, zip, monthly_mortgage, desired_rent, img } = this.props
        axios.post('/api/houses', { property_name, address, city, state, zip, monthly_mortgage, desired_rent, img })
            .then(res => this.props.history.push('/'))
    }

    render() {
        return (
            <div className='Step'>
                <input placeholder='Monthly Mortgage' name='monthly_mortgage' value={this.props.monthly_mortgage} onChange={event => this.props.handleInput(event)}/>
                <input placeholder='Desired Rent' name='desired_rent' value={this.props.desired_rent} onChange={event => this.props.handleInput(event)}/>
                <button className='Submit Step-button-right button' onClick={this.submitHome}>Submit</button>
                <Link to='/wizard/step2'>
                    <button className='Step-button-left button'>Prev Step</button>              
                </Link>  
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps, { handleInput })(Step3);