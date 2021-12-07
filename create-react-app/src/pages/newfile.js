import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import { Input, Label, Col, Row, Button, Container, Navbar, ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
// import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
// import { makeStyles } from "@mui/material/styles";
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

import Paper from '@mui/material/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
    PieSeries
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import Grid from '@mui/material/Grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

// import { TweetBody } from './tweet'
import ReactWordcloud from 'react-wordcloud';
import Box from '@mui/material/Box';
import Button1 from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import MaterialTable from "material-table";

import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
// import { makeStyles } from '@bit/mui-org.material-ui.styles';
import WordCloud from 'react-d3-cloud';

const population_data = [
    { Keyword: 'people', Sentiment_Score: -52.56 },
    { Keyword: 'lockdown', Sentiment_Score: -13.79 },
    { Keyword: 'jab', Sentiment_Score: -2.51 },
    { Keyword: 'age', Sentiment_Score: -0.49 },
    { Keyword: 'mask', Sentiment_Score: 0.3 },
    { Keyword: 'shot', Sentiment_Score: 2.5 },
    { Keyword: 'government', Sentiment_Score: 2.4 },
    { Keyword: 'vaccination', Sentiment_Score: 1.41 },
    { Keyword: 'vaccine', Sentiment_Score: 9.75 }
];



const reply_data = [{ poi_name: 'CMO KERALA #COVID19 CENTRE', reply_sentiment: -0.54 },
{ poi_name: 'Jaime Bonilla Valdez', reply_sentiment: -0.0 },
{ poi_name: 'Felipe Calderón', reply_sentiment: -0.0 },
{ poi_name: 'Bill Gates', reply_sentiment: 0.45 },
{ poi_name: 'Adar Poonawalla', reply_sentiment: 0.35 },
{ poi_name: 'sonu sood', reply_sentiment: 0.31 },
{ poi_name: 'President Biden', reply_sentiment: 0.24 },
{ poi_name: 'Barack Obama', reply_sentiment: 0.29 },
{ poi_name: 'Vice President Kamala Harris', reply_sentiment: 0.18 },
{ poi_name: 'World Health Organization (WHO)', reply_sentiment: 0.12 }];


const lang_data = [
    { type: 'Hindi', percent: 7.9 },
    { type: 'English', percent: 71.6 },
    { type: 'Spanish', percent: 20.3 }
];




const antivac_data = [
    { type: 'USA', percent: 92 },
    { type: 'INDIA', percent: 2 },
    { type: 'MEXICO', percent: 4 }
];

const vaccine_data = {
    Vaccines: [
        "Pfizer",
        "JnJ",
        "Moderna",
        "Covishield",
        "Covaxin",
        "June",
        "July"
    ],
    datasets: [
        {
            label: "Positive",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [34, 41, 38, 49, 56]
        },

        {
            label: "Negative",
            backgroundColor: "rgba(155,231,91,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [23, 17, 24, 25, 18]
        },
        {
            label: "Neutral",
            backgroundColor: "rgba(155,231,91,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [41, 41, 36, 25, 24]
        }
    ]
}
       
     



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
                
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        {/* <Paper>
                            <Chart
                                data={population_data}
                            >
                                <ArgumentAxis />
                                <ValueAxis max={2} />

                                <BarSeries
                                    // valueField="population"
                                    // argumentField="year"
                                    valueField="Keyword"
                                    argumentField="Sentiment_Score"
                                />
                                <Title text="POI graph" />
                                <Animation />
                            </Chart>
                        </Paper> */}
                    </Grid>
                    
                    <Grid item xs={4}>
                        {/* <Item>xs=4</Item> */}
                        hi
                    </Grid>
                    <Grid item xs={4}>
                        {/* <Item>xs=4</Item> */}
                        hi
                    </Grid>
                    <Grid item xs={8}>



                    </Grid>
                </Grid>

                {/* <p className='currency-pay-body'>
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
                        </Row> */}

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