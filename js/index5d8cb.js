!function(n){function e(e){for(var a,o,l=e[0],c=e[1],p=e[2],g=0,d=[];g<l.length;g++)o=l[g],s[o]&&d.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(n[a]=c[a]);for(r&&r(e);d.length;)d.shift()();return i.push.apply(i,p||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],a=!0,l=1;l<t.length;l++){var c=t[l];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),n=o(o.s=t[0]))}return n}var a={},s={index:0},i=[];function o(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=a,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)o.d(t,a,function(e){return n[e]}.bind(null,a));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var r=c;i.push(["./src/com/index.js","common"]),t()}({"./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */function(module,exports){eval('module.exports = {\n  dev_host: "0.0.0.0",\n  dev_port: 8090,\n  favicon: \'./src/images/favicon.ico\',\n  commonname: "common",\n  cssOutPath: "./css",\n  cssPublicPath: "../",\n  fontsOutPath: "static/fonts",\n  imageOutPath: "static/img",\n  outputRoot: \'//cdn.m.tencent.com/hr/h5/maytencent/\',\n  entrys: [{\n    title: "index",\n    name: "index",\n    entry: "./src/com/index.js",\n    template: \'./src/htmls/index.html\',\n    filename: "./index.html"\n  }],\n  module: {\n    rules: [{\n      test: /\\.js$/,\n      exclude: /(node_modules|bower_components)/,\n      use: {\n        loader: \'babel-loader\',\n        options: {\n          presets: [\'@babel/preset-env\']\n        }\n      }\n    }]\n  },\n  providers: [{\n    Progress: "ez-progress"\n  }]\n};\n\n//# sourceURL=webpack:///./config/config.js?')},"./src/com/index.js":
/*!**************************!*\
  !*** ./src/com/index.js ***!
  \**************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_common_common_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/common/common.scss */ \"./src/styles/common/common.scss\");\n/* harmony import */ var _styles_common_common_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_common_common_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ \"./config/config.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nlet baseUrl = _config_config__WEBPACK_IMPORTED_MODULE_2__[\"outputRoot\"];\nif (true) {\n  baseUrl = '';\n}\nconsole.log('config:', _config_config__WEBPACK_IMPORTED_MODULE_2__);\ndocument.body.addEventListener('touchstart', function () {\n  //...空函数即可\n});\n//阻止\nlet container = document.getElementsByClassName('page-wrap')[0];\ncontainer.addEventListener('touchmove', function (e) {\n  e.stopPropagation();\n  e.preventDefault();\n});\n\n/****************图片音乐资源 预加载***********************/\nlet imgArr = [baseUrl + 'static/img/loading.png', baseUrl + 'static/img/loading_h.png', baseUrl + 'static/img/ps_1.png', baseUrl + 'static/img/ps_2.png', baseUrl + 'static/img/ps_3.png', baseUrl + 'static/img/gl_box1.png', baseUrl + 'static/img/gl_pop_box.png', baseUrl + 'static/img/gl_pop_box_succes.png', baseUrl + 'static/img/hr.gif', baseUrl + 'static/img/gl_people.gif', baseUrl + 'static/img/mian_pic.gif', baseUrl + 'static/img/bg2.png', baseUrl + 'static/img/mian_pic.png', baseUrl + 'static/img/1.png', baseUrl + 'static/img/237.png', baseUrl + 'static/img/700.png', baseUrl + 'static/img/818.png', baseUrl + 'static/img/gk_page.png', baseUrl + 'static/img/people.png', baseUrl + 'static/img/resume.png', baseUrl + 'static/img/page3_devices.png', baseUrl + 'static/img/page3_leaf.png', baseUrl + 'static/img/page3_left.png', baseUrl + 'static/img/page3_right.png', baseUrl + 'static/img/C_B_Screen.png', baseUrl + 'static/img/Computer.gif', baseUrl + 'static/img/flower.gif', baseUrl + 'static/img/Table.png', baseUrl + 'static/img/spot.png', baseUrl + 'static/img/page5_champagne.png', baseUrl + 'static/img/page5_champagne_on.gif', baseUrl + 'static/img/lottery_people.gif', baseUrl + 'static/img/lottery_people.gif', baseUrl + 'static/img/lottery_1.png', baseUrl + 'static/img/lottery_2.png', baseUrl + 'static/img/lottery_box.png', baseUrl + 'static/img/lottery_circle.png', baseUrl + 'static/img/lottery_close.png', baseUrl + 'static/img/lottery_go.png', baseUrl + 'static/img/lottery_go_gray.png', baseUrl + 'static/img/lottery_line.png', baseUrl + 'static/img/lottery_logo.png', baseUrl + 'static/img/lottery_people_1.png', baseUrl + 'static/img/lottery_people_2.png', baseUrl + 'static/img/lottery_pop.png', baseUrl + 'static/img/lottery_text.png'];\n\n/**\r\n * 首次打开资源加载\r\n * **/\nvar loader = new resLoader({\n  resources: imgArr,\n  onStart: function (total) {\n    //console.log('start:' + total);\n  },\n  onProgress: function (current, total) {\n    //console.log(current + '/' + total);\n    var percent = current / total * 100;\n    percent = Math.ceil(percent);\n    $('#loading').html(percent + '%');\n\n    $('.J_loading_h').css({ height: percent + '%' });\n  },\n  onComplete: function (total) {\n    //加载完成时\n    console.log(total);\n    /**\r\n     * 创建音频标签\r\n     * */\n    $('body audio').remove();\n    //$('body').append('<audio id=\"audio\" src=\"assets/start.mp3\"></audio>');\n    $('.load-box').hide();\n    let audioElm = document.getElementById('audio');\n    /*audioElm.addEventListener(\"ended\",function () {\r\n      audioElm.src = 'assets/bg.mp3';\r\n      audioElm.play();\r\n    });*/\n  }\n});\n\nloader.start();\n\n$(function () {\n\n  /**继续游戏**/\n  $('.page-wrap').on('click', '.J_btn_continue', function () {\n    $('.gl-pop-wrap').hide();\n    $('.gl-pop-bg').hide();\n  });\n\n  /**提示**/\n  $('.page-wrap').on('click', '.J_btn_notice', function () {\n    advFn();\n    setTimeout(function () {\n      $('.gl-pop-wrap').show();\n      $('.gl-pop-bg').show();\n    }, 500);\n  });\n  /***插入广告**/\n  function advFn() {\n    //插入广告\n    let ad_time = 5; //广告时间\n    let picNum = 3; //广告照片数量\n    let random = Math.ceil(Math.random() * picNum);\n    $('.gl-ad-pic').show();\n    $('.gl-ad-pic .ad-time').show();\n    $('.gl-ad-pic .pic').removeClass('pic_1 pic_2 pic_3').addClass('pic_' + random);\n    $('.gl-ad-pic .ad-time span').html(ad_time);\n    let ad_timer = setInterval(function () {\n      ad_time--;\n      $('.gl-ad-pic .ad-time span').html(ad_time);\n      if (ad_time <= 0) {\n        $('.gl-ad-pic .ad-time').hide();\n        $('.gl-ad-pic').hide();\n        clearInterval(ad_timer);\n      }\n    }, 1000);\n    /*$('.gl-ad-pic').on('click','.btn-close',function () {\r\n      $(this).parents('.gl-ad-pic').hide();\r\n    });*/\n  }\n\n  /**重玩**/\n  $('.page-wrap').on('click', '.J_btn_replay', function () {\n    $('.gl-pop-wrap').hide();\n    $('.gl-pop-bg').hide();\n    let thatIndex = $('.page-wrap .pages').not('.gl-hide').index();\n    if (thatIndex == 2) {\n      gl_seeMy = false;\n      loadLevel2();\n      level2();\n    } else if (thatIndex == 3) {\n      gl_seeMy = false;\n      level3();\n    } else if (thatIndex == 4) {\n      gl_seeMy = false;\n      level4();\n    } else if (thatIndex == 5) {\n      gl_seeMy = false;\n      level5();\n    } else {\n      gl_seeMy = false;\n    }\n  });\n\n  /**开始游戏**/\n  $('.page-wrap').on('click', '.J_btn_start', function () {\n    //console.log($(this).parents('.pages'))\n    $(this).parents('.pages').addClass('gl-hide');\n    $(this).parents('.pages').next().removeClass('gl-hide');\n  });\n\n  /**跳过机会**/\n  function skipFn() {\n    let skipNum = 2; //跳过机会次数\n    $('.skip-num').html(skipNum);\n    $('.page-wrap').on('click', '.gl-btn-skip', function () {\n      skipNum--;\n      $('.skip-num').html(skipNum);\n      if (skipNum < 0) {\n        $('.skip-num').html(0);\n      } else {\n        $(this).parents('.pages').addClass('gl-hide');\n        $(this).parents('.pages').next().removeClass('gl-hide');\n        let thatIndex = $('.page-wrap .pages').not('.gl-hide').index();\n        console.log('跳过机会', thatIndex);\n        if (thatIndex == 2) {\n          level2();\n        } else if (thatIndex == 3) {\n          gl_seeMy = false;\n          level3();\n        } else if (thatIndex == 5) {\n          gl_seeMy = false;\n          level5();\n        } else {\n          window.removeEventListener('devicemotion', deviceMotionHandler, false);\n          gl_seeMy = false;\n        }\n      }\n    });\n  }\n  skipFn();\n\n  /**上一关**/\n  $('.page-wrap').on('click', '.gl-btn-pre', function () {\n    $(this).parents('.pages').addClass('gl-hide');\n    $(this).parents('.pages').prev().removeClass('gl-hide');\n    let thatIndex = $('.page-wrap .pages').not('.gl-hide').index();\n    if (thatIndex == 2) {\n      loadLevel2();\n      level2();\n    } else if (thatIndex == 3) {\n      gl_seeMy = false;\n      level3();\n    } else if (thatIndex == 4) {\n      level4();\n      gl_seeMy = false;\n    } else {\n      //console.log('上一关', thatIndex)\n      gl_seeMy = false;\n    }\n  });\n\n  /**下一关**/\n  $('.page-wrap').on('click', '.J_btn_next', function () {\n    $('.gl-pop-wrap').hide();\n    $('.gl-pop-bg').hide();\n    let thatIndex = $('.page-wrap .pages').not('.gl-hide').index();\n    $('.page-wrap .pages').not('.gl-hide').addClass('gl-hide');\n    $('.page-wrap .pages').eq(thatIndex).next().removeClass('gl-hide');\n    console.log('下一关', thatIndex);\n    if (thatIndex == 1) {\n      level2();\n    } else if (thatIndex == 2) {\n      gl_seeMy = false;\n      level3();\n    } else if (thatIndex == 4) {\n      gl_seeMy = false;\n      setTimeout(function () {\n        level5();\n      }, 1000);\n    } else if (thatIndex == 5) {\n      gl_seeMy = false;\n      window.removeEventListener('devicemotion', deviceMotionHandler, false);\n    }\n  });\n\n  /**第一关**/\n  function level1() {\n    $('.page-1 .mun').on('click', function () {\n      $(this).find('.state').fadeIn();\n      $(this).find('.state').delay(500).fadeOut();\n    });\n    $('.page-1 .mun_2').on('click', function () {\n      setTimeout(function () {\n        successPop('没错！就是个头最大的~', '11.11--腾讯公司成立于1998.11.11 <br/>8.18--中国人力资源日、腾讯t站体验日<br/>00700--腾讯股票代码<br/>237--腾讯在世界500强中的排名');\n      }, 800);\n    });\n    $('.page-1 .J_btn_notice').on('click', function () {\n      reminderPop('不一定是数值最大的哦!');\n    });\n  }\n  /**第二关**/\n  function level2() {\n    $(\".Tdrag_Box .Tdrag_\").on('mousedown', function (e) {\n      var event = e || window.event;\n      var target = event.target || event.srcElement;\n      var disX = event.clientX - target.offsetLeft;\n      var disY = event.clientY - target.offsetTop;\n      document.onmousemove = function (event) {\n        target.style.left = event.clientX - disX + 'px';\n        target.style.top = event.clientY - disY + 'px';\n        document.onmouseup = function () {\n          document.onmousedown = null;\n          document.onmousemove = null;\n        };\n      };\n    });\n\n    /*拖动   加载（ItemDrag.js）*/\n    let parent = document.getElementsByClassName('Tdrag_Box')[0];\n    let childs = document.getElementsByClassName('Tdrag_');\n    let activeBox = document.getElementsByClassName(\"TdragActive\")[0];\n    let drag = new ItemDrag();\n    drag.bind(parent, childs, activeBox);\n    drag.start();\n\n    //对父容器添加抬起事件\n    window.addEventListener('touchend', () => {\n      drag.touchEnd();\n      if (gl_seeMy) {\n        setTimeout(function () {\n          successPop('把“我的简历”挪到面试官眼前，就是正确答案~', '还在肉眼识别简历？打开招聘小助手，海量简历，一键筛选，精准搜索，省时省力');\n          gl_seeMy = false;\n        }, 400);\n      }\n    });\n\n    $('.page-2 .J_btn_notice').on('click', function () {\n      reminderPop('简历是可以移动的哦，放到“眼前”才能看得见！');\n    });\n  }\n  /**重新加载 关卡2**/\n  function loadLevel2() {\n    $('.page-2 .gl-body-content').html('');\n    $('.page-2 .gl-body-content').html('<div class=\"gl-subject\">怎么让面试官看到“我的简历”？</div>\\n' + '                <div class=\"peopleImg pa\"></div>\\n' + '                <div class=\"Tdrag_Box pa\">\\n' + '                    <div class=\"TdragActive pa\"></div>\\n' + '                    <div class=\"Tdrag_ resumeImg_ pa\"></div>\\n' + '                    <div class=\"Tdrag_ gk_page page1 pa\"></div>\\n' + '                    <div class=\"Tdrag_ gk_page page2 pa\"></div>\\n' + '                    <div class=\"Tdrag_ gk_page page3 pa\"></div>\\n' + '                    <div class=\"Tdrag_ gk_page page4 pa\"></div>\\n' + '                    <div class=\"Tdrag_ gk_page page5 pa\"></div>\\n' + '                </div>');\n  }\n  level1();\n  /**第三关**/\n  function level3() {\n    let page3_num = $('#page3_num').html();\n    let $page_3 = $('.page-3');\n    page3_num = 12;\n    $('#page3_num').html(12);\n    $page_3.find('.leaf').css({\n      left: '70%',\n      top: '50%'\n    });\n    /*拖动   加载（ItemDrag.js）*/\n    let parent = document.getElementsByClassName('device-box')[0];\n    let childs = document.getElementsByClassName('leaf');\n    let activeBox = document.getElementsByClassName(\"no\")[0];\n\n    let drag2 = new ItemDrag();\n    drag2.bind(parent, childs, activeBox);\n    drag2.start();\n    //减\n    $('.page-3 .J_btn_small').off().on('click', function () {\n      page3_num--;\n      if (page3_num <= 0) {\n        page3_num = 0;\n      }\n      $('#page3_num').html(page3_num);\n    });\n    //加\n    $('.page-3 .J_btn_add').off().on('click', function () {\n      page3_num++;\n      if (page3_num >= 100) {\n        page3_num = 100;\n      }\n      $('#page3_num').html(page3_num);\n    });\n    //清除\n    $('.page-3 .J_btn_clear').off().on('click', function () {\n      page3_num = 0;\n      $('#page3_num').html(0);\n    });\n    //确定\n    $('.page-3 .J_btn_sure').off().on('click', function () {\n      console.log(page3_num);\n      $page_3.find('.state').removeClass('success err');\n      if (page3_num == 11) {\n        $page_3.find('.state').addClass('success').fadeIn();\n        $page_3.find('.state').addClass('success').delay(500).fadeOut();\n        setTimeout(function () {\n          successPop('把植物挪开就好啦~', 'T站自主仓可7*24小时办理社保、证明开具、物品领取与发放等业务');\n        }, 800);\n      } else {\n        $page_3.find('.state').addClass('err').fadeIn();\n        $page_3.find('.state').addClass('err').delay(500).fadeOut();\n      }\n    });\n    $('.page-3 .J_btn_notice').off().on('click', function () {\n      reminderPop('植物可能暗藏玄机哦，挪动试试');\n    });\n  }\n\n  /**第四关**/\n  function level4() {\n    let $page_4 = $('.page-4');\n\n    $page_4.find('.computer').hide();\n    $page_4.on('click', '.J_btn_notice', function () {\n      reminderPop('请用两只手指按住电线两端');\n    });\n    /**关卡4  电路连接 加载（Link.js）**/\n    class Link {\n      constructor() {\n        this.init();\n      }\n\n      init() {\n        this.shixian();\n      }\n\n      shixian() {\n        let that = this;\n        this.point1Active = false;\n        this.point2Active = false;\n\n        this.point1_dom = document.getElementsByClassName('TouchAreaL')[0];\n        this.point2_dom = document.getElementsByClassName('TouchAreaR')[0];\n        this.point1_dom.addEventListener(\"touchstart\", function (e) {\n          that.point1Active = true;\n          that.activeJudage();\n        });\n        this.point2_dom.addEventListener(\"touchstart\", function (e) {\n          console.log('point2 active');\n          that.point2Active = true;\n          that.activeJudage();\n        });\n        this.point1_dom.addEventListener(\"touchend\", function (e) {\n          console.log('point1 enabled');\n          that.point1Active = false;\n        });\n        this.point2_dom.addEventListener(\"touchend\", function (e) {\n          console.log('point2 enabled');\n          that.point2Active = false;\n        });\n      }\n\n      /**\r\n       * 激活状态判断\r\n       */\n      activeJudage() {\n        if (this.point2Active && this.point1Active) {\n          this.point1Active = false;\n          this.point2Active = false;\n          let computer = document.getElementsByClassName('computer')[0];\n          computer.style.display = 'block';\n          setTimeout(function () {\n            successPop('没错，人体是可以导电的哦！', '只要不断电，小T不掉线！<br/>小T是7*24小时在线的哦，不论是HR服务（原8008）还是与hr系统相关问题（原8002），它都会为你解答');\n          }, 2200);\n        }\n      }\n    }\n    let page4_link = new Link();\n  }\n  level4();\n\n  let deviceMotionHandler;\n  function level5() {\n    let $page_5 = $('.page-5');\n    $('.page-5').find('.champagne').eq(1).removeClass('open');\n    /*window.addEventListener(\"deviceorientation\",function(e){\r\n      alert(e.alpha+e.beta+e.gamma)\r\n    });*/\n    let shakeThreshold = 1000; // 定义一个摇动的阈值\n    let lastUpdate = 0; // 记录上一次摇动的时间\n    let x, y, z, lastX, lastY, lastZ; // 定义x、y、z记录三个轴的数据以及上一次触发的数据\n    // 监听传感器运动事件\n    if (window.DeviceMotionEvent) {\n      window.addEventListener('devicemotion', deviceMotionHandler, false);\n    } else {}\n    //浏览器不支持DeviceMotion\n    //alert('天呐，你的手机竟然还不支持摇一摇');\n\n    // 运动传感器处理\n    deviceMotionHandler = function (eventData) {\n      let acceleration = eventData.accelerationIncludingGravity; // 获取含重力的加速度\n      let curTime = new Date().getTime();\n      // 100毫秒进行一次位置判断\n      if (curTime - lastUpdate > 100) {\n        let diffTime = curTime - lastUpdate;\n        lastUpdate = curTime;\n        x = acceleration.x;\n        y = acceleration.y;\n        z = acceleration.z;\n        let speed = Math.abs(x + y + z - lastX - lastY - lastZ) / diffTime * 10000;\n        if (speed > shakeThreshold) {\n          //alert(\"摇一摇触发\")\n          $('.page-5').find('.champagne').eq(1).addClass('open');\n          setTimeout(function () {\n            window.removeEventListener('devicemotion', deviceMotionHandler, false);\n            successPop('恭喜你完成所有答题，点击下一关即可进入抽奖！', '8月18日T站周年庆&体验日，快来一起愉快玩耍吧~');\n          }, 2500);\n        }\n        lastX = x;\n        lastY = y;\n        lastZ = z;\n      }\n    };\n\n    $page_5.on('click', '.J_btn_notice', function () {\n      reminderPop('手机摇一摇，真的香槟会冒泡哦');\n    });\n  }\n  /**闯关成功弹框**/\n  function successPop(detail, tip) {\n    $('.gl-pop-wrap').show();\n    $('.gl-pop-bg').show();\n    $('.gl-pop-wrap').addClass('success');\n    $('.gl-pop-wrap .title').html('成功闯关');\n    $('.gl-pop-wrap .detail').html(detail);\n    $('.gl-pop-wrap .tip').html('<div class=\"tip\">\\n' + '                    <div>Tips:</div>\\n' + '                    <div class=\"tip-des\">\\n' + '                        <div>' + tip + '</div>\\n' + '                    </div>\\n' + '                </div>');\n  }\n  /**温馨提示框**/\n  function reminderPop(detail) {\n    $('.gl-pop-wrap').removeClass('success');\n    $('.gl-pop-wrap .title').html('温馨提示');\n    $('.gl-pop-wrap .detail').html(detail);\n    $('.gl-pop-wrap .tip').html('');\n  }\n\n  /**抽奖**/\n  function luckDraw() {\n    let $pageLottery = $('.page-lottery');\n    let valArr = [];\n    //选中\n    $pageLottery.on('click', '.select-box', function () {\n      $.each($(\"input[class='select-box']:checked\"), function (i) {\n        //alert(\"你选了：\"+ $('input[type=checkbox]:checked').length+\"个，其中有：\"+$(this).val());\n        //console.log('选中',$('input[type=checkbox]:checked').length);\n        if ($('input[type=checkbox]:checked').length > 0) {\n          $pageLottery.find('.go').addClass('on');\n        }\n        valArr.push($(this).val());\n        console.log(valArr);\n      });\n      //没选中\n      $(\"input[class='select-box']:not(:checked)\").each(function () {\n        //console.log('没选中',$('input[type=checkbox]:not(:checked)').length);\n        if ($('input[type=checkbox]:not(:checked)').length == 6) {\n          $pageLottery.find('.go').removeClass('on');\n        }\n      });\n    });\n    $pageLottery.find('.go').on('click', function () {\n      if ($(this).hasClass('on')) {\n        $.ajax({\n          url: glConfig.requestUrl,\n          data: { \"data\": valArr },\n          dataType: 'json',\n          success: function (res) {\n            // console.log(res)\n            rotateFn(res[1].Level);\n            $pageLottery.find('.go').off();\n          }\n        });\n      } else {}\n    });\n  }\n  /**中奖弹框**/\n  function popLucky(info) {\n    setTimeout(function () {\n      let $pop_lucky = $('.gl-pop-wrap-lucky');\n      $('.gl-pop-bg').show();\n      $pop_lucky.show();\n      $pop_lucky.addClass('success');\n      $pop_lucky.find('.detail').html(info);\n      $pop_lucky.find('.tip-des').html('关于礼品发放，请留意邮件或企业微信后续通知');\n    }, 5500);\n  }\n  function noPopLucky(info) {\n    setTimeout(function () {\n      let $pop_lucky = $('.gl-pop-wrap-lucky');\n      $('.gl-pop-bg').show();\n      $pop_lucky.show();\n      $pop_lucky.removeClass('success');\n      $pop_lucky.find('.detail').html(info);\n      $pop_lucky.find('.tip-des').html('感谢您的支持！所有用户仅供一次抽奖机会，谢谢！');\n    }, 5500);\n  }\n  $('.gl-pop-wrap-lucky').on('click', '.btn-close', function () {\n    $(this).parents('.gl-pop-wrap-lucky').hide();\n    $('.gl-pop-bg').hide();\n  });\n  /**旋转**/\n  function rotateFn(level) {\n    let $pageLottery = $('.page-lottery');\n    let rotateAngel = 360 * 10;\n    function ang(deg) {\n      let totalAngel = deg + rotateAngel;\n      $pageLottery.find('.circle').css({\n        'transition': 'transform 5s ease-out',\n        'transform': 'rotate(' + totalAngel + 'deg)'\n      });\n    }\n    switch (level) {\n      case 0:\n        //thanks\n        ang(330);\n        noPopLucky('别灰心，好运在后头');\n        break;\n      case 1:\n        //一等奖\n        ang(90);\n        popLucky('“一等奖”');\n        break;\n      case 2:\n        //二等奖\n        ang(270);\n        popLucky('“二等奖”');\n        break;\n      case 3:\n        //三等奖\n        ang(150);\n        popLucky('“三等奖”');\n        break;\n      case 4:\n        //四等奖\n        ang(30);\n        popLucky('“四等奖”');\n        break;\n      case 5:\n        //五等奖\n        ang(210);\n        popLucky('“五等奖”');\n        break;\n    }\n  }\n  luckDraw();\n});\n\n//# sourceURL=webpack:///./src/com/index.js?")},"./src/styles/common/common.scss":
/*!***************************************!*\
  !*** ./src/styles/common/common.scss ***!
  \***************************************/
/*! no static exports found */function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/styles/common/common.scss?")},"./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/styles/index.scss?")}});