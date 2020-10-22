import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import {
    HomeOutlined,
    AppstoreOutlined,
    LogoutOutlined,
    LoginOutlined,
    DingdingOutlined
} from "@ant-design/icons";
import PropTypes from "prop-types";

class Navbar extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired,
        user: PropTypes.oneOfType([
            PropTypes.object.isRequired,
            PropTypes.oneOf([null]).isRequired,
          ])
    };

    render() {
        const { location, logout } = this.props;
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[location.pathname]}
                mode="horizontal"
                style={{float: 'right'}}
            >
                <Menu.Item key="/" icon={<HomeOutlined />}>
                    <Link to="/"> Home </Link>
                </Menu.Item>
                <Menu.Item key="/section1" icon={<DingdingOutlined />}>
                    <Link to="/section1"> Section1 </Link>
                </Menu.Item>
                <Menu.Item key="/section2" icon={<AppstoreOutlined />}>
                    <Link to="/section2"> Section2 </Link>
                </Menu.Item>
                {this.props.user ? (
                    <React.Fragment>
                        <Menu.Item key="/admin" icon={<LogoutOutlined />}>
                            <Link to="/admin"> Admin </Link>
                        </Menu.Item>
                        <Menu.Item key="/logout" icon={<LogoutOutlined />}>
                            <a onClick={logout} className="nav-item nav-link">
                                Logout
                            </a>
                        </Menu.Item>
                    </React.Fragment>
                ) : (
                    <Menu.Item key="/login" icon={<LoginOutlined />}>
                        <Link to="/login"> Login </Link>
                    </Menu.Item>
                )}
            </Menu>
        );
    }
}

export default withRouter(Navbar);
