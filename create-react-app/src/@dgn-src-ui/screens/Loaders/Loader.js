import React from "react";
import PropTypes from "prop-types";
import LoadingArt from "@dgn-src-ui/core/LoadingArt";
import NotificationPage from "@dgn-src-ui/core/NotificationPage";

const Loader = ({ heading, content, children }) => {
  content = children ? children : content;
  return (
    <NotificationPage icon={LoadingArt} heading={heading}>
      {content}
    </NotificationPage>
  );
};

Loader.propTypes = {
  /** Main heading text for the Loader (e.g. Loading...) */
  heading: PropTypes.string,
  /** Alternate way to send in Loader content if you are manually invoking this component and not through the "View" component */
  children: PropTypes.node,
};

Loader.defaultProps = {
  heading: "Loading...",
};

export default Loader;
