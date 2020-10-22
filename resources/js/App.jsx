import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { Layout } from "antd";

import { authenticationService } from "./services/authentication.service";

const Home = lazy(() => import("./routes/Home"));
const Register = lazy(() => import("./routes/Register"));
const Login = lazy(() => import("./routes/Login"));
const Admin = lazy(() => import("./routes/Admin"));
const Section1 = lazy(() => import("./routes/Section1"));
const Section2 = lazy(() => import("./routes/Section2"));

const { Header, Content, Footer } = Layout;

const loginPath = "/login";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x =>
            this.setState({ currentUser: x })
        );
    }

    logout() {
        authenticationService.logout();
        //history.push('/login');
    }

    render() {
        return (
            <Router>
                <Layout className="layout">
                    <Header style={{ background: "#fff" }}>
                        <div className="logo" />
                        <Navbar user={this.state.currentUser} logout={this.logout} />
                    </Header>
                    <Content style={{ padding: "0 50px" }}>
                        <div className="site-layout-content">
                            <Suspense fallback={<div>Loading...</div>}>
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/section1" component={Section1} />
                                    <Route path="/section2" component={Section2} />
                                    <Route path="/login" component={Login} />
                                    <Route
                                        path="/register"
                                        component={Register}
                                    />
                                    <ProtectedRoute
                                        path="/admin"
                                        redirectTo={loginPath}
                                        component={Admin}
                                    />
                                </Switch>
                            </Suspense>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Router>
        );
    }
}
