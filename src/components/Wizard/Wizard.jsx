import React ,{Component} from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearState } from '../../ducks/reducer.js';
import Step1 from '../Step1/Step1.jsx';
import Step2 from '../Step2/Step2.jsx';
import Step3 from '../Step3/Step3.jsx';
import './Wizard.css'

class Wizard extends Component {
    
    render() {
        return (
            <div className='Wizard'>
                <div className='button-container'>
                    <p className='title'>ADD NEW LISTING</p>
                    <Link to='/'>
                        <button onClick={this.props.clearState} className="Wizard-button button">Cancel</button>
                    </Link>
                </div>
                <Switch>
                   <Route path='/wizard/step1'component={Step1}/>
                   <Route path='/wizard/step2'component={Step2}/>
                   <Route path='/wizard/step3'component={Step3}/>
                </Switch>

            </div>
        )
    }
}

export default connect(null, { clearState })(Wizard);