import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_CONTRAST,
  COLOR_SECONDARY,
  COLOR_SECONDARY_CONTRAST,
  COLOR_MUTED,
  COLOR_NONE,
  COLOR_ERROR,
  COLOR_BODY,
  COLOR_LINK,
  COLOR_BORDER,
  COLOR_BG_PRIMARY,
  COLOR_BG_LIGHT,
  FONT_SIZE_TEXT,
  FONT_SIZE_TEXT_SM,
  HEADING_FONT_SIZE,
  BTN_FONT_SIZE_BG,
  BTN_FONT_SIZE_SM,
  HEADING_LINE_HEIGHT,
  FONT_LINE_HEIGHT,
  FONT_LINE_HEIGHT_SM,
  FONT_FAMILY_NORMAL,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_LIGHT,
  TEXT_TRANSFORM_CAPS,
  FONT_WEIGHT_STRONG,
  CONTAINER_GUTTER,
  BORDER_RADIUS_DEFAULT,
  BTN_PADDING_SM,
  BTN_PADDING_BG,
  BTN_LINEHEIGHT_BG,
  BTN_MARGINBOTTOM_BG,
  BTN_BORDER_RADIUS,
  HEADING_MARGIN,
  P1_MARGIN,
  GUTTER_MARGIN,
  LINK_LINE_HEIGHT,
  LINK_FONTSIZE,
  CARD_PADDING,
  CARD_PADDING_HEADER,
  CARD_PADDING__CONTENT,
  CARD_PADDINGBOTTOM__CONTENT,
  INPUT_LABEL_MARGINTOP__SHRINK,
  INPUT_MARGINTOP,
  INPUT_FORMCONTROL_MARGINTOP,
  INPUT_HEIGHT,
  INPUT_BACKGROUNDCOLOR,
  INPUT_BORDERWIDTH,
  INPUT_BORDERSTYLE,
  INPUTBEFORE_DISPLAY,
  INPUTAFTER_DISPLAY,
  INPUT_BACKGROUND__HOVER,
  INPUT_BACKGROUNDCOLOR__FOCUSED,
  INPUT_BOXSHADOW__FOCUSED,
  INPUT_BOARDER__FOCUSED,
  INPUT_BACKGROUNDCOLOR__FILLED,
  INPUT_PADDINGTOP__FILLED,
  INPUT_PADDINGBOTTOM__FILLED,
  SELECT_PADDINGTOP,
  SELECT_PADDINGBOTTOM,
  SELECT_PADDINGLEFT,
  SELECT_MARGINTOP,
  SELECT_BACKGROUNDCOLOR__FOCUS,
  LISTITEM_BORDERBOTTOM,
  LISTITEM_BORDERBOTTOM__LAST,
  LISTITEM_MINHEIGHT,
  HELPERTEXT_MARGINLEFT__CONTAINED,
  SHADOW_ONE,
  SHADOW_TWO,
  SHADOW_TOOLTIP,
} from "@dgn-src-ui/config/constants";

// Override the default values of Google's Material UI theme with
// DGN's style guide values. If additional customizations are
// needed to specific components, create a Higher Order Component
// (HOC) in the components folder to wrap Material's component.
// Then make sure to import the local version of the component
// instead of Material's.
export default {
  spacing: 10,
  palette: {
    primary: {
      main: COLOR_PRIMARY,
      contrastText: COLOR_PRIMARY_CONTRAST,
    },
    secondary: {
      main: COLOR_SECONDARY,
      contrastText: COLOR_SECONDARY_CONTRAST,
    },
    error: {
      main: COLOR_ERROR,
    },
    grey: {
      100: COLOR_BG_LIGHT,
    },
    text: {
      primary: COLOR_BODY,
      secondary: COLOR_MUTED,
    },
    background: {
      default: COLOR_BG_PRIMARY,
    },
  },
  typography: {
    // Rather than inherit from Mui body styles, the default body
    // text is declared for the layout root element (App.module.scss)
    // ---------------------
    // The actual variant defaults still need to be declared
    fontFamily: FONT_FAMILY_NORMAL,
    body1: {
      color: COLOR_BODY,
      fontSize: FONT_SIZE_TEXT,
      lineHeight: FONT_LINE_HEIGHT,
    },
    body2: {
      color: COLOR_MUTED,
      fontSize: FONT_SIZE_TEXT_SM,
      lineHeight: FONT_LINE_HEIGHT_SM,
    },
    h1: {
      fontSize: HEADING_FONT_SIZE,
      lineHeight: HEADING_LINE_HEIGHT,
      fontFamily: FONT_FAMILY_LIGHT,
    },
    subtitle1: {
      fontSize: FONT_SIZE_TEXT_SM,
    },
    button: {
      fontFamily: FONT_FAMILY_BOLD,
      fontSize: BTN_FONT_SIZE_BG,
      lineHeight: BTN_LINEHEIGHT_BG,
      textTransform: TEXT_TRANSFORM_CAPS,
    },
    strong: {
      fontWeight: FONT_WEIGHT_STRONG,
    },
  },
  shape: {
    borderRadius: BORDER_RADIUS_DEFAULT,
  },
  shadows: [
    "none",
    SHADOW_ONE,
    SHADOW_TWO,
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],
  overrides: {
    MuiContainer: {
      root: {
        paddingLeft: CONTAINER_GUTTER,
        paddingRight: CONTAINER_GUTTER,
      },
    },
    MuiTypography: {
      h1: {
        margin: HEADING_MARGIN,
      },
      paragraph: {
        margin: P1_MARGIN,
      },
      gutterBottom: {
        marginBottom: GUTTER_MARGIN,
      },
    },
    MuiInputLabel: {
      root: {
        color: COLOR_MUTED,
        "&.MuiInputLabel-shrink": {
          marginTop: INPUT_LABEL_MARGINTOP__SHRINK,
        },
        "&.Mui-focused": {
          color: COLOR_MUTED,
        },
        "&.Mui-error": {
          color: COLOR_MUTED,
        },
        "& + .MuiInput-formControl": {
          marginTop: INPUT_FORMCONTROL_MARGINTOP,
        },
      },
    },
    MuiInputBase: {
      root: {
        marginTop: INPUT_MARGINTOP,
        backgroundColor: INPUT_BACKGROUNDCOLOR,
        borderWidth: INPUT_BORDERWIDTH,
        borderStyle: INPUT_BORDERSTYLE,
        borderColor: COLOR_BORDER,
        "&:before": {
          display: INPUTBEFORE_DISPLAY,
        },
        "&:after": {
          display: INPUTAFTER_DISPLAY,
        },
        "&:hover": {
          backgroundColor: INPUT_BACKGROUND__HOVER,
        },
        "&.MuiFilledInput-root:hover": {
          backgroundColor: INPUT_BACKGROUND__HOVER,
        },
        "&.MuiFilledInput-root.Mui-error": {
          backgroundColor: INPUT_BACKGROUND__HOVER,
        },
        "&.Mui-focused": {
          backgroundColor: INPUT_BACKGROUNDCOLOR__FOCUSED,
          boxShadow: INPUT_BOXSHADOW__FOCUSED,
          border: INPUT_BOARDER__FOCUSED,
        },
        "&.Mui-error": {
          borderColor: COLOR_ERROR,
        },
      },
      input: {
        height: INPUT_HEIGHT,
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: INPUT_BACKGROUNDCOLOR__FILLED,
        "&.Mui-focused": {
          backgroundColor: INPUT_BACKGROUNDCOLOR__FOCUSED,
        },
      },
      input: {
        paddingTop: INPUT_PADDINGTOP__FILLED,
        paddingBottom: INPUT_PADDINGBOTTOM__FILLED,
      },
    },
    MuiSelect: {
      root: {
        paddingTop: SELECT_PADDINGTOP,
        paddingBottom: SELECT_PADDINGBOTTOM,
        paddingLeft: SELECT_PADDINGLEFT,
        marginTop: SELECT_MARGINTOP,
        "&.MuiSelect-select:focus": {
          backgroundColor: SELECT_BACKGROUNDCOLOR__FOCUS,
        },
      },
    },
    MuiList: {
      root: {
        disablePadding: true,
      },
    },
    MuiListItem: {
      root: {
        borderBottom: LISTITEM_BORDERBOTTOM,
        "&.MuiMenuItem-root": {
          minHeight: LISTITEM_MINHEIGHT,
        },
        "&.Mui-selected": {
          color: COLOR_SECONDARY_CONTRAST,
          backgroundColor: COLOR_SECONDARY,
          "&:hover": {
            backgroundColor: COLOR_SECONDARY,
          },
        },
        "&:last-of-type": {
          borderBottom: LISTITEM_BORDERBOTTOM__LAST,
        },
      },
      button: {
        "&:hover": {
          backgroundColor: COLOR_SECONDARY,
          color: COLOR_SECONDARY_CONTRAST,
          "@media (hover: none)": {
            backgroundColor: COLOR_SECONDARY,
            color: COLOR_SECONDARY_CONTRAST,
          },
        },
        "&:focus": {
          backgroundColor: COLOR_SECONDARY,
          color: COLOR_SECONDARY_CONTRAST,
        },
      },
    },
    MuiFormHelperText: {
      root: {
        fontSize: FONT_SIZE_TEXT,
        lineHeight: FONT_LINE_HEIGHT,
      },
      contained: {
        marginLeft: HELPERTEXT_MARGINLEFT__CONTAINED,
      },
    },
    MuiButton: {
      root: {
        fontFamily: FONT_FAMILY_BOLD,
        fontWeight: FONT_WEIGHT_STRONG,
        borderRadius: BTN_BORDER_RADIUS,
      },
      fullWidth: {
        padding: BTN_PADDING_BG,
        marginBottom: BTN_MARGINBOTTOM_BG,
      },
      outlinedSizeSmall: {
        padding: BTN_PADDING_SM,
        fontSize: BTN_FONT_SIZE_SM,
        borderColor: COLOR_SECONDARY,
      },
      contained: {
        "&.Mui-disabled": {
          backgroundColor: COLOR_PRIMARY,
          color: "#fff",
        },
      },
      containedPrimary: {
        "&:hover": {
          backgroundColor: "#be502f",
        },
      },
      outlinedSecondary: {
        "&:hover": {
          backgroundColor: COLOR_SECONDARY,
          color: COLOR_SECONDARY_CONTRAST,
          "@media (hover: none)": {
            color: COLOR_SECONDARY,
          },
        },
      },
    },

    MuiLink: {
      root: {
        color: COLOR_LINK,
        fontSize: LINK_FONTSIZE,
        lineHeight: LINK_LINE_HEIGHT,
        borderColor: COLOR_SECONDARY,
      },
      underlineHover: {
        "&:focus": {
          textDecoration: "underline",
        },
      },
      underlineNone: {
        color: "inherit",
      },
    },
    MuiFormControlLabel: {
      root: {
        alignItems: "flex-start",
        marginLeft: 0,
        marginRight: 0,
      },
      label: {
        display: "block",
        width: "100%",
        margin: 0,
      },
    },
    MuiCard: {
      root: {
        padding: CARD_PADDING,
      },
    },
    MuiCardHeader: {
      root: {
        padding: CARD_PADDING_HEADER,
      },
      title: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: FONT_SIZE_TEXT,
        lineHeight: FONT_LINE_HEIGHT,
        textTransform: "capitalize",
      },
      action: {
        marginTop: 0,
        marginRight: 0,
        alignSelf: "auto",
      },
    },
    MuiCardContent: {
      root: {
        padding: CARD_PADDING__CONTENT,
        "&:last-child": {
          paddingBottom: CARD_PADDINGBOTTOM__CONTENT,
        },
      },
    },
    MuiMobileStepper: {
      root: {
        justifyContent: "center",
        padding: 0,
        background: COLOR_NONE,
      },
      dot: {
        backgroundColor: COLOR_NONE,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: COLOR_MUTED,
      },
      dotActive: {
        backgroundColor: COLOR_NONE,
        position: "relative",
        "&:before": {
          display: "block",
          content: '""',
          position: "absolute",
          top: "1px",
          left: "1px",
          backgroundColor: COLOR_MUTED,
          width: "4px",
          height: "4px",
          borderRadius: "50%",
        },
      },
    },
    MuiPaper: {
      elevation8: {
        boxShadow: SHADOW_ONE,
      },
    },
    MuiSvgIcon: {
      root: {
        verticalAlign: "top",
      },
    },
    MuiRadio: {
      root: {
        marginRight: "10px",
        padding: 0,
      },
    },
    MuiCheckbox: {
      root: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
      },
    },
    MuiIconButton: {
      sizeSmall: {
        padding: "3px 6px 9px",
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: "#F6FCFC",
        color: COLOR_BODY,
        boxShadow: SHADOW_TOOLTIP,
        maxWidth: "242px",
        fontSize: FONT_SIZE_TEXT,
        lineHeight: FONT_LINE_HEIGHT,
        fontFamily: FONT_FAMILY_NORMAL,
        padding: "22px 16px",
      },
      touch: {
        fontSize: FONT_SIZE_TEXT,
        lineHeight: FONT_LINE_HEIGHT,
        fontFamily: FONT_FAMILY_NORMAL,
        padding: "22px 16px",
      },
      tooltipPlacementBottom: {
        margin: "10px 0",
      },
      tooltipPlacementTop: {
        margin: "10px 0",
      },
      arrow: {
        width: "20px !important",
        height: "10px !important",
        color: "#F6FCFC",
        "&:after": {
          display: "block",
          content: '""',
          position: "absolute",
          width: "12px",
          height: "15px",
          transform: "rotate(45deg)",
          zIndex: "-1",
          boxShadow: SHADOW_TOOLTIP,
          backgroundColor: "#F6FCFC",
        },
      },
    },
    MuiSnackbar: {
      root: {
        display: "block",
        "&.InsertBefore__element": {
          position: "absolute",
          top: "5px",
          left: 0,
          right: 0,
          width: "calc(100% - 10px);",
          marginTop: 0,
          marginLeft: "auto",
          marginRight: "auto",
          transform: "none",
        },
        "&.App__alert": {
          position: "absolute",
          top: "5px",
          left: 0,
          right: 0,
          width: "calc(100% - 10px);",
          marginTop: 0,
          marginLeft: "auto",
          marginRight: "auto",
          transform: "none",
        },
      },
      anchorOriginTopCenter: {
        marginTop: "33px",
      },
    },
    MuiAlert: {
      filledSuccess: {
        padding: "3px 16px",
      },
    },
  },
};
