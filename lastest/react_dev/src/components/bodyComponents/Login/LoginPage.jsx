import React from "react";
import {browserHistory} from "react-router";
import Bg from "../../../imgs/regesit_bg.jpg";
import {Input, Icon, Button, Form} from "antd";
const FormItem = Form.Item;
class LoginPage extends React.Component {
   login() {

        this.props.form.validateFields(function (err, vals) {
            if (!err) {
                //vals 为表单的值 发送求验证
                browserHistory.push(`/LOGIN/SportType`);
            }
        })
        // var tar=this.props.location.query.to;
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (<div>
            <div style={{
                width: "100%",
                height: "540px",
                backgroundImage: "url(" + Bg + ")",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div style={{
                    padding: "90px 0 30px 0",
                    textAlign: "center",
                    margin: "0px auto",
                    color: "#FFFFFF",
                    fontSize: "26px"
                }}>
                    <div>顺义区学生活动管理中心</div>
                    <div style={{fontSize: "14px"}}>Shunyi District student activity management center</div>
                </div>
                <div style={{
                    padding: "45px 45px 0px 45px",
                    width: "372px",
                    height: "268px",
                    backgroundColor: "#FFFFFF",
                    margin: "0 auto",
                    borderRadius: "10px"
                }}>
                    <div style={{height: 125}}>

                        <Form>
                            <div style={{marginBottom: "7px"}}>
                                <FormItem>
                                    {getFieldDecorator("username", {rules: [{required: true, message: '请输入账号!'}]})(
                                        <Input
                                            size="large"
                                            onPressEnter={this.login.bind(this)}
                                            placeholder="请输入账号"
                                            prefix={<Icon type="user"/>}
                                        />)}
                                </FormItem>


                            </div>
                            <div style={{marginBottom: "7px"}}>

                                <FormItem>
                                    {getFieldDecorator("password", {rules: [{required: true, message: '请输入密码!'}]})(
                                        <Input
                                            onPressEnter={this.login.bind(this)}
                                            size="large"
                                            placeholder="请输入密码"
                                            prefix={<Icon type="lock"/>}
                                        />)}
                                </FormItem>
                            </div>
                        </Form>
                    </div>
                    <div style={{marginBottom: "20px"}}><Button onClick={this.login.bind(this)}
                                                                style={{width: "100%", height: "40px"}} type="primary"
                                                                size="large">登陆</Button></div>
                    <div style={{textAlign: "right"}}>
                        <span style={{cursor: "pointer"}}>忘记密码？ </span> | <span
                        style={{cursor: "pointer"}}> 注册新账号</span>
                    </div>
                </div>
            </div>
            <div style={{textAlign: "center", fontSize: "12px", color: "#828282", padding: "37px 0 61px 0"}}>
                <span>承办单位 : &nbsp;北京学生活动管理中心</span> <span style={{marginLeft: "54px"}}>协办单位 : &nbsp;区教委、区体育局</span>
            </div>
        </div>);

    }
}
const loin = Form.create()(LoginPage);
export default loin;