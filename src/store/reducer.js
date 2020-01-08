import * as ActionType from './action';
const initialState = {
	persons: []
}
const reducer = (state = initialState, action) => {
	switch(action.type) {
		case ActionType.PERSONADD:
			const newPerson = {
	            id: Math.random(), // not really unique but good enough here!
	            name: action.personData.name,
	            age: action.personData.age
	        }
	        console.log(newPerson);
	        return {
	        	...state,
	        	persons: state.persons.concat(newPerson)
	        }
		case ActionType.PERSONDELETE:
			return {
				...state,
				persons: state.persons.filter(person => person.id !== action.deleteID)
			}
		default:
			return state;
	}
}

export default reducer;