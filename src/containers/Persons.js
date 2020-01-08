import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import { connect } from 'react-redux';
import * as ActionType from '../store/action';

class Persons extends Component {
    

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Max',
    //         age: Math.floor( Math.random() * 40 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     } );
    // }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAdded} />
                {this.props.per.map(person => (
                    <Person
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeleted(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        per: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        personAdded: (name, age) => dispatch({type: ActionType.PERSONADD, personData: {name, age}}),
        personDeleted: (id) => dispatch({type: ActionType.PERSONDELETE, deleteID: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);