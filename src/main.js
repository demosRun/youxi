function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false})

setTimeout(() => {
  autoScale({
    deviseW: 750,
    deviseH: 1508,
    center: 'middle',
    scroll: false,
    type: 'scale',
    box: '.scale-box'
  })
}, 100);

//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){ 
  switch(arguments.length){ 
      case 1: 
          return parseInt(Math.random()*minNum+1,10); 
      break; 
      case 2: 
          return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
      break; 
          default: 
              return 0; 
          break; 
  } 
} 

var clock = null
var busy = false
var rand = 0
var xin = 6
var code = 0

var tiku1 = [
  {
    "text": "窈窕",
    "pinyin": ["tiǎo", "tiáo"],
    "right": 0,
    "show": 1
  },
  {
    "text": "花蕾",
    "pinyin": ["léi", "lěi"],
    "right": 1,
    "show": 1
  },
  {
    "text": "瘙痒",
    "pinyin": ["sāo", "sào"],
    "right": 1,
    "show": 0
  },
  {
    "text": "殷红",
    "pinyin": ["yīn", "yān"],
    "right": 1,
    "show": 0
  },
  {
    "text": "砧板",
    "pinyin": ["zhēn", "zhān"],
    "right": 0,
    "show": 0
  },
  {
    "text": "佣金",
    "pinyin": ["yòng", "yōng"],
    "right": 0,
    "show": 0
  },
  {
    "text": "亲家",
    "pinyin": ["qìn", "qìng"],
    "right": 1,
    "show": 0
  },
  {
    "text": "癖好",
    "pinyin": ["pǐ", "pì"],
    "right": 0,
    "show": 0
  },
  {
    "text": "成绩",
    "pinyin": ["jì", "jī"],
    "right": 0,
    "show": 1
  },
  {
    "text": "根茎",
    "pinyin": ["jìng", "jīng"],
    "right": 1,
    "show": 1
  }
]


var tiku2 = [
  {
    "text": "_然离去",
    "pinyin": ["怅", "伥"],
    "right": 0
  },
  {
    "text": "水_不通",
    "pinyin": ["泄", "泻"],
    "right": 0
  },
  {
    "text": "萎_不振",
    "pinyin": ["糜", "靡"],
    "right": 1
  },
  {
    "text": "相辅相_",
    "pinyin": ["成", "承"],
    "right": 0
  },
  {
    "text": "脉_紊乱",
    "pinyin": ["搏", "膊"],
    "right": 0
  },
  {
    "text": "说话_巴",
    "pinyin": ["嗑", "磕"],
    "right": 1
  },
  {
    "text": "以逸_劳",
    "pinyin": ["待", "代"],
    "right": 0
  },
  {
    "text": "食不_腹",
    "pinyin": ["裹", "果"],
    "right": 1
  },
  {
    "text": "_年累月",
    "pinyin": ["长", "常"],
    "right": 0
  },
  {
    "text": "万古_芳",
    "pinyin": ["留", "流"],
    "right": 1
  },
  {
    "text": "一_莫展",
    "pinyin": ["筹", "愁"],
    "right": 0
  },
  {
    "text": "按_就班",
    "pinyin": ["步", "部"],
    "right": 1
  },
  {
    "text": "相形见_",
    "pinyin": ["拙", "绌"],
    "right": 1
  },
]

var tiku3 = [
  ['汩', '汨'],
  ['姬', '姫'],
  ['采', '釆'],
  ['壶', '壸'],
  ['垚', '壵'],
  ['妹', '妺'],
  ['裹', '裏'],
  ['祇', '衹'],
  ['塵', '麈'],
  ['畬', '畲'],
  ['已', '巳'],
  ['治', '冶'],
  ['書', '畫']
]

// 判断是否微信登陆
function isWeiXin() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (/micromessenger/.test(ua)) {
    return true;
  }
  return false;
}

if (isWeiXin()) {
  function getParams(str) {
    var reg = /([^&?#]+)=([^&?#]+)/g;
    var obj = {};
    str.replace(reg, function () {
      obj[arguments[1]] = arguments[2];
    })
    return obj;
  }

  var params = getParams(_location);
  if (!params.openId) {
    window.location.href = 'http://bp.people.com.cn/ydnr_game/index.php/game/index'
  } else {
    alert(params.openId)
  }
}