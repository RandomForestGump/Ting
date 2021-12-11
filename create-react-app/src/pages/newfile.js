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
// import {
//     Chart,
//     BarSeries,
//     Title,
//     ArgumentAxis,
//     ValueAxis,
//     PieSeries
// } from '@devexpress/dx-react-chart-material-ui';
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
// import { Chart, ChartLegend, ChartSeries, ChartSeriesItem, ChartSeriesLabels } from '@progress/kendo-react-charts';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Legend, Tooltip, Bar, PieChart, Pie } from 'recharts';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Bar as Bar1 } from 'react-chartjs-2';

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



const reply_data = [{ poi_name: 'CMO KERALA', reply_sentiment: -0.54 },
{ poi_name: 'Jaime Bonilla Valdez', reply_sentiment: -0.0 },
{ poi_name: 'Felipe Calderón', reply_sentiment: -0.0 },
{ poi_name: 'Bill Gates', reply_sentiment: 0.45 },
{ poi_name: 'Adar Poonawalla', reply_sentiment: 0.35 },
{ poi_name: 'sonu sood', reply_sentiment: 0.31 },
{ poi_name: 'President Biden', reply_sentiment: 0.24 },
{ poi_name: 'Barack Obama', reply_sentiment: 0.29 },
{ poi_name: 'VP Kamala Harris', reply_sentiment: 0.18 },
{ poi_name: 'WHO', reply_sentiment: 0.12 }];


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

const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    }]


const vax_data = [
    {
        name : 'Pfizer',
        Positive : 34,
        Negative : 23,
        Neutral : 21
    },
    {
        name : 'JnJ',
        Positive : 41,
        Negative : 17,
        Neutral : 41

    },
    {
        name : 'Moderna',
        Positive : 38,
        Negative : 24,
        Neutral : 36

    },
    {
        name : 'Covishield',
        Positive : 49,
        Negative : 25,
        Neutral : 25

    },
    {
        name : 'Covaxin',
        Positive : 56,
        Negative : 18,
        Neutral : 24

    }
]

const vaccine_data = {
    labels: [
        "Pfizer",
        "JnJ",
        "Moderna",
        "Covishield",
        "Covaxin"
    ],
    datasets: [
        {
            label: "Positive",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            stack: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [34, 41, 38, 49, 56]
        },

        {
            label: "Negative",
            backgroundColor: "rgba(155,231,91,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            stack: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [23, 17, 24, 25, 18]
        },
        {
            label: "Neutral",
            backgroundColor: "rgba(155,231,91,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            stack: 1,
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
        const options = {
            responsive: true,
            legend: {
                display: false,
            },
            type: 'bar',
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
        return (

            <div style={{ textAlign: "center" }} >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h4" align='left' component="div" sx={{ flexGrow: 4 }}>
                            Ting
          </Typography>

                    </Toolbar>
                </AppBar>

                <Grid container spacing={2}>

                    <Grid item xs={9}>
                        <TableCell style={{ minWidth: 1000 }} align='center'> Overall analysis </TableCell>

                    </Grid>





                    <Grid item xs={10}>
                        <TableCell style={{ minWidth: 800 }} align='center'> Population data </TableCell>
                        <BarChart width={1000} height={250} data={population_data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Keyword" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Sentiment_Score" fill="#8884d8" />
                            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                        </BarChart>

                    </Grid>

                    <Grid item xs={10}>
                        <TableCell style={{ minWidth: 800 }} align='center'> Reply data </TableCell>

                        <LineChart width={1400} height={250} data={reply_data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="5 5" />
                            <XAxis dataKey="poi_name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="poi_name" dataKey="reply_sentiment" stroke="#8884d8" />
                            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                        </LineChart>

                    </Grid>

                    <Grid item xs={5}>
                        <TableCell style={{ minWidth: 400 }} align='center'> Language data </TableCell>
                        <PieChart width={400} height={250}>
                            <Pie data={lang_data} dataKey="percent" nameKey="type" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label />
                            <Tooltip />
                            {/* <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label /> */}
                        </PieChart>

                    </Grid>

                    <Grid item xs={4}>
                        <TableCell style={{ minWidth: 400 }} align='center'> Anti-vaccine data </TableCell>
                        <PieChart width={400} height={250}>
                            <Pie data={antivac_data} dataKey="percent" nameKey="type" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label />
                            <Tooltip />
                            {/* <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label /> */}
                        </PieChart>

                    </Grid>

                    <Grid>
                    <TableCell style={{ minWidth: 800 }} align='center'> Vax data </TableCell>
                        <BarChart width={1000} height={250} data={vax_data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Positive" fill="#8884d8" />
                            <Bar dataKey="Negative" fill="#8884d8" />
                            <Bar dataKey="Neutral" fill="#8884d8" />
                            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                        </BarChart>
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