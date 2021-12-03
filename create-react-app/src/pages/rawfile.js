import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import { Input, Label, Col, Row, Button, Container } from 'reactstrap';
import { Component } from "react";
// import randomDataService from "../Services/randomData/randomDataService";
import RandomDataService from "../Services/randomData/randomDataService"
// import View from "../@dgn-src-ui/core/View"
// import { redirectToSrci } from "../../utility/utility";
// import {
//     dcfActionCode
// } from "../../redux-store/actions/Action";
// import { store } from "../../redux-store/store";
// import { useDispatch, useSelector } from "react-redux";
// import { DCFACTIONCODE } from "../../utility/constants/utilityConstants";


class rawfile extends Component {

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
        this.RandomDataService = new RandomDataService()
        // this.forgotPasswordService = new ForgotPasswordService(this);
        // this.binder = new Binder(this);
        // this.onGo = this.onGo.bind(this)
        // const validationRules = {
        //   UserIdentity: 'nonEmptyLength'
        // };
        // this.validator = new Validator(validationRules);
    }


    onUserNameChange = (event) => {
        console.log(event,"<----on change")
        this.setState({
            UserIdentity: event.target.value
        })
    }

    redirectToCreate = () => {
        this.props.history.push(`/newfile`);
    }

    async getRandomData(fields) {
        // const merchantId = this.props.usersData ? this.props.usersData.user.MerchantId : null
        try {
          const randomData = await this.RandomDataService.getRandomData(fields);
        } catch (err) {
          console.error("Damn!!!!! API breaked");
        }
      };

    render() {
        // console.log(this.props,this.event,"<----")
        console.log(this.state.UserIdentity,"<---- value")
        return (
            // <View
            //     screen="rawfile"
            // />
            // <Alert>Hi there</Alert>

            //      <Container maxWidth="sm">
            //   <Box sx={{ my: 4 }}>
            //     <Typography variant="h4" component="h1" gutterBottom>
            //       Create React App v5 example
            //     </Typography>
            //     <ProTip />
            //     <Copyright />

            //   </Box>
            // </Container>

            <div style={{ textAlign: "center" }} >
                <p className='currency-pay-body'>
                    //   Please Enter your raw name
      </p>
                <Row>
                    <Col xs="4">
                        <Input
                            type='UserIdentity'
                            id='UserIdentity'
                            name='UserIdentity'
                            className='floating-input'
                            value={this.state.UserIdentity}
                            // placeholder=' '
                            onChange={this.onUserNameChange}
                        />


                        <Label >raw name</Label>
                    </Col>
                </Row>

                <Row>

                    <Button
                        className='cancel-btn'
                        //   style={{ fontSize: '14px', paddingTop: '15%' }}
                        id='back'
                        onClick={() => this.redirectToCreate()}
                    >
                        <i className='fa fa-chevron-left' /> Back to newfile
                </Button>

                </Row>

            </div>


        );
    }
};

export default rawfile;