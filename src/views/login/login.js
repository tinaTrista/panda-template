import React from 'react'
import { Radio ,Form, Icon, Input, Button, Checkbox, message} from 'antd'
import {withRouter} from "react-router-dom";
import "./index.css"
import api from "../../axios/index"
import cookie from "../../util/cookie"
const RadioGroup = Radio.Group
const FormItem = Form.Item


/**
 * [Login ]
 * @extends React
 * JavaScript函数中的this不是在函数声明的时候定义的，而是在函数调用（即运行）的时候定义的
 */
class Login extends React.Component {
  //产生验证码
  createCode(e) {
    console.log('ddd', this, e)
    api.post('/cspweb/code/getCode').then((res) => {
      document.getElementById('code').src = 'data:image/png;base64,' + res.data
    })
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          // 请求登录接口 成功之后跳转首页
          // test
          api.post('/react/login').then(res=>{
            if(res.code === '200'){
              cookie.set('token', res.data.token)
              this.props.history.push("/dashboard");
            } else {
              message.error('登录失败')
            }
          })
        }
      });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='center-self' id="login-size">
       <div className="center-self">
         <Form  id="login-form" onSubmit={this.handleSubmit}>
             <FormItem>
               {getFieldDecorator('type', {initialValue: 1,})(
                 <RadioGroup>
                    <Radio value={1}>账号密码登录</Radio>
                    <Radio value={2}>手机动态码登录</Radio>
                </RadioGroup>
               )}
             </FormItem>
              <FormItem>
                {getFieldDecorator('mobile', {rules: [{ required: true, message: 'Please input your mobile!' }],})(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('password', {rules: [{ required: true, message: 'Please input your Password!' }],})(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('picVerifyCode', {rules: [{ required: true, message: 'Please input your varifyCode!' }],})(
                  <div className="login-form-varifyCode">
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="input" placeholder="varifyCode"/>
                    <img id="code" onClick={(e)=>this.createCode(e)} alt="验证码"></img>
                  </div>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {valuePropName: 'checked',initialValue: true,})(
                  <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot" href="">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                <p>Or <a href="">register now!</a></p>
              </FormItem>
         </Form>

      </div>
      </div>
    );
  }
}
export default withRouter(Form.create()(Login));;
