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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

// const useStyles = makeStyles(theme => ({
//     button: {
//       display: 'block',
//       marginTop: theme.spacing(2),
//     },
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//   }));

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const words = [
    {
        text: 'told',
        value: 64,
    },
    {
        text: 'mistake',
        value: 11,
    },
    {
        text: 'thought',
        value: 16,
    },
    {
        text: 'bad',
        value: 17,
    },
]

// const classes = useStyles();


const chart_Data = [
    { poi_name: '1950', percent: 2.525 },
    { poi_name: '1960', percent: 3.018 },
    { poi_name: '1970', percent: 3.682 },
    { poi_name: '1980', percent: 4.440 },
    { poi_name: '1990', percent: 5.310 },
    { poi_name: '2000', percent: 6.127 },
    { poi_name: '2010', percent: 6.930 },
];

const pie_data = [
    { type: 'Asia', percent: 4119626293 },
    { type: 'Africa', percent: 1012956064 },
    { type: 'Northern America', percent: 344124520 },
    { type: 'Latin America and the Caribbean', percent: 590946440 },
    { type: 'Europe', percent: 727082222 },
    { type: 'Oceania', percent: 35104756 },
];


const style = {
    'word-break': 'break-all',
    'align-items': 'center'
};

class rawfile extends Component {

    constructor(props) {
        super(props);
        this.state = {

            query_term: '',
            getmydata: '',
            chart_Data,
            poi_data: '',
            pie_data,
            tweet_type: '',
            tweet_data: [],
            poi: '',
            getmyPoiData: '',
            keywords: '',
            extreme: ''

        }
        this.RandomDataService = new RandomDataService()
        this.toggle = this.toggle.bind(this);
        // this.forgotPasswordService = new ForgotPasswordService(this);
        // this.binder = new Binder(this);
        // this.onGo = this.onGo.bind(this)
        // const validationRules = {
        //   query_term: 'nonEmptyLength'
        // };
        // this.validator = new Validator(validationRules);
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    //  chart_Data_1 = [
    //     { year: '1950', population: 2.525 },
    //     { year: '1960', population: 3.018 },
    //     { year: '1970', population: 3.682 },
    //     { year: '1980', population: 4.440 },
    //     { year: '1990', population: 5.310 },
    //     { year: '2000', population: 6.127 },
    //     { year: '2010', population: 6.930 },
    //   ];

    //   async componentDidMount() {

    //     // let result = await this.NotificationService.getNotificationCount();
    //     // if (result && result.success) {
    //     //   this.props.setNotificationCount(result.data);
    //     // }

    //     try {
    //         const randomData_1 = await this.RandomDataService.getRandomData(data.query_term);
    //         this.setState({
    //             // getmydata : randomData,
    //             poi_data : randomData_1.data.body.poi_dist
    //         })
    //     } catch (err) {
    //         console.error("Damn!!!!! API breaked");
    //     }
    //   }


    onUserNameChange = (event) => {
        console.log(event, "<----on change")
        this.setState({
            query_term: event.target.value
        })
    }

    onPoiNameChange = (event) => {
        debugger
        console.log(event, "<----on poi change")
        this.setState({
            poi: event.target.value
        })
        // this.getPoiData()
    }

    redirectToCreate = () => {
        this.props.history.push(`/newfile`);
    }

    //  useStyles = makeStyles({
    //     container: {
    //       maxHeight: 200
    //     }
    //   });

    async getPoiData() {
        debugger
        // const merchantId = this.props.usersData ? this.props.usersData.user.MerchantId : null
        const data = {
            "query": this.state.query_term,
            "poi_name": this.state.poi
        };
        try {
            const poiData = await this.RandomDataService.getPoiData(data);
            this.setState({
                getmyPoiData: poiData,
                // poi_data: randomData.data.body.poi_dist,
                // tweet_type: randomData.data.body.tweet_type,
                // tweet_data: [
                //     { tweet_1: randomData.data.body.documents[0].tweet_text },
                //     ...this.state.tweet_data]

            })
        } catch (err) {
            console.error("Damn!!!!! API breaked");
        }
    };


    async getRandomData() {
        // debugger
        // const merchantId = this.props.usersData ? this.props.usersData.user.MerchantId : null
        const data = {
            "query_term": this.state.query_term,
        };
        try {
            const randomData = await this.RandomDataService.getRandomData(data.query_term);
            this.setState({
                getmydata: randomData,
                poi_data: randomData.data.body.poi_dist,
                tweet_type: randomData.data.body.tweet_type,
                keywords: randomData.data.body.keywords,
                extreme: randomData.data.body.extreme
                // tweet_data: [
                //     { tweet_1: randomData.data.body.documents[0].tweet_text },
                //     ...this.state.tweet_data]

            })
        } catch (err) {
            console.error("Damn!!!!! API breaked");
        }
    };

    renderTweetList = () => {
        return this.state.getmydata &&
            this.state.getmydata.data &&
            this.state.getmydata.data.body &&
            this.state.getmydata.data.body.documents.map((item, index) => {
                return (
                    // <tr key={index} >
                    //     <td style={style}>
                    //         {item.tweet_text ? item.tweet_text : '_'}
                    //     </td>
                    // </tr>
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        <TableCell key={item.tweet_text} > {item.tweet_text ? item.tweet_text : '_'} </TableCell>
                    </TableRow>
                );
            })
    }

    renderPoiTweetList = () => {
        return this.state.getmyPoiData &&
            this.state.getmyPoiData.data &&
            // this.state.getmyPoiData.data.body &&
            this.state.getmyPoiData.data.body.map((item, index) => {
                return (
                    // <tr key={index} >
                    //     <td style={style}>
                    //         {item.tweet_text ? item.tweet_text : '_'}
                    //     </td>
                    // </tr>
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        <TableCell key={item.tweet_text} > {item.tweet_text ? item.tweet_text : '_'} </TableCell>
                    </TableRow>
                );
            })
    }

    renderExtreame = () => {
        debugger
        return this.state.extreme && this.state.extreme.map((item, index) => {
                return (
                    // <tr key={index} >
                    //     <td style={style}>
                    //         {item.tweet_text ? item.tweet_text : '_'}
                    //     </td>
                    // </tr>
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        <TableCell key={item} > {item ? item : '_'} </TableCell>
                    </TableRow>
                );
            })
    }

    render() {
        // console.log(this.props,this.event,"<----")
        console.log(this.state.query_term, "<---- value")
        console.log(this.state.poi, "<----poi value")
        console.log(this.state.getmydata, "<---- value")

        console.log(chart_Data, "<---- chart_Data")
        console.log(this.state.poi_data, "<---- poi_Data")

        console.log(this.state.pie_data, "<---- pie type_Data")
        console.log(this.state.tweet_type, "<---- type_Data")

        console.log(this.state.tweet_data, "<---- tweet_Data")
        // console.log(this.state.getmydata.data.body.poi_dist, "<---- chart_Data")

        // const chartData = this.state.getmydata &&
        // this.state.getmydata.data &&
        // this.state.getmydata.data.body &&
        //  this.state.getmydata.data.body.poi_dist ? this.state.poi_data : chart_Data 

        //  console.log(chartData, "<---- chartData")
        // const { chart_Data: chartData } = this.state;

        // const chartData = this.state.chart_Data
        const chartData = this.state.poi_data ? this.state.poi_data : this.state.chart_Data
        const chartData_1 = this.state.tweet_type ? this.state.tweet_type : this.state.pie_data
        console.log(chartData_1, "<---- chart_Data")
        const tweet = this.state.tweet_data ? this.state.tweet_data : null
        const keywords = this.state.keywords ? this.state.keywords : null
        console.log(words, "<---- words")
        console.log(keywords, "<---- keywords")
        const extreme = this.state.extreme ? this.state.extreme : null
        console.log(extreme, "<---- extreme")
        // const tweet = this.state.getmydata.data.body.documents[0].tweet_text ? this.state.getmydata.data.body.documents.tweet_text : null
        return (

            <div style={{ textAlign: "center" }} >



                <Grid container spacing={2}>

                    <Grid item xs={10}>

                        <p className='currency-pay-body'>
                            //   Please Enter your search
      </p>
                        <Row>
                            <Col xs="4">
                                <TextField
                                    variant="outlined"
                                    label="Search tweet"
                                    // type='query_term'
                                    id='query_term'
                                    name='query_term'
                                    // className='floating-input'
                                    value={this.state.query_term}
                                    // placeholder=' '
                                    onChange={this.onUserNameChange}
                                />


                                {/* <Label >raw name</Label> */}
                            </Col>
                        </Row>

                        <Row>

                            <Button1
                                className='cancel-btn'
                                //   style={{ fontSize: '14px', paddingTop: '15%' }}
                                id='back'
                                onClick={() => this.redirectToCreate()}
                            >
                                <i className='fa fa-chevron-left' /> Back to newfile
                </Button1>

                            <Button1
                                // className='cancel-btn'
                                // variant="contained"
                                //   style={{ fontSize: '14px', paddingTop: '15%' }}
                                id='getdata'
                                onClick={() => this.getRandomData()}
                            >
                                <i className='fa fa-chevron-left' /> Enter
                </Button1>

                        </Row>

                    </Grid>

                    <Grid item xs={3}>


                        <TableCell style={{ minWidth: 450 }} align='center'> filter </TableCell>
                        {/* <Container>
                        <ButtonDropdown isOpen={false} toggle={this.toggle}>
                            <DropdownToggle>1</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={this.onPoiNameChange}>Narendra Modi</DropdownItem>
                                <DropdownItem onClick={this.onPoiNameChange}>Contact</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                        </Container> */}
                        <TableRow>
                            <FormControl variant="standard" sx={{ m: 1, width: 250 }}>
                                <InputLabel id="demo-controlled-open-select-label">POI</InputLabel>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    // open={true}
                                    // onClose={handleClose}
                                    // onOpen={this.getPoiData}
                                    // onClick={this.getPoiData}
                                    value={this.state.poi}
                                    onChange={this.onPoiNameChange}
                                >
                                    {/* <MenuItem value="Narendra Modi">
                                    <em>None</em>
                                </MenuItem> */}
                                    <MenuItem value={'Narendra Modi'}>Narendra Modi</MenuItem>
                                    <MenuItem value={'Kamala Harris'}>Kamala Harris</MenuItem>
                                    <MenuItem value={'PMO India'}>PMO India</MenuItem>

                                </Select>
                            </FormControl>
                        </TableRow>

                        <TableRow>
                            <FormControl variant="standard" sx={{ m: 1, width: 250 }}>
                                <InputLabel id="demo-controlled-open-select-label">Language</InputLabel>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    // open={true}
                                    // onClose={handleClose}
                                    // onOpen={this.getPoiData}
                                    // onClick={this.getPoiData}
                                    value={this.state.poi}
                                    onChange={this.onPoiNameChange}
                                >
                                    {/* <MenuItem value="Narendra Modi">
                                    <em>None</em>
                                </MenuItem> */}
                                    <MenuItem value={'en'}> English</MenuItem>
                                    <MenuItem value={'es'}>Spain</MenuItem>
                                    <MenuItem value={'hi'}>Hindi</MenuItem>
                                </Select>
                            </FormControl>
                        </TableRow>

                        <TableRow>
                            <FormControl variant="standard" sx={{ m: 1, width: 250 }}>
                                <InputLabel id="demo-controlled-open-select-label">Country</InputLabel>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    // open={true}
                                    // onClose={handleClose}
                                    // onOpen={this.getPoiData}
                                    // onClick={this.getPoiData}
                                    value={this.state.poi}
                                    onChange={this.onPoiNameChange}
                                >
                                    {/* <MenuItem value="Narendra Modi">
                                    <em>None</em>
                                </MenuItem> */}
                                    <MenuItem value={'usa'}> USA</MenuItem>
                                    <MenuItem value={'india'}>INDIA</MenuItem>
                                    <MenuItem value={'mexico'}>Mexico</MenuItem>
                                </Select>
                            </FormControl>
                        </TableRow>

                        <TableRow>
                            <FormControl variant="standard" sx={{ m: 1, width: 250 }}>
                                <InputLabel id="demo-controlled-open-select-label">Topic</InputLabel>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    // open={true}
                                    // onClose={handleClose}
                                    // onOpen={this.getPoiData}
                                    // onClick={this.getPoiData}
                                    value={this.state.poi}
                                    onChange={this.onPoiNameChange}
                                >
                                    {/* <MenuItem value="Narendra Modi">
                                    <em>None</em>
                                </MenuItem> */}
                                    <MenuItem value={'Others'}> Others</MenuItem>
                                    <MenuItem value={'Lockdowns'}>Lockdowns</MenuItem>
                                    <MenuItem value={'Airline Passengers'}>Airline Passengers</MenuItem>
                                    <MenuItem value={'Vaccines'}>Vaccines</MenuItem>
                                    <MenuItem value={'Covid Cases'}>Covid Cases</MenuItem>
                                    <MenuItem value={'Government'}>Government</MenuItem>
                                    <MenuItem value={'Schools'}>Schools</MenuItem>
                                </Select>
                            </FormControl>
                        </TableRow>

                        <Button1
                            // className='cancel-btn'
                            // variant="contained"
                            //   style={{ fontSize: '14px', paddingTop: '15%' }}
                            id='getdata1'
                            onClick={() => this.getPoiData()}
                        >
                            <i className='fa fa-chevron-left' /> Search
                </Button1>
                        <Grid>

                        

                        <TableCell style={{ minWidth: 400 }} align='center'>
                            Extreame
                                                </TableCell>
                                                {extreme?  this.renderExtreame() :null}
                        {/* <TableCell style={{ minWidth: 400 }} align='center'>
                            {extreme.positive_tweets[0]}
                        </TableCell>
                        <TableCell style={{ minWidth: 400 }} align='center'>
                            {extreme.positive_tweets[1]}
                        </TableCell>
                        <TableCell style={{ minWidth: 400 }} align='center'>
                            {extreme.negative_tweets[0]}
                        </TableCell>
                        <TableCell style={{ minWidth: 400 }} align='center'>
                            {extreme.negative_tweets[1]}
                        </TableCell> */}
</Grid>

                    </Grid>

                    <Grid item xs={5}>
                        <Box sx={{ width: '100%' }}>
                            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                <TableContainer sx={{ maxHeight: 640 }}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow >
                                                <TableCell style={{ minWidth: 170 }} align='center'>
                                                    Tweet Text
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {this.state.getmyPoiData ? this.renderPoiTweetList() : this.renderTweetList()}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>

                        </Box>

                    </Grid>
                    <Grid item xs={4}>
                        <TableCell style={{ minWidth: 500 }} align='center'> chart </TableCell>
                        {/* <Item>xs=4</Item> */}

                        {this.state.keywords ?
                            <ReactWordcloud words={keywords} size={[60, 40]} options={{
                                fontFamily: 'courier new',
                                fontSizes: [10, 40]
                            }}
                            /> : null}

                        {/* {this.state.keywords ?
                   <WordCloud data={keywords} /> : null} */}


                        {this.state.poi_data ?
                            <Paper>
                                <Chart
                                    data={chartData}
                                >
                                    <ArgumentAxis />
                                    <ValueAxis max={2} />

                                    <BarSeries
                                        // valueField="population"
                                        // argumentField="year"
                                        valueField="percent"
                                        argumentField="poi_name"
                                    />
                                    <Title text="POI graph" />
                                    <Animation />
                                </Chart>
                            </Paper>
                            : null}
                        {this.state.tweet_type ?
                            <Paper>
                                <Chart
                                    data={chartData_1}
                                >
                                    <PieSeries
                                        valueField="percent"
                                        argumentField="type"
                                        innerRadius={0.7}
                                    />
                                    <Title
                                        text="Type graph"
                                    />
                                    <Animation />
                                </Chart>
                            </Paper>
                            : null}



                    </Grid>

                    {/* {this.state.keywords ?
                    <ReactWordcloud words={keywords}/> : null} */}

                </Grid>






            </div>


        );
    }
};

export default rawfile;


