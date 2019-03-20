import React from 'react';

import Post from './Post';

import Comment from './Comment';

export default class App extends React.Component {
    render() {
        return (
            <div>
            <h1>Hello World</h1>
            <Post title="Learning ReactJS" />
            <Post title="ReactJS is nice" />
            <Post title="Learn more soon"/>
            </div>
        );
    }
}