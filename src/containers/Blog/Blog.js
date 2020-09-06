import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Posts/Posts';
//import NewPost from '../NewPost/NewPost';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import asyncComponent from "../../hoc/asyncComponent";

const AsyncComponent = asyncComponent(

    () => {

        return import('../NewPost/NewPost');
    }
)

class Blog extends Component {

    state = {
        auth : false
    }

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                            <NavLink to="/posts" 
                            exact
                            activeStyle={{
                                color: "red",
                                textDecoration: "underline"
                            }}>Posts</NavLink>
                            </li>

                            <li>
                                <NavLink to= {{

                                pathname : "/new-post",
                                hash : "#submit",
                                search : "?quick-submit=true"

                            }}>New Post</NavLink>
                            </li>

                        </ul>
                    </nav>
                </header>

                {/*<Route path="/" exact render = {() => <h1>Home</h1>}/>*/}

                <Switch>
                {this.state.auth ? <Route path="/new-post" component={AsyncComponent}/> : null}
                <Route path="/posts" component={Posts}/>
                <Route render = {() => <h1>Page not found</h1>} />
                {/* <Redirect from="/" to="/posts"/> */}
                {/*<Route path="/" component={Posts}/>*/}
                </Switch>

            </div>
        );
    }
}

export default Blog;