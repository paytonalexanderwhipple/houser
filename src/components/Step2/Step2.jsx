import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInput } from '../../ducks/reducer.js';
import './Step2.css'

class Step2 extends Component {

    render() {
        return (
            <div className='Step'>
                <input placeholder='Image URL' name='img' value={this.props.img} onChange={event => this.props.handleInput(event)}/>
                <Link to='/wizard/step3'>
                    <button className="Step-button-right button">Next Step</button>
                </Link>
                <Link to='/wizard/step1'>
                    <button className="Step-button-left button">Prev Step</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let { img } = state;
    return {
        img,
    }
}

export default connect(mapStateToProps, { handleInput })(Step2);