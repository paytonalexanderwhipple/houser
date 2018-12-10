import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
import House from '../House/House.jsx';
import axios from 'axios';
import './Dashboard.css'

class Dashboard extends Component {
    constructor() {
        super()
        
        this.state = {
            houses: [],
        }
    }

    componentDidMount = () => {
        this.getHouses()
    }

    getHouses = () => {
        axios.get('/api/houses')
            .then(res => {
                this.setState({houses: res.data})
            }).catch(error => alert(`Dashboard.getHouses ${error}`))
    }

    deleteHouse = (house_id) => {
        axios.delete(`/api/houses/${house_id}`)
            .then(() => this.getHouses())
    }

    render() {

        let houses = this.state.houses.map((house, i) => <House deleteHouse={this.deleteHouse} key={i} house={house}/>)

        return (
            <div className='Dashboard'>
                <div className='button-container'>
                    <h1 className='title'>Dashboard</h1>
                    <Link to='/wizard/step1'>
                        <button className="Dashboard-button button">Add New Property</button>
                    </Link>
                </div>
                <hr />
                {houses}
            </div>
        )
    }
}

export default Dashboard;