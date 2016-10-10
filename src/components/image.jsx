import React from "react";

//import styles from "../../src/styles/text.css";

const validConfigProps = [
  'angle',
  'fillColor',
  'hasControls',
  'height',
  'left',
  'lockRotation',
  'lockUniScaling',
  'opacity',
  'selectable',
  'top',
  'visible',
  'width'
];

export default class Image extends React.Component {

  constructor (props) {
    super(props);

    this.update = this.update.bind(this);
  }

  update ({canvas, src, ...restProps}) {

    if (!canvas) return;

    const fIndex = restProps.index;

    Object.keys(restProps).forEach(key => {
      !validConfigProps.includes(key) && delete restProps[key];
    });

    if (typeof src === 'string') {
      fabric.Image.fromURL(src, fImage => {
        canvas.add(fImage);
        fImage.moveTo(fIndex);
      });
    }
    else {
      const fImage = new fabric.Image(src, restProps);

      setTimeout(() => {
        canvas.add(fImage);
        fImage.moveTo(fIndex);
      });
    }
  }

  render () {
    this.update(this.props);

    return <div />;
  }

}

Image.displayName = "Image";

Image.propTypes = {
  canvas: React.PropTypes.any,
  src: React.PropTypes.string.isRequired,
  angle: React.PropTypes.number,
  fillColor: React.PropTypes.string,
  hasControls: React.PropTypes.bool,
  height: React.PropTypes.number,
  left: React.PropTypes.number,
  lockRotation: React.PropTypes.bool,
  lockUniScaling: React.PropTypes.bool,
  opacity: React.PropTypes.number,
  selectable: React.PropTypes.bool,
  top: React.PropTypes.number,
  visible: React.PropTypes.bool,
  width: React.PropTypes.number,
};

Image.defaultProps = {
  angle: 0,
  lockRotation: true
};