!function(n){function e(e){for(var a,o,l=e[0],c=e[1],p=e[2],d=0,_=[];d<l.length;d++)o=l[d],i[o]&&_.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(n[a]=c[a]);for(r&&r(e);_.length;)_.shift()();return s.push.apply(s,p||[]),t()}function t(){for(var n,e=0;e<s.length;e++){for(var t=s[e],a=!0,l=1;l<t.length;l++){var c=t[l];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),n=o(o.s=t[0]))}return n}var a={},i={index:0},s=[];function o(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=a,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)o.d(t,a,function(e){return n[e]}.bind(null,a));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var r=c;s.push(["./src/com/index.js","common"]),t()}({"./src/com/index.js":
/*!**************************!*\
  !*** ./src/com/index.js ***!
  \**************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_common_common_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/common/common.scss */ \"./src/styles/common/common.scss\");\n/* harmony import */ var _styles_common_common_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_common_common_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\ndocument.body.addEventListener('touchstart', function () {\n  //...空函数即可\n});\n//阻止\nlet container = document.getElementsByClassName('page-wrap')[0];\ncontainer.addEventListener('touchmove', function (e) {\n  e.stopPropagation();\n  e.preventDefault();\n});\n$(function () {\n  /**继续游戏**/\n  $('.page-wrap').on('click', '.J_btn_continue', function () {\n    $('.gl-pop-wrap').hide();\n    $('.gl-pop-bg').hide();\n  });\n\n  /**提示**/\n  $('.page-wrap').on('click', '.J_btn_notice', function () {\n    $('.gl-pop-wrap').show();\n    $('.gl-pop-bg').show();\n  });\n\n  /**重玩**/\n  $('.page-wrap').on('click', '.J_btn_replay', function () {\n    $('.gl-pop-wrap').hide();\n    $('.gl-pop-bg').hide();\n    let thatIndex = $('.page-wrap .pages').not('.gl-hide').index();\n    if (thatIndex == 2) {\n      gl_seeMy = false;\n      loadLevel2();\n      level2();\n    } else if (thatIndex == 3) {\n      level3();\n    } else if (thatIndex == 4) {\n      level4();\n    } else if (thatIndex == 5) {\n      level5();\n    }\n  });\n\n  /**开始游戏**/\n  $('.page-wrap').on('click', '.J_btn_start', function () {\n    //console.log($(this).parents('.pages'))\n    $(this).parents('.pages').addClass('gl-hide');\n    $(this).parents('.pages').next().removeClass('gl-hide');\n  });\n\n  /**跳过机会**/\n  $('.page-wrap').on('click', '.gl-btn-skip', function () {});\n  /**上一关**/\n\n  $('.page-wrap').on('click', '.gl-btn-pre', function () {\n    $(this).parents('.pages').addClass('gl-hide');\n    $(this).parents('.pages').prev().removeClass('gl-hide');\n    let thatIndex = $('.page-wrap .pages').not('.gl-hide').index();\n    if (thatIndex == 2) {\n      loadLevel2();\n      level2();\n    } else if (thatIndex == 3) {\n      gl_seeMy = false;\n      level3();\n    } else if (thatIndex == 4) {\n      level4();\n    } else {\n      gl_seeMy = false;\n    }\n  });\n\n  /**下一关**/\n  $('.page-wrap').on('click', '.J_btn_next', function () {\n    $('.gl-pop-wrap').hide();\n    $('.gl-pop-bg').hide();\n    let thatIndex = $('.page-wrap .pages').not('.gl-hide').index();\n    $('.page-wrap .pages').not('.gl-hide').addClass('gl-hide');\n    $('.page-wrap .pages').eq(thatIndex).next().removeClass('gl-hide');\n    if (thatIndex == 1) {\n      level2();\n    } else if (thatIndex == 2) {\n      gl_seeMy = false;\n      level3();\n    } else if (thatIndex == 4) {\n      gl_seeMy = false;\n      level5();\n    } else {\n      gl_seeMy = false;\n    }\n  });\n\n  /**第一关**/\n  function level1() {\n    $('.page-1 .mun_2').on('click', function () {\n      $('.gl-pop-wrap').show();\n      $('.gl-pop-bg').show();\n      $('.gl-pop-wrap').addClass('success');\n      $('.gl-pop-wrap .title').html('成功闯关');\n      $('.gl-pop-wrap .detail').html('没错！就是个头最大的~');\n      $('.gl-pop-wrap .tip').html('<div class=\"tip\">\\n' + '                    <div>Tips:</div>\\n' + '                    <div class=\"tip-des\">\\n' + '                        <div>11.11--腾讯公司成立于1998.11.11</div>\\n' + '                        <div>8.18--中国人力资源日、腾讯t站体验日</div>\\n' + '                        <div>0700--腾讯股票代码</div>\\n' + '                        <div>237--腾讯在世界500强中的排名</div>\\n' + '                    </div>\\n' + '                </div>');\n    });\n    $('.page-1 .J_btn_notice').on('click', function () {\n      reminderPop('不一定是数值最大的哦!');\n    });\n  }\n  /**第二关**/\n  function level2() {\n    $(\".Tdrag_Box .Tdrag_\").on('mousedown', function (e) {\n      var event = e || window.event;\n      var target = event.target || event.srcElement;\n      var disX = event.clientX - target.offsetLeft;\n      var disY = event.clientY - target.offsetTop;\n      document.onmousemove = function (event) {\n        target.style.left = event.clientX - disX + 'px';\n        target.style.top = event.clientY - disY + 'px';\n        document.onmouseup = function () {\n          document.onmousedown = null;\n          document.onmousemove = null;\n        };\n      };\n    });\n\n    /*拖动   加载（ItemDrag.js）*/\n    let parent = document.getElementsByClassName('Tdrag_Box')[0];\n    let childs = document.getElementsByClassName('Tdrag_');\n    let activeBox = document.getElementsByClassName(\"TdragActive\")[0];\n\n    let drag = new ItemDrag();\n    drag.bind(parent, childs, activeBox);\n    drag.start();\n    //对父容器添加抬起事件\n    window.addEventListener('touchend', () => {\n      drag.touchEnd();\n      if (gl_seeMy) {\n        successPop('把“我的简历”挪到面试官眼前，就是正确答案~', '还在肉眼识别简历？打开招聘小助手，海量简历，一键筛选，精准搜索，省时省力');\n      }\n    });\n\n    $('.page-2 .J_btn_notice').on('click', function () {\n      reminderPop('简历是可以移动的哦，放到“眼前”才能看得见！');\n    });\n  }\n  /**重新加载 关卡2**/\n  function loadLevel2() {\n    $('.page-2').html('');\n    $('.page-2').html('<div class=\"gl-pass-box\">\\n' + '            <div class=\"top-pic\"></div>\\n' + '            <div class=\"bottom-pic\"></div>\\n' + '            <div class=\"gl-no\">关卡：2</div>\\n' + '            \x3c!--题目内容区 S--\x3e\\n' + '            <div class=\"gl-body-content gl-border\">\\n' + '                <div class=\"gl-subject\">怎么让面试官看到“我的简历”？</div>\\n' + '                <div class=\"peopleImg pa\"></div>\\n' + '                <div class=\"Tdrag_Box pa\">\\n' + '                    <div class=\"TdragActive pa\"></div>\\n' + '                    <div class=\"Tdrag_ resumeImg_ pa\"></div>\\n' + '                    <div class=\"Tdrag_ gk_page page1 pa\"></div>\\n' + '                    <div class=\"Tdrag_ gk_page page2 pa\"></div>\\n' + '                    <div class=\"Tdrag_ gk_page page3 pa\"></div>\\n' + '                    <div class=\"Tdrag_ gk_page page4 pa\"></div>\\n' + '                    <div class=\"Tdrag_ gk_page page5 pa\"></div>\\n' + '                </div>\\n' + '            </div>\\n' + '            \x3c!--题目内容区 E--\x3e\\n' + '            <div class=\"gl-penguin\"></div>\\n' + '            <div class=\"gl-people\"></div>\\n' + '            <div class=\"gl-btn gl-btn-pre\">上一关</div>\\n' + '            <div class=\"gl-btn gl-btn-notice J_btn_notice\">提示</div>\\n' + '            <div class=\"gl-btn gl-btn-skip\">跳过机会<span>[2/2]</span></div>\\n' + '        </div>');\n  }\n  level1();\n  /**第三关**/\n  function level3() {\n    let page3_num = $('#page3_num').html();\n    let $page_3 = $('.page-3');\n    page3_num = 12;\n    $('#page3_num').html(12);\n    $page_3.find('.leaf').css({\n      left: '70%',\n      top: '50%'\n    });\n    /*拖动   加载（ItemDrag.js）*/\n    let parent = document.getElementsByClassName('device-box')[0];\n    let childs = document.getElementsByClassName('leaf');\n    let activeBox = document.getElementsByClassName(\"no\")[0];\n\n    let drag2 = new ItemDrag();\n    drag2.bind(parent, childs, activeBox);\n    drag2.start();\n    //减\n    $page_3.on('click', '.J_btn_small', function () {\n      page3_num--;\n      if (page3_num <= 0) {\n        page3_num = 0;\n      }\n      $('#page3_num').html(page3_num);\n    });\n    //加\n    $page_3.on('click', '.J_btn_add', function () {\n      page3_num++;\n      if (page3_num >= 100) {\n        page3_num = 100;\n      }\n      $('#page3_num').html(page3_num);\n    });\n    //清除\n    $page_3.on('click', '.J_btn_clear', function () {\n      page3_num = 0;\n      $('#page3_num').html(0);\n    });\n    //确定\n    $page_3.on('click', '.J_btn_sure', function () {\n      if (page3_num == 11) {\n        successPop('把植物挪开就好啦~', 'T站自主仓可7*24小时办理社保、证明开具、物品领取与发放等业务');\n      }\n    });\n    $page_3.on('click', '.J_btn_notice', function () {\n      reminderPop('植物可能暗藏玄机哦，挪动试试');\n    });\n  }\n\n  /**第四关**/\n  function level4() {\n    let $page_4 = $('.page-4');\n\n    $page_4.find('.computer').hide();\n    $page_4.on('click', '.J_btn_notice', function () {\n      reminderPop('请用两只手指按住电线两端');\n    });\n    /**关卡4  电路连接 加载（Link.js）**/\n    class Link {\n      constructor() {\n        this.init();\n      }\n\n      init() {\n        this.shixian();\n      }\n\n      shixian() {\n        let that = this;\n        this.point1Active = false;\n        this.point2Active = false;\n\n        this.point1_dom = document.getElementsByClassName('TouchAreaL')[0];\n        this.point2_dom = document.getElementsByClassName('TouchAreaR')[0];\n        this.point1_dom.addEventListener(\"touchstart\", function (e) {\n          that.point1Active = true;\n          that.activeJudage();\n        });\n        this.point2_dom.addEventListener(\"touchstart\", function (e) {\n          console.log('point2 active');\n          that.point2Active = true;\n          that.activeJudage();\n        });\n        this.point1_dom.addEventListener(\"touchend\", function (e) {\n          console.log('point1 enabled');\n          that.point1Active = false;\n        });\n        this.point2_dom.addEventListener(\"touchend\", function (e) {\n          console.log('point2 enabled');\n          that.point2Active = false;\n        });\n      }\n\n      /**\r\n       * 激活状态判断\r\n       */\n      activeJudage() {\n        if (this.point2Active && this.point1Active) {\n          this.point1Active = false;\n          this.point2Active = false;\n          successPop('没错，人体是可以导电的哦！', '只要不断电，小T不掉线！<br/>小T是7*24小时在线的哦，不论是HR服务（原8008）还是与hr系统相关问题（原8002），它都会为你解答');\n          let computer = document.getElementsByClassName('computer')[0];\n          computer.style.display = 'block';\n        }\n      }\n    }\n    let page4_link = new Link();\n  }\n  level4();\n\n  function level5() {\n    let $page_5 = $('.page-5');\n    $('.page-5').find('.champagne').eq(1).removeClass('open');\n    /*window.addEventListener(\"deviceorientation\",function(e){\r\n      alert(e.alpha+e.beta+e.gamma)\r\n    });*/\n    let isTrue = true;\n    if (isTrue) {\n      var shakeThreshold = 1000; // 定义一个摇动的阈值\n      var lastUpdate = 0; // 记录上一次摇动的时间\n      var x, y, z, lastX, lastY, lastZ; // 定义x、y、z记录三个轴的数据以及上一次触发的数据\n      // 监听传感器运动事件\n      if (window.DeviceMotionEvent) {\n        if (isTrue) {\n          window.addEventListener('devicemotion', deviceMotionHandler, false);\n        }\n      } else {}\n      //浏览器不支持DeviceMotion\n      //alert('天呐，你的手机竟然还不支持摇一摇');\n\n      // 运动传感器处理\n      function deviceMotionHandler(eventData) {\n        var acceleration = eventData.accelerationIncludingGravity; // 获取含重力的加速度\n        var curTime = new Date().getTime();\n        // 100毫秒进行一次位置判断\n        if (curTime - lastUpdate > 100) {\n          var diffTime = curTime - lastUpdate;\n          lastUpdate = curTime;\n          x = acceleration.x;\n          y = acceleration.y;\n          z = acceleration.z;\n          var speed = Math.abs(x + y + z - lastX - lastY - lastZ) / diffTime * 10000;\n          if (speed > shakeThreshold) {\n            //alert(\"摇一摇触发\")\n            $('.page-5').find('.champagne').eq(1).addClass('open');\n            setTimeout(function () {\n              isTrue = false;\n              successPop('恭喜你完成所有答题，点击下一关即可进入抽奖！', '8月18日T站周年庆&体验日，快来一起愉快玩耍吧~');\n            }, 500);\n          }\n          lastX = x;\n          lastY = y;\n          lastZ = z;\n        }\n      }\n    }\n\n    $page_5.on('click', '.J_btn_notice', function () {\n      reminderPop('喝前摇一摇，真的香槟会冒泡哦！');\n    });\n  }\n  /**闯关成功弹框**/\n  function successPop(detail, tip) {\n    $('.gl-pop-wrap').show();\n    $('.gl-pop-bg').show();\n    $('.gl-pop-wrap').addClass('success');\n    $('.gl-pop-wrap .title').html('成功闯关');\n    $('.gl-pop-wrap .detail').html(detail);\n    $('.gl-pop-wrap .tip').html('<div class=\"tip\">\\n' + '                    <div>Tips:</div>\\n' + '                    <div class=\"tip-des\">\\n' + '                        <div>' + tip + '</div>\\n' + '                    </div>\\n' + '                </div>');\n  }\n  /**温馨提示框**/\n  function reminderPop(detail) {\n    $('.gl-pop-wrap').removeClass('success');\n    $('.gl-pop-wrap .title').html('温馨提示');\n    $('.gl-pop-wrap .detail').html(detail);\n    $('.gl-pop-wrap .tip').html('');\n  }\n});\n\n//# sourceURL=webpack:///./src/com/index.js?")},"./src/styles/common/common.scss":
/*!***************************************!*\
  !*** ./src/styles/common/common.scss ***!
  \***************************************/
/*! no static exports found */function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/styles/common/common.scss?")},"./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/styles/index.scss?")}});