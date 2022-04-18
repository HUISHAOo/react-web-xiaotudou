import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fabric } from "fabric";
import { Table, Popconfirm, Button } from 'antd';
import logoSrc from './sese.gif';
import logo2Src from './logo2.jpg';


let canvas = new fabric.Canvas('canvas')

const ProductList = ({ onDelete, products }) => {

  let object;
  let option;

  const hanldRe = (objects, options) => {
    object = objects;
    option = options
    var svg = fabric.util.groupSVGElements(objects, options);
    svg.left = 50;
    svg.top = 50;
    svg.scaleToWidth(100);
    svg.scaleToHeight(100);
    canvas.add(svg);
    canvas.renderAll();
  }
  let canvas = ''
  const handlecanvas = () => {
    canvas = new fabric.Canvas('canvas');
    fabric.textureSize = 5120;
    //   fabric.loadSVGFromString(
    // '<g transform="matrix(1 0 0 1 291.21 191.63)" id="CanvasCircle:01FFY0FCHMX0HV285Q85E3C23A"  >\n<circle style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,255); fill-rule: nonzero; opacity: 1;"  cx="0" cy="0" r="50" />\n</g>\n'



    console.log('canvas', canvas);
    // // 图片
    const imgEl = document.createElement('img')
    imgEl.crossOrigin = 'Anonymous' // 让图片能让所有人存取
    imgEl.src = './logo.jpg'
    imgEl.onload = () => {
      const image = new fabric.Image(imgEl, {
        scaleX: 0.5,
        scaleY: 0.5,
        angle: 15,
        // angle: 15,
        width: 1000,
        top: 0,
        left: 0
      })
      //   // 将 filters 实例 push 进 filters 里头
      image.filters.push(new fabric.Image.filters.Contrast({ contrast: 0.2 }))
      // 这边需要重整所有的滤镜效果
      image.applyFilters()
      canvas.add(image)
      var line = new fabric.Line([10, 20, 115, 110], {
        strokeWidth: 2,
        stroke: 'red',
        originX: 'center',
        originY: 'center'
      });
      canvas.add(line);
    }
    // const imgE2 = document.createElement('img')
    // var imgElement = document.getElementById('my-image');
    fabric.Image.fromURL(logoSrc, function (oImg) {
      canvas.add(oImg);
    });
    var imgElement = document.getElementById('my-image');
    var imgInstance = new fabric.Image(imgElement, {
      left: 100,
      top: 100,
      angle: 30,
      opacity: 0.85
    });
    canvas.add(imgInstance);
    var rect = new fabric.Rect({
      width: 100, height: 200,
      left: 400, top: 500,
      fill: 'yellow',
      angle: -30
    });
    // rect.set('angle', 45);
    rect.animate('right', '500', { onChange: canvas.renderAll.bind(canvas), duration: 1000, easing: fabric.util.ease.easeOutBounce });
    canvas.add(rect); // 添加进去

  }
  useEffect(() => {
    handlecanvas()
  }, [])
  // useEffect(() => {
  //   const canvas = new fabric.Canvas('canvas');
  //   fabric.textureSize = 5120;
  //   //   fabric.loadSVGFromString(
  //   // '<g transform="matrix(1 0 0 1 291.21 191.63)" id="CanvasCircle:01FFY0FCHMX0HV285Q85E3C23A"  >\n<circle style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,255); fill-rule: nonzero; opacity: 1;"  cx="0" cy="0" r="50" />\n</g>\n'



  //   console.log('canvas', canvas);
  //   // // 图片
  //   const imgEl = document.createElement('img')
  //   imgEl.crossOrigin = 'Anonymous' // 让图片能让所有人存取
  //   imgEl.src = './logo.jpg'
  //   imgEl.onload = () => {
  //     const image = new fabric.Image(imgEl, {
  //       scaleX: 0.5,
  //       scaleY: 0.5,
  //       angle: 15,
  //       // angle: 15,
  //       width: 1000,
  //       top: 0,
  //       left: 0
  //     })
  //     //   // 将 filters 实例 push 进 filters 里头
  //     image.filters.push(new fabric.Image.filters.Contrast({ contrast: 0.2 }))
  //     // 这边需要重整所有的滤镜效果
  //     image.applyFilters()
  //     canvas.add(image)
  //     var line = new fabric.Line([10, 20, 115, 110], {
  //       strokeWidth: 2,
  //       stroke: 'red',
  //       originX: 'center',
  //       originY: 'center'
  //     });
  //     canvas.add(line);
  //   }
  //   // const imgE2 = document.createElement('img')
  //   // var imgElement = document.getElementById('my-image');
  //   fabric.Image.fromURL(logoSrc, function (oImg) {
  //     canvas.add(oImg);
  //   });
  //   var imgElement = document.getElementById('my-image');
  //   var imgInstance = new fabric.Image(imgElement, {
  //     left: 100,
  //     top: 100,
  //     angle: 30,
  //     opacity: 0.85
  //   });
  //   canvas.add(imgInstance);
  //   var rect = new fabric.Rect({
  //     width: 100, height: 200,
  //     left: 400, top: 500,
  //     fill: 'yellow',
  //     angle: 30
  //   });
  //   // rect.set('angle', 45);
  //   rect.animate('angle', '-=5', { onChange: canvas.renderAll.bind(canvas) });
  //   canvas.add(rect); // 添加进去


  // }, [])
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];
  const down = () => {
    const dataURL = canvas.toDataURL({
      width: canvas.width,
      height: canvas.height,
      left: 0,
      top: 0,
      format: "png",
    });
    const link = document.createElement("a");
    link.download = "图片.png";
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div>
      <Button onClick={down}>xiazai</Button>
      {/* <img src={logo2Src} id="my-image" > */}
      {/* <img src="my_image.png" id="my-image"></img> */}
      <canvas id="canvas" width="1050" height="600"></canvas>
      <img src={logoSrc} id="my-image" ></img>
    </div>
  );
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;
