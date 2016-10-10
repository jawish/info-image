import React from "react";

//import styles from "../../src/styles/text.css";

const validConfigProps = [
  'angle',
  'backgroundColor',
  'charSpacing',
  'fillColor',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'height',
  'hasControls',
  'left',
  'lineHeight',
  'lockRotation',
  'opacity',
  'selectable',
  'shadow',
  'strokeColor',
  'strokeWidth',
  'textAlign',
  'top',
  'visible',
  'width'
];

export default class Text extends React.Component {

  constructor (props) {
    super(props);

    this.update = this.update.bind(this);
  }

  update ({canvas, text, ...restProps}) {
    
    if (!canvas) return;

    Object.keys(restProps).forEach(key => {
      !validConfigProps.includes(key) && delete restProps[key];
    });

    const fText = new fabric.Textbox(text, restProps);

    setTimeout(() => {
      canvas.add(fText);
    });
  }

  render () {
    this.update(this.props);

    return null;
  }

}

Text.displayName = "Text";

Text.propTypes = {
  canvas: React.PropTypes.any,
  text: React.PropTypes.string.isRequired,
  angle: React.PropTypes.number,
  backgroundColor: React.PropTypes.string,
  charSpacing: React.PropTypes.number,
  fillColor: React.PropTypes.string,
  fontFamily: React.PropTypes.string,
  fontSize: React.PropTypes.string,
  fontStyle: React.PropTypes.oneOf(['', 'normal', 'italic', 'oblique']),
  fontWeight: React.PropTypes.string,
  height: React.PropTypes.number,
  hasControls: React.PropTypes.bool,
  left: React.PropTypes.number,
  lineHeight: React.PropTypes.number,
  lockRotation: React.PropTypes.bool,
  opacity: React.PropTypes.number,
  selectable: React.PropTypes.bool,
  shadow: React.PropTypes.object,
  strokeColor: React.PropTypes.string,
  strokeWidth: React.PropTypes.number,
  textAlign: React.PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  top: React.PropTypes.number,
  visible: React.PropTypes.bool,
  width: React.PropTypes.number,
};

Text.defaultProps = {
  text: '',
  angle: 0,
  backgroundColor: 'transparent',
  lockRotation: true
};