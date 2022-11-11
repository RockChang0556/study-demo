/* 
* @File: html2canvas class
* @Author: Rock zhang
* @Date: 2020-03-01 10:09:16
 * @Last Modified by: Rock zhang
 * @Last Modified time: 2020-03-07 21:29:51
*/
import html2canvas from "html2canvas";

const formatImgdata = (canvas, imgType) => {
  let fixtype = function (type) {
      type = type.toLocaleLowerCase().replace(/jpg/i, 'jpeg');
      let r = type.match(/png|jpeg|bmp|gif/)[0];
      return 'image/' + r;
  };
  let imgdata = canvas.toDataURL(imgType);
  imgdata = imgdata.replace(fixtype(imgType), 'image/octet-stream');
  return imgdata
}
const savaFile = function (data, filename) {
  let saveLink = document.createElement('a');
  saveLink.href = data;
  saveLink.download = filename;
  document.body.appendChild(saveLink);
  let event = document.createEvent('MouseEvents');
  event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  saveLink.dispatchEvent(event);
  document.body.removeChild(saveLink);
};

/**
  Html2canvas Class options

  new Html2canvas({
    el: dom,
    file: {
      name: 'download',       // {string} 要下载的图片文件名,不包括后缀,默认 'download'
      imgType: 'png',         // {string} 要下载的图片的类型, png(默认) | jpeg | bmp | gif
    },
    opts = {
      backgroundColor: "#fff",              // {string} 图片背景色
      scale: 2,                             // {number} 缩放倍数
      width: this.targetDom.offsetWidth,    // {number} 图片的宽, 默认dom的宽
      height: this.targetDom.offsetHeight,  // {number} 图片的宽, 默认dom的宽
      allowTaint: true,                     // {boolean} 是否允许跨域图片污染画布
      useCORS: true,                        // {boolean}【重要】是否允许加载跨域图片
      logging: true,                        // {boolean} 日志开关，便于查看html2canvas的内部执行流程
    };
  })

  Events

  getImgData(imgData) 获取二进制的图片数据
    imgData: {string} 二进制的图片数据

  download(imgData) 下载图片
    如果浏览器是IE,需要用户手动右键保存,如果不是则自动弹出下载框
    imgData: {string} 二进制的图片数据
  
  creatImg(dom) 创建 img 标签, 并加入src数据
    dom: {HtmlDom} 带src的图片的dom元素

 */

class Html2canvas {
  targetDom = null
  // 图片默认配置
  file = {
    name: 'download',
    imgType: 'png'
  }
  
  imgData = null // 图片二进制数据

  constructor(options) {
    this.targetDom = options.el
    if (!this.targetDom) {
      throw new Error('DOM access failed!')
    }
    let {file, t2cOpt} = options
    this.file = Object.assign({}, this.file, file)
    this._init(t2cOpt);
  }

  _init(t2cOpt) {
    // html2canvas方法的默认参数
    const opts = {
      backgroundColor: "#fff",
      scale: 2,
      width: this.targetDom.offsetWidth,
      height: this.targetDom.offsetHeight,
      allowTaint: true, // 是否允许跨域图片污染画布
      useCORS: true, // 【重要】是否允许加载跨域图片
      // logging: true, //日志开关，便于查看html2canvas的内部执行流程
    };
    // 用户参数覆盖
    this.t2cOpt = Object.assign({}, opts, t2cOpt)
    // 创建 copyDom, 防止污染页面
    const copyDom = this.targetDom.cloneNode(true)
    copyDom.style.width = this.targetDom.offsetWidth + 'px'
    copyDom.style.height = this.targetDom.offsetHeight + 'px'
    copyDom.style.position = 'fixed'
    copyDom.style.left = '-9999px'
    document.body.appendChild(copyDom)
    
    this.initPromise = new Promise((resolve) => {
      if (this.imgData) {
        resolve()
      } else {
        html2canvas(copyDom, this.t2cOpt).then(canvas => {
          document.body.removeChild(copyDom)
          this.imgData = formatImgdata(canvas, this.file.imgType)
          resolve()
        });
      }
    })
    
  }
  
  getImgData(callback) {
    this.initPromise.then(() => {
      callback && callback(this.imgData)
    })
    return this
  }
  download(callback) {
    this.initPromise.then(() => {
      if (navigator.userAgent.indexOf('MSIE') != -1) {
        alert('您当前的浏览器不支持自动保存，请放在图片区域右键手动存储图片，建议更换浏览器~')
      } else {
        let filename = this.file.name + '.' + this.file.imgType;
        savaFile(this.imgData, filename);
      }
      callback && callback(this.imgData)
    })
    return this
  }
  creatImg(callback) {
    this.initPromise.then(() => {
      let newImg = document.createElement("img");  
      newImg.src = this.imgData; 
      newImg.style.display = 'block';
      newImg.style.width = this.t2cOpt.width + 'px';
      newImg.style.height = this.t2cOpt.height + 'px';
      callback && callback(newImg)
    })
    return this
  }
}
export default Html2canvas