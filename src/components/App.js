import React, {Component} from 'react';
import PageTemplate from './PageTemplate';
import TodoInputContainer from '../Containers/TodoInputContainer';
import TodoListContainer from '../Containers/TodoListContainer';

class App extends Component{

    render(){
        return(
            <PageTemplate>
                <TodoInputContainer/>
                <TodoListContainer/>
            </PageTemplate>
        );
    }
}

export default App;