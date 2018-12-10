import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInput } from '../../ducks/reducer.js';
import './Step1.css'

class Step1 extends Component {
    
    render() {
        return (
            <div className='Step'>
                <input placeholder='Property Name' name='property_name' value={this.props.property_name} onChange={event => this.props.handleInput(event)}/>
                <input placeholder='Address' name='address' value={this.props.address} onChange={event => this.props.handleInput(event)}/>
                <input placeholder='City' name='city' value={this.props.city} onChange={event => this.props.handleInput(event)}/>
                <input placeholder='State' name='state_name' value={this.props.state_name} onChange={event => this.props.handleInput(event)}/>
                <input placeholder='Zip' name='zip' value={this.props.zip} onChange={event => this.props.handleInput(event)}/>
                <Link to='/wizard/step2'>
                    <button className="Step1-button button">Next Step</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let { property_name, address, city, state_name, zip} = state
    return {
        property_name,
        address, 
        city,
        state_name,
        zip,
    }
}

export default connect(mapStateToProps, { handleInput })(Step1);