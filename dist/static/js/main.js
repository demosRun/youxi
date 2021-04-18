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
    "right": 0,
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
    "show": 0
  }
]