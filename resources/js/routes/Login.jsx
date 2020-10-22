import React, { Component } from "react";

import { Form, Input, Button, Checkbox, Row, Col, Image, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { authenticationService } from "../services/authentication.service";
import { CSSTransition } from "react-transition-group";

const layout = {
    labelCol: {
        span: 12
    },
    wrapperCol: {
        span: 24
    }
};

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginError: false,
            loginErrorMessage: false
        };
        // redirect to home if already logged in
        if (authenticationService.currentUserValue) {
            this.props.history.push("/");
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        this.state.loginError = prevState.loginError;
        this.state.loginErrorMessage = prevState.loginErrorMessage;
    }

    handleSubmit(event) {
        alert("A name was submitted: " + this.state.value);
        event.preventDefault();
    }

    render() {
        const onFinish = values => {
            console.log("Success:", values);
            authenticationService.login(values.email, values.password).then(
                user => {
                    const { from } = this.props.location.state || {
                        from: { pathname: "/" }
                    };
                    this.props.history.push(from);
                },
                error => {
                    this.setState({
                        loginError: true,
                        loginErrorMessage: "Incorrect user or password"
                    });
                }
            );
        };

        const onFinishFailed = errorInfo => {
            console.log("Failed:", errorInfo);
        };

        const onChange = () => {
            this.setState({ loginFail: false });
        };

        return (
            <div>
                <Row type="flex" justify="center" align="middle">
                    <Image width={512} src="/img/_ves.jpg" />
                </Row>
                <Divider />
                <Row type="flex" justify="center" align="middle">
                    <Col span={6}>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{
                                remember: true
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            onChange={onChange}
                        >
                            <Form.Item
                                name="email"
                                {...(this.state.loginError && {
                                    help: this.state.loginErrorMessage,
                                    validateStatus: "error"
                                })}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your email!"
                                    }
                                ]}
                            >
                                <Input
                                    prefix={
                                        <UserOutlined className="site-form-item-icon" />
                                    }
                                    placeholder="email"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Password!"
                                    }
                                ]}
                            >
                                <Input
                                    prefix={
                                        <LockOutlined className="site-form-item-icon" />
                                    }
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    noStyle
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="">
                                    Forgot password
                                </a>
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                >
                                    Log in
                                </Button>
                                Or <a href="/register">register now!</a>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}
