import React from "react";

import styles from "../../src/styles/image.css";

const Image = ({url, scale, bottom, top, left}) => <div />;

Image.displayName = "Image";

Image.propTypes = {
  url: React.PropTypes.string,
  scale: React.PropTypes.number,
  bottom: React.PropTypes.number,
  top: React.PropTypes.number,
  left: React.PropTypes.number
};

Image.defaultProps = {
	url: '',
	scale: 'center',
	bottom: null,
	top: 0,
	left: 0
};

export default Image;