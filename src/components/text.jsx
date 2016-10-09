import React from "react";

//import styles from "../../src/styles/text.css";

export default class Text extends React.Component {

  constructor (props) {
    super(props);

    this.update = this.update.bind(this);
  }

  update ({
      canvas,
      text, 
      angle,
      backgroundColor,
      charSpacing,
      fillColor,
      fontFamily,
      fontSize,
      fontStyle,
      fontWeight,
      lineHeight,
      lockRotation,
      shadow,
      strokeColor,
      strokeWidth,
      textAlign
      }) {
    
    if (!canvas) return;
    
    setTimeout(() => {
      let fText = new fabric.Textbox(text, {
        angle,
        backgroundColor,
        charSpacing
        /*,
        fillColor,
        fontFamily,
        fontSize,
        fontStyle,
        fontWeight,
        lineHeight,
        lockRotation,
        shadow,
        strokeColor,
        strokeWidth,
        textAlign
        */
      });
      canvas.add(fText);
    });
  }

  render () {
    this.update(this.props);

    return <div />;
  }

}

Text.displayName = "Text";

Text.propTypes = {
  canvas: React.PropTypes.any,
  text: React.PropTypes.string,
  angle: React.PropTypes.number,
  backgroundColor: React.PropTypes.string,
  charSpacing: React.PropTypes.number,
  fillColor: React.PropTypes.string,
  fontFamily: React.PropTypes.string,
  fontSize: React.PropTypes.string,
  fontStyle: React.PropTypes.oneOf(['', 'normal', 'italic', 'oblique']),
  fontWeight: React.PropTypes.string,
  lineHeight: React.PropTypes.number,
  lockRotation: React.PropTypes.any,
  opacity: React.PropTypes.number,
  shadow: React.PropTypes.object,
  strokeColor: React.PropTypes.string,
  strokeWidth: React.PropTypes.number,
  textAlign: React.PropTypes.oneOf(['left', 'center', 'right', 'justify'])
};

Text.defaultProps = {
  text: 'Test2',
  angle: 0,
  backgroundColor: 'transparent',
  charSpacing: null,
  fillColor: null,
  fontFamily: null,
  fontSize: null,
};