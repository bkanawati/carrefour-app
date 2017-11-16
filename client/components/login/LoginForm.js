import React from 'react';
import map from 'lodash/map';
import classnames from 'classnames';
import styles from '../../index';
import {Link} from 'react-router';
import styled from 'styled-components';
import { browserHistory } from 'react-router';


const FormTitle = styled.div`
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 5px;
    text-align: center;
`

const FormSubTitle = styled.div`
    font-size: 15px;
    margin-bottom: 40px;
    text-align: center;
`
const Div = styled.div `
    border: 3px solid #e6e6e6;
    padding: 20px 40px;
    margin: 0 auto;
    width: 400px; 
    color:#767677;
`
const ExtraOpt = styled.div`
    display: inline;
`
const KeepLog = styled.div`
    display: inline-block;
    width: 50%;
    margin-bottom: 15px;
`
const ForgotPass = styled.div`
    display: inline-block;
    width: 50%;
    padding-left: 40px;
    margin-bottom: 15px;
`

const Button = styled.button`
    width: 100%;
`
const Ads = styled.div`
    display: inline-block;
    width: 30%;
    margin-bottom: 10px;
    padding: 100px;
    color:#767677;
`
const NavBar = styled.div`
    display: inline-block;
    margin: 0 auto;
`
const Image = styled.div`
    display: inline;
    margin: 0 auto;
`

const SearchBar = styled.div`
    display: inline-block;
    margin: 0 auto;
    padding-left: 600px;
`

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',

      isUserError: false,
      isPpassError: false,
      

      errors: {},
      isLoading: false,
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
	  
    e.preventDefault();
    console.log("here");
    console.log(this.state);
    

    if (this.state.username == "") {

      this.setState({ isUserError: true });
    }

    else if (this.state.password == "") {

      this.setState({ isPpassError: true });
    }

    else {
      console.log('logged in');

    }



	this.setState({ errors: {},isLoading: true });
	// , isLoading: true
    this.props.userSignupRequest(this.state).then(
      () => {},
      ({ data }) => this.setState({ errors: data , isLoading: false})
	//, isLoading: false
  
	 );
  }


  render() {
    
        var style = {
          color: 'red',
        };
    
        const { errors } = this.state;
      return (
        <div>
          <div>
          <NavBar>
            <Image>
              <img width="300" src="http://www.najmlifestyle.com/wp-content/uploads/2017/04/Carrefour_500x500-500x481.png"/>
            </Image>
            <SearchBar>
              <form>
                <input  type="search" placeholder="Search" />
              </form>
            </SearchBar>
          </NavBar>
          </div>
          <Div>
            <form onSubmit={this.onSubmit} align="center">
              <FormTitle>Sign In Now</FormTitle>
              <FormSubTitle>Unlock awesome features!</FormSubTitle>
              <div className={`form-group`} style={this.state.isUserError ? style : null}>
                <label className="control-label">Username</label>
                <input
                    value={this.state.username}
                    onChange={this.onChange}
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder={this.state.isUserError ? "Required" : "Username"}
                />
                {errors.username && <span className="help-block">{errors.username}</span>}
              </div>
              <div className={`form-group`} style={this.state.isPpassError ? style : null}>
                <label className="control-label">Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder={this.state.isPpassError ? "Required" : "Password"}
                    />
                {errors.password && <span className="help-block">{errors.password}</span>}
              </div>
              <ExtraOpt>
                <KeepLog class='first'>
                    <input id="keep-me-logged-in" type="checkbox" />
                      <span> Keep me logged in</span>
                </KeepLog>
                <ForgotPass class='second'><Link href="">Forgot Password?</Link> </ForgotPass>
              </ExtraOpt>
              <div className="form-group">
                <Button onClick={this.onSubmit} className="btn btn-primary btn-lg">
                  <span>SIGN IN</span>
                </Button>
              </div>
            </form>
          </Div>
          <div>
            <Ads> 
                <div>
                <img width="250" src="https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsIjIwMTcvMDIvMDkvMDYvNTUvMzYvOTU3LzEyNzE4MDkzXzExODAwMjYwMjg3MTQ1NDFfMzg5NDQ1MzI3NzMyNDE3OTMyNV9uLnBuZyJdLFsicCIsInRodW1iIiwiNDAweDMwMFx1MDAzZSJdXQ" alt="Carrefour Logo" />
                </div>
                <h>iPhone 6 Black </h><br/>
                <h><strong>AED 2000</strong></h>
            </Ads>
            <Ads> 
                <div>
                <img width="250" src="https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsIjIwMTcvMDIvMDkvMDYvNTUvMzYvOTU3LzEyNzE4MDkzXzExODAwMjYwMjg3MTQ1NDFfMzg5NDQ1MzI3NzMyNDE3OTMyNV9uLnBuZyJdLFsicCIsInRodW1iIiwiNDAweDMwMFx1MDAzZSJdXQ" alt="Carrefour Logo" />
                </div>
                <h>iPhone 7 Black </h><br/>
                <h><strong>AED 2000</strong></h>
            </Ads>
            <Ads> 
                <div>
                <img width="250" src="https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsIjIwMTcvMDIvMDkvMDYvNTUvMzYvOTU3LzEyNzE4MDkzXzExODAwMjYwMjg3MTQ1NDFfMzg5NDQ1MzI3NzMyNDE3OTMyNV9uLnBuZyJdLFsicCIsInRodW1iIiwiNDAweDMwMFx1MDAzZSJdXQ" alt="Carrefour Logo" />
                </div>
                <h>iPhone 8 Black </h><br/>
                <h><strong>AED 3000</strong></h>
            </Ads>
        </div>
      </div>

    );
  }
}


LoginForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
  }
  
  
  export default LoginForm;
  