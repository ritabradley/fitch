import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { faStream } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import StreamCreate from '../components/streams/StreamCreate';
import StreamDelete from '../components/streams/StreamDelete';
import StreamEdit from '../components/streams/StreamEdit';
import StreamList from '../components/streams/StreamList';
import StreamShow from '../components/streams/StreamShow';
import Header from '../components/Header';

library.add(faGoogle, faStream);

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
