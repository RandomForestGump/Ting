import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import { Input, Label, Col, Row, Button, Container } from 'reactstrap';
import { Component } from "react";
// import View from "../@dgn-src-ui/core/View"
// import { redirectToSrci } from "../../utility/utility";
// import {
//     dcfActionCode
// } from "../../redux-store/actions/Action";
// import { store } from "../../redux-store/store";
// import { useDispatch, useSelector } from "react-redux";
// import { DCFACTIONCODE } from "../../utility/constants/utilityConstants";


class newfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //   NewPassword: '',
            //   flag: false,
            //   Answer: '',
            //   QuestionId: '',
            //   showQuetionBox: false,
            UserIdentity: '',
            //   errors: {},
            //   isLoader: false
        }
        // this.forgotPasswordService = new ForgotPasswordService(this);
        // this.binder = new Binder(this);
        // this.onGo = this.onGo.bind(this)
        // const validationRules = {
        //   UserIdentity: 'nonEmptyLength'
        // };
        // this.validator = new Validator(validationRules);
    }


    onUserNameChange = (event) => {
        this.setState({
            UserIdentity: event.target.value
        })
    }

    redirectToCreate = () => {
        this.props.history.push(`/rawfile`);
    }

    render() {
        return (
            <div style={{ textAlign: "center" }} >
                <p className='currency-pay-body'>
                    //  Dont enter anything 
      </p>
                <Row>
                    <Col>
                        <Input
                            type='UserIdentity'
                            id='UserIdentity'
                            name='UserIdentity'
                            className='floating-input'
                            //   value={this.state.UserIdentity}
                            placeholder=' '
                            onChange={this.onUserNameChange}
                        />


                        <Label >Just dont enter</Label>
                    </Col>
                </Row>

                <Row>

                    <Button
                        className='cancel-btn'
                        //   style={{ fontSize: '14px', paddingTop: '15%' }}
                        id='back'
                        onClick={() => this.redirectToCreate()}
                    >
                        <i className='fa fa-chevron-left' /> back to rawfile
                </Button>

                </Row>

            </div>


        );
    }
};

export default newfile;