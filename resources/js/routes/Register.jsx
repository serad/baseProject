import React, { Component } from "react";

import { Form, Input, Button, Row, Col, Image, Divider } from "antd";
import { registrationService } from "../services/registration.service";
import { CSSTransition } from "react-transition-group";

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 8
        }
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 16
        }
    }
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 16,
            offset: 8
        }
    }
};

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerError: false,
            registerMessage: "No error"
        };
        //this.registerValidator = this.registerValidator.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        this.state.registerError = prevState.registerError;
        this.state.registerMessage = prevState.registerMessage;
    }

    render() {
        const onFinish = values => {
            console.log("Success:", values);
            registrationService.register(values.email, values.password).then(
                response => {
                    if (typeof response.error !== "undefined") {
                        this.setState({
                            registerError: "error",
                            registerMessage: response.error
                        });
                    }
                },
                error => {
                    this.setState({
                        registerError: error,
                        registerMessage: "Error"
                    });
                }
            );
        };

        const onFinishFailed = errorInfo => {
            console.log("Failed:", errorInfo);
        };

        const onChange = () => {
            this.setState({ registerError: false });
        };

        return (
            <div>
                <Row type="flex" justify="center" align="middle">
                    <Col span={12}>
                        <Form
                            {...formItemLayout}
                            name="register"
                            onFinish={onFinish}
                            scrollToFirstError
                        >
                            <Form.Item
                                name="email"
                                label="E-mail"
                                {...(this.state.registerError && {
                                    help: this.state.registerMessage,
                                    validateStatus: "error"
                                })}
                                rules={[
                                    {
                                        type: "email",
                                        message:
                                            "The input is not valid E-mail!"
                                    },
                                    {
                                        required: true,
                                        message: "Please input your E-mail!"
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your password!"
                                    }
                                ]}
                                hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={["password"]}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: "Please confirm your password!"
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (
                                                !value ||
                                                getFieldValue("password") ===
                                                    value
                                            ) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject(
                                                "The two passwords that you entered do not match!"
                                            );
                                        }
                                    })
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    Register
                                </Button>
                            </Form.Item>
                            <div className="ant-col-xs-24 ant-col-xs-offset-0 ant-col-sm-16 ant-col-sm-offset-8">
                                Or <a href="/login">Log in</a>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}
