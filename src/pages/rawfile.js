import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import {
  Input,
  Label,
  Col,
  Row,
  Button,
  Container,
  Navbar,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
// import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
// import { makeStyles } from "@mui/material/styles";
import { Component } from "react";
// import randomDataService from "../Services/randomData/randomDataService";
import RandomDataService from "../Services/randomData/randomDataService";
// import View from "../@dgn-src-ui/core/View"
// import { redirectToSrci } from "../../utility/utility";
// import {
//     dcfActionCode
// } from "../../redux-store/actions/Action";
// import { store } from "../../redux-store/store";
// import { useDispatch, useSelector } from "react-redux";
// import { DCFACTIONCODE } from "../../utility/constants/utilityConstants";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Legend,
  Tooltip,
  Bar,
  PieChart,
  Pie,
} from "recharts";

import Paper from "@mui/material/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  PieSeries,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import Grid from "@mui/material/Grid";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

// import { TweetBody } from './tweet'
import ReactWordcloud from "react-wordcloud";
import Box from "@mui/material/Box";
import Button1 from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import MaterialTable from "material-table";

import { useTheme } from "@mui/material/styles";
// import Box from '@mui/material/Box';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
// import { makeStyles } from '@bit/mui-org.material-ui.styles';
import WordCloud from "react-d3-cloud";
// import Box from '@mui/material/Box';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Resizable } from "re-resizable";

const resizeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

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

const darkTheme = createTheme({
  palette: {
    // mode: 'dark',
    primary: {
      main: "#0097a7",
    },
  },
});

const buttonTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0097a7",
    },
  },
});

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
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const words = [
  {
    text: "told",
    value: 64,
  },
  {
    text: "mistake",
    value: 11,
  },
  {
    text: "thought",
    value: 16,
  },
  {
    text: "bad",
    value: 17,
  },
];

// const classes = useStyles();

const OptimizedComponent = React.memo(({id,poi,tweet_text})=>{
    return (<TableRow hover role="checkbox" tabIndex={-1} key={id}>
            
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={poi} />
              </ListItemAvatar>
              <ListItemText
                primary={"tweet user"}
                secondary={tweet_text}
              />
            </ListItem>
            {/* <TableCell key={item.tweet_text} > {item.tweet_text ? item.tweet_text : '_'} */}
            {/* <Box sx={{ width: 500, maxHeight: 50 }}>
              <BottomNavigation
                showLabels
                // value={value}
                // onChange={(event, newValue) => {
                //     setValue(newValue);
                // }}
              ></BottomNavigation>
            </Box> */}
            {/* </TableCell> */}
          </TableRow>)
})

const BottomShit = React.memo(() => {
  return (
    <>
      <BottomNavigationAction label="Sentiments" icon={<RestoreIcon />} />
      <BottomNavigationAction label="share" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="likes" icon={<FavoriteIcon />} />
    </>
  );
});

const chart_Data = [
  { poi_name: "1950", percent: 2.525 },
  { poi_name: "1960", percent: 3.018 },
  { poi_name: "1970", percent: 3.682 },
  { poi_name: "1980", percent: 4.44 },
  { poi_name: "1990", percent: 5.31 },
  { poi_name: "2000", percent: 6.127 },
  { poi_name: "2010", percent: 6.93 },
];

const pie_data = [
  { type: "Asia", percent: 4119626293 },
  { type: "Africa", percent: 1012956064 },
  { type: "Northern America", percent: 344124520 },
  { type: "Latin America and the Caribbean", percent: 590946440 },
  { type: "Europe", percent: 727082222 },
  { type: "Oceania", percent: 35104756 },
];

const style = {
  "word-break": "break-all",
  "align-items": "center",
};

class rawfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query_term: "",
      getmydata: "",
      chart_Data,
      poi_data: "",
      pie_data,
      tweet_type: "",
      tweet_data: [],
      poi: "",
      getmyPoiData: "",
      keywords: "",
      extreme: "",
      lang_type: "",
      country: "",
      topic: "",
      filter_type: "",
      tweet_sentiment: "",
      antivaccine_tweets: "",
    };
    this.RandomDataService = new RandomDataService();
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
      dropdownOpen: !this.state.dropdownOpen,
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
    console.log(event, "<----on change");
    this.setState({
      query_term: event.target.value,
    });
  };

  onPoiNameChange = (event) => {
    // debugger
    console.log(event, "<----on poi change");
    this.setState({
      poi: event.target.value,
      filter_type: "poi_name",
    });
    // this.getPoiData()
  };

  onLangTypeChange = (event) => {
    // debugger
    console.log(event, "<----on lang type change");
    this.setState({
      lang_type: event.target.value,
      filter_type: "lang_type",
    });
    // this.getPoiData()
  };

  onCountryChange = (event) => {
    // debugger
    console.log(event, "<----on country change");
    this.setState({
      country: event.target.value,
      filter_type: "country_name",
    });
    // this.getPoiData()
  };

  onTopicNameChange = (event) => {
    // debugger
    console.log(event, "<----on topic change");
    this.setState({
      topic: event.target.value,
      filter_type: "topic_name",
    });
    // this.getPoiData()
  };

  onClearData = (event) => {
    // debugger
    // console.log(event, "<----on topic change")
    this.setState({
      poi: "",
      lang_type: "",
      topic: "",
      country: "",
    });
    // this.getPoiData()
  };

  onClearSearchData = (event) => {
    // debugger
    // console.log(event, "<----on topic change")
    this.setState({
      query_term: "",
    });
    // this.getPoiData()
  };

  redirectToCreate = () => {
    this.props.history.push(`/newfile`);
  };

  //  useStyles = makeStyles({
  //     container: {
  //       maxHeight: 200
  //     }
  //   });

  async getPoiData() {
    // debugger
    // const merchantId = this.props.usersData ? this.props.usersData.user.MerchantId : null
    const data = {
      query: this.state.query_term,
      type: this.state.filter_type,
      poi_name: this.state.poi,
      lang_type: this.state.lang_type,
      country: this.state.country,
      topic: this.state.topic,
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
      });
    } catch (err) {
      console.error("Damn!!!!! API breaked");
    }
  }

  async getRandomData() {
    // debugger
    // const merchantId = this.props.usersData ? this.props.usersData.user.MerchantId : null
    const data = {
      query_term: this.state.query_term,
    };
    try {
      const randomData = await this.RandomDataService.getRandomData(
        data.query_term
      );
      this.setState({
        getmydata: randomData,
        poi_data: randomData.data.body.poi_dist,
        tweet_type: randomData.data.body.tweet_type,
        keywords: randomData.data.body.keywords,
        extreme: randomData.data.body.extreme,
        tweet_sentiment: randomData.data.body.tweet_sentiment,
        antivaccine_tweets: randomData.data.body.antivaccine_tweets,
        // tweet_data: [
        //     { tweet_1: randomData.data.body.documents[0].tweet_text },
        //     ...this.state.tweet_data]
      });
    } catch (err) {
      console.error("Damn!!!!! API breaked");
    }
  }

  renderTweetList = () => {
    return (
      this.state.getmydata?.data?.body?.documents?.map((item, index) => {
        return <OptimizedComponent poi={item.poi} tweet_text={item.tweet_text} id={item.id}/>;
      })
    );
  };

  renderPoiTweetList = () => {
    return (
      this.state.getmyPoiData &&
      this.state.getmyPoiData.data &&
      this.state.getmyPoiData.data.body.map((item) => {
        return <OptimizedComponent poi={item.poi} tweet_text={item.tweet_text} id={item.id}/>;
      })
    );
  };

  // renderLangtypeList = () => {
  //     return this.state.getmyPoiData &&
  //         this.state.getmyPoiData.data &&
  //         this.state.getmyPoiData.data.body.map((item, index) => {
  //             return (

  //                 <TableRow hover role="checkbox" tabIndex={-1} key={index}>
  //                     <ListItem >
  //                         <ListItemAvatar>
  //                             <Avatar alt="Profile Picture" src={item.poi_name} />
  //                         </ListItemAvatar>
  //                         <ListItemText primary={item.poi_name} secondary={item.tweet_text} />
  //                     </ListItem>
  //                     <Box sx={{ width: 500, maxHeight: 50 }}>
  //                         <BottomNavigation
  //                             showLabels
  //                         // value={value}
  //                         // onChange={(event, newValue) => {
  //                         //     setValue(newValue);
  //                         // }}
  //                         >
  //                             <BottomNavigationAction label="Sentiments" icon={<RestoreIcon />} />
  //                             <BottomNavigationAction label="share" icon={<LocationOnIcon />} />
  //                             <BottomNavigationAction label="likes" icon={<FavoriteIcon />} />
  //                         </BottomNavigation>
  //                     </Box>
  //                     {/* </TableCell> */}
  //                 </TableRow>
  //             );
  //         })
  // }

  renderPositiveExtreame = () => {
    // debugger
    return (
      this.state.extreme &&
      this.state.extreme &&
      this.state.extreme.positive_tweets &&
      this.state.extreme.positive_tweets.map((item, index) => {
        return (
          // <TableRow hover role="checkbox" tabIndex={-1} key={index}>
          //     <TableCell key={item} > {item ? item : '_'} </TableCell>
          // </TableRow>

          <TableRow hover role="checkbox" tabIndex={-1} key={index}>
            {/* <CssBaseline /> */}
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={this.state.poi} />
              </ListItemAvatar>
              <ListItemText primary={"tweet user"} secondary={item} />
            </ListItem>
            {/* <TableCell key={item.tweet_text} > {item.tweet_text ? item.tweet_text : '_'} */}
            <Box sx={{ width: 400, maxHeight: 50 }}>
              <BottomNavigation
                showLabels
                // value={value}
                // onChange={(event, newValue) => {
                //     setValue(newValue);
                // }}
              >
                <BottomNavigationAction
                  label="Sentiments"
                  icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                  label="share"
                  icon={<LocationOnIcon />}
                />
                <BottomNavigationAction label="likes" icon={<FavoriteIcon />} />
              </BottomNavigation>
            </Box>
            {/* </TableCell> */}
          </TableRow>
        );
      })
    );
  };

  renderNegativeExtreame = () => {
    // debugger
    return (
      this.state.extreme &&
      this.state.extreme &&
      this.state.extreme.negative_tweets &&
      this.state.extreme.negative_tweets.map((item, index) => {
        return (
          // <TableRow hover role="checkbox" tabIndex={-1} key={index}>
          //     <TableCell key={item} > {item ? item : '_'} </TableCell>
          // </TableRow>

          <TableRow hover role="checkbox" tabIndex={-1} key={index}>
            {/* <CssBaseline /> */}
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={this.state.poi} />
              </ListItemAvatar>
              <ListItemText primary={"tweet user"} secondary={item} />
            </ListItem>
            {/* <TableCell key={item.tweet_text} > {item.tweet_text ? item.tweet_text : '_'} */}
            <Box sx={{ width: 400, maxHeight: 50 }}>
              <BottomNavigation
                showLabels
                // value={value}
                // onChange={(event, newValue) => {
                //     setValue(newValue);
                // }}
              >
                <BottomNavigationAction
                  label="Sentiments"
                  icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                  label="share"
                  icon={<LocationOnIcon />}
                />
                <BottomNavigationAction label="likes" icon={<FavoriteIcon />} />
              </BottomNavigation>
            </Box>
            {/* </TableCell> */}
          </TableRow>
        );
      })
    );
  };

  renderSentimentTweets = () => {
    // debugger
    return (
      this.state.getmydata &&
      this.state.getmydata.data &&
      this.state.getmydata.data.body &&
      this.state.getmydata.data.body.antivaccine_tweets &&
      this.state.getmydata.data.body.antivaccine_tweets.antivaccine_tweets.map(
        (item, index) => {
          return (
            // <TableRow hover role="checkbox" tabIndex={-1} key={index}>
            //     <TableCell key={item} > {item ? item : '_'} </TableCell>
            // </TableRow>

            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
              {/* <CssBaseline /> */}
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={this.state.poi} />
                </ListItemAvatar>
                <ListItemText primary={"tweet user"} secondary={item} />
              </ListItem>
              {/* <TableCell key={item.tweet_text} > {item.tweet_text ? item.tweet_text : '_'} */}
              <Box sx={{ width: 400, maxHeight: 50 }}>
                <BottomNavigation
                  showLabels
                  // value={value}
                  // onChange={(event, newValue) => {
                  //     setValue(newValue);
                  // }}
                >
                  <BottomNavigationAction
                    label="Sentiments"
                    icon={<RestoreIcon />}
                  />
                  <BottomNavigationAction
                    label="share"
                    icon={<LocationOnIcon />}
                  />
                  <BottomNavigationAction
                    label="likes"
                    icon={<FavoriteIcon />}
                  />
                </BottomNavigation>
              </Box>
              {/* </TableCell> */}
            </TableRow>
          );
        }
      )
    );
  };

  render() {
    console.log("RE RENDER");

    // console.log(this.props,this.event,"<----")
    // console.log(this.state.query_term, "<---- value")
    // console.log(this.state.poi, "<----poi value")
    // console.log(this.state.lang_type, "<----lang type")
    // console.log(this.state.filter_type, "<----filter value")
    // console.log(this.state.getmydata, "<---- value")

    // console.log(chart_Data, "<---- chart_Data")
    // console.log(this.state.poi_data, "<---- poi_Data")

    // console.log(this.state.pie_data, "<---- pie type_Data")
    // console.log(this.state.tweet_type, "<---- type_Data")

    // console.log(this.state.tweet_data, "<---- tweet_Data")

    const chartData = this.state.poi_data
      ? this.state.poi_data
      : this.state.chart_Data;
    const chartData_1 = this.state.tweet_type
      ? this.state.tweet_type
      : this.state.pie_data;
    // console.log(chartData_1, "<---- chart_Data")
    const tweet = this.state.tweet_data ? this.state.tweet_data : null;
    const keywords = this.state.keywords ? this.state.keywords : null;
    // console.log(words, "<---- words")
    // console.log(keywords, "<---- keywords")
    const extreme = this.state.extreme ? this.state.extreme : null;
    // console.log(extreme, "<---- extreme")
    const tweet_sentiment = this.state.tweet_sentiment
      ? this.state.tweet_sentiment
      : null;
    const antivaccine_tweets = this.state.antivaccine_tweets
      ? this.state.antivaccine_tweets
      : null;
    // console.log(antivaccine_tweets, "<---- antivaccine_tweets")
    // const tweet = this.state.getmydata.data.body.documents[0].tweet_text ? this.state.getmydata.data.body.documents.tweet_text : null
    return (
      <div style={{ textAlign: "center" }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="primary"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h4"
                align="left"
                component="div"
                sx={{ flexGrow: 4 }}
              >
                Ting
              </Typography>
              {/* <ThemeProvider theme={buttonTheme}> */}
              <Button1
                className="cancel-btn"
                variant="contained"
                color="secondary"
                //   style={{ fontSize: '14px', paddingTop: '15%' }}
                id="back"
                onClick={() => this.redirectToCreate()}
              >
                <i className="fa fa-chevron-left" /> Overall Analysis
              </Button1>
              {/* </ThemeProvider> */}
            </Toolbar>
          </AppBar>
        </ThemeProvider>

        <Grid container spacing={2}>
          <Grid item xs={10}>
            <p className="currency-pay-body">{/* Please enter your query */}</p>
            <Row align="centre">
              {/* <Grid item xs={1}>hi</Grid> */}
              {/* <Col></Col> */}
              {/* <Col xs="2"> */}
              {/* <Grid item xs={4}> */}
              {/* <Row align="centre"> */}
              <TextField
                // fullWidth
                variant="outlined"
                label="Search tweet"
                // type='query_term'
                id="query_term"
                name="query_term"
                // className='floating-input'
                value={this.state.query_term}
                // placeholder=' '
                onChange={this.onUserNameChange}
              />
              {/* </Row> */}
              {/* </Grid> */}
              {/* <Grid item xs={3}></Grid> */}
              {/* <Label >raw name</Label> */}
              {/* </Col> */}
              {/* <Col></Col> */}
            </Row>

            <Row>
              {/* <Button1
                                className='cancel-btn'
                                //   style={{ fontSize: '14px', paddingTop: '15%' }}
                                id='back'
                                onClick={() => this.redirectToCreate()}
                            >
                                <i className='fa fa-chevron-left' /> Back to newfile
                </Button1> */}

              <Button1
                className="cancel-btn"
                //   style={{ fontSize: '14px', paddingTop: '15%' }}
                id="back"
                onClick={() => this.onClearSearchData()}
              >
                <i className="fa fa-chevron-left" /> clear
              </Button1>

              <Button1
                // className='cancel-btn'
                // variant="contained"
                //   style={{ fontSize: '14px', paddingTop: '15%' }}
                id="getdata"
                onClick={() => this.getRandomData()}
              >
                <i className="fa fa-chevron-left" /> Enter
              </Button1>
            </Row>
          </Grid>

          <Grid item xs={3}>
            <TableHead>
              <TableCell style={{ minWidth: 450 }} align="center">
                {" "}
                Filter{" "}
              </TableCell>
            </TableHead>
            <TableRow>
              <FormControl variant="standard" sx={{ m: 1, width: 250 }}>
                <InputLabel id="demo-controlled-open-select-label">
                  POI
                </InputLabel>
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
                  <MenuItem value={"Narendra Modi"}>Narendra Modi</MenuItem>
                  <MenuItem value={"Kamala Harris"}>Kamala Harris</MenuItem>
                  <MenuItem value={"PMO India"}>PMO India</MenuItem>
                </Select>
              </FormControl>
            </TableRow>

            <TableRow>
              <FormControl variant="standard" sx={{ m: 1, width: 250 }}>
                <InputLabel id="demo-controlled-open-select-label">
                  Language
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  // open={true}
                  // onClose={handleClose}
                  // onOpen={this.getPoiData}
                  // onClick={this.getPoiData}
                  value={this.state.lang_type}
                  onChange={this.onLangTypeChange}
                >
                  {/* <MenuItem value="Narendra Modi">
                                    <em>None</em>
                                </MenuItem> */}
                  <MenuItem value={"en"}> English</MenuItem>
                  <MenuItem value={"es"}>Spain</MenuItem>
                  <MenuItem value={"hi"}>Hindi</MenuItem>
                </Select>
              </FormControl>
            </TableRow>

            <TableRow>
              <FormControl variant="standard" sx={{ m: 1, width: 250 }}>
                <InputLabel id="demo-controlled-open-select-label">
                  Country
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  // open={true}
                  // onClose={handleClose}
                  // onOpen={this.getPoiData}
                  // onClick={this.getPoiData}
                  value={this.state.country}
                  onChange={this.onCountryChange}
                >
                  {/* <MenuItem value="Narendra Modi">
                                    <em>None</em>
                                </MenuItem> */}
                  <MenuItem value={"usa"}> USA</MenuItem>
                  <MenuItem value={"india"}>INDIA</MenuItem>
                  <MenuItem value={"mexico"}>Mexico</MenuItem>
                </Select>
              </FormControl>
            </TableRow>

            <TableRow>
              <FormControl variant="standard" sx={{ m: 1, width: 250 }}>
                <InputLabel id="demo-controlled-open-select-label">
                  Topic
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  // open={true}
                  // onClose={handleClose}
                  // onOpen={this.getPoiData}
                  // onClick={this.getPoiData}
                  value={this.state.topic}
                  onChange={this.onTopicNameChange}
                >
                  {/* <MenuItem value="Narendra Modi">
                                    <em>None</em>
                                </MenuItem> */}
                  <MenuItem value={"Others"}> Others</MenuItem>
                  <MenuItem value={"Lockdowns"}>Lockdowns</MenuItem>
                  <MenuItem value={"Airline Passengers"}>
                    Airline Passengers
                  </MenuItem>
                  <MenuItem value={"Vaccines"}>Vaccines</MenuItem>
                  <MenuItem value={"Covid Cases"}>Covid Cases</MenuItem>
                  <MenuItem value={"Government"}>Government</MenuItem>
                  <MenuItem value={"Schools"}>Schools</MenuItem>
                </Select>
              </FormControl>
            </TableRow>

            <Button1
              // className='cancel-btn'
              // variant="contained"
              //   style={{ fontSize: '14px', paddingTop: '15%' }}
              id="getdata1"
              onClick={() => this.getPoiData()}
            >
              <i className="fa fa-chevron-left" /> Search
            </Button1>

            <Button1
              // className='cancel-btn'
              // variant="contained"
              //   style={{ fontSize: '14px', paddingTop: '15%' }}
              id="getdata1"
              onClick={() => this.onClearData()}
            >
              <i className="fa fa-chevron-left" /> Clear
            </Button1>
            <Grid>
              <TableCell style={{ minWidth: 400 }} align="center">
                Positive Extreme
              </TableCell>
              {extreme ? this.renderPositiveExtreame() : null}
            </Grid>
            <Grid>
              <TableCell style={{ minWidth: 400 }} align="center">
                Negative Extreme
              </TableCell>
              {extreme ? this.renderNegativeExtreame() : null}
            </Grid>

            <Grid>
              <TableCell style={{ minWidth: 400 }} align="center">
                Sentiment tweets
              </TableCell>
              {antivaccine_tweets ? this.renderSentimentTweets() : null}
            </Grid>
          </Grid>

          <Grid item xs={5}>
            <Box sx={{ width: "100%" }}>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 1400 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ minWidth: 170 }} align="center">
                          Tweet Text
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* {this.state.getmydata &&
                      this.state.getmydata.data &&
                      this.state.getmydata.data.body &&
                      this.state.getmydata.data.body.documents
                        ? this.renderTweetList()
                        : "No data"} */}
                      {this.state.getmyPoiData ? this.renderPoiTweetList() : this.renderTweetList()}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <TableHead>
              <TableCell style={{ minWidth: 500 }} align="center">
                {" "}
                Analysis{" "}
              </TableCell>{" "}
            </TableHead>
            {/* <Item>xs=4</Item> */}

            {this.state.keywords ? (
              <Grid>
                <TableHead>
                  <TableCell style={{ minWidth: 500 }} align="center">
                    {" "}
                    Word Cloud{" "}
                  </TableCell>{" "}
                </TableHead>
                {/* <Row align="centre"> */}
                <Resizable
                  defaultSize={{
                    width: 600,
                    height: 300,
                  }}
                  style={resizeStyle}
                >
                  <div style={{ width: "100%", height: "100%" }}>
                    <ReactWordcloud
                      words={keywords}
                      options={{
                        fontFamily: "courier new",
                        fontSizes: [10, 40],
                      }}
                    />
                  </div>
                </Resizable>

                {/* </Row> */}
              </Grid>
            ) : null}

            {/* {this.state.keywords ?
                   <WordCloud data={keywords} /> : null} */}

            {this.state.tweet_sentiment ? (
              <Grid>
                {" "}
                <TableHead>
                  {" "}
                  <TableCell style={{ minWidth: 500 }} align="center">
                    {" "}
                    Tweet Sentiments{" "}
                  </TableCell>{" "}
                </TableHead>
                <BarChart width={500} height={250} data={tweet_sentiment}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="type" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="percent" fill="#8884d8" />
                  {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                </BarChart>
              </Grid>
            ) : null}

            {this.state.poi_data[0] ? (
              <Grid>
                {" "}
                <TableHead>
                  <TableCell style={{ minWidth: 500 }} align="center">
                    {" "}
                    POI data{" "}
                  </TableCell>
                </TableHead>
                <BarChart width={630} height={250} data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="poi_name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="percent" fill="#8884d8" />
                  {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                </BarChart>
              </Grid>
            ) : null}
            {this.state.tweet_type ? (
              <Grid>
                <TableHead>
                  <TableCell style={{ minWidth: 500 }} align="center">
                    {" "}
                    Type{" "}
                  </TableCell>
                </TableHead>
                <PieChart width={500} height={350}>
                  <Pie
                    data={chartData_1}
                    dataKey="percent"
                    nameKey="type"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  />
                  <Tooltip />
                  {/* <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label /> */}
                </PieChart>
              </Grid>
            ) : null}
          </Grid>

          {/* {this.state.keywords ?
                    <ReactWordcloud words={keywords}/> : null} */}
        </Grid>
      </div>
    );
  }
}

export default rawfile;
