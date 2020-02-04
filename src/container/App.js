import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StreamCreate from '../components/streams/StreamCreate';
import StreamDelete from '../components/streams/StreamDelete';
import StreamEdit from '../components/streams/StreamEdit';
import StreamList from '../components/streams/StreamList';
import StreamShow from '../components/streams/StreamShow';
import Header from '../components/Header';

class App extends Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Header />
                    <Switch>
                        <Route exact path='/'>
                            <StreamList />
                        </Route>
                        <Route path='/streams/show'>
                            <StreamShow />
                        </Route>
                        <Route path='/streams/new'>
                            <StreamCreate />
                        </Route>
                        <Route path='/streams/edit'>
                            <StreamEdit />
                        </Route>
                        <Route path='/streams/delete'>
                            <StreamDelete />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
