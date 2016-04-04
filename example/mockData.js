/**
 * Created by liekkas on 16/4/4.
 */

export function mockMapData() {
  return {
    title : {
      text: '全国故障投诉情况',
      subtext: '点击任意省份,右侧图表随之联动',
      left: 'center'
    },
    tooltip : {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data:['白天','晚上']
    },
    visualMap: {
      min: 0,
      max: 2500,
      left: 'left',
      top: 'bottom',
      text:['高','低'],           // 文本，默认为数值文本
      calculable : true
    },
    series : [
      {
        name: '白天',
        type: 'map',
        mapType: 'china',
        roam: false,
        itemStyle:{
          normal:{label:{show:true}},
          emphasis:{label:{show:true}}
        },
        data:[
          {name: '北京',value: Math.round(Math.random() * 1000)},
          {name: '天津',value: Math.round(Math.random() * 1000)},
          {name: '上海',value: Math.round(Math.random() * 1000)},
          {name: '重庆',value: Math.round(Math.random() * 1000)},
          {name: '河北',value: Math.round(Math.random() * 1000)},
          {name: '河南',value: Math.round(Math.random() * 1000)},
          {name: '云南省',value: Math.round(Math.random() * 1000)},
          {name: '辽宁',value: Math.round(Math.random() * 1000)},
          {name: '黑龙江',value: Math.round(Math.random() * 1000)},
          {name: '湖南',value: Math.round(Math.random() * 1000)},
          {name: '安徽',value: Math.round(Math.random() * 1000)},
          {name: '山东',value: Math.round(Math.random() * 1000)},
          {name: '新疆',value: Math.round(Math.random() * 1000)},
          {name: '江苏',value: Math.round(Math.random() * 1000)},
          {name: '浙江',value: Math.round(Math.random() * 1000)},
          {name: '江西',value: Math.round(Math.random() * 1000)},
          {name: '湖北',value: Math.round(Math.random() * 1000)},
          {name: '广西',value: Math.round(Math.random() * 1000)},
          {name: '甘肃',value: Math.round(Math.random() * 1000)},
          {name: '山西',value: Math.round(Math.random() * 1000)},
          {name: '内蒙古',value: Math.round(Math.random() * 1000)},
          {name: '陕西',value: Math.round(Math.random() * 1000)},
          {name: '吉林',value: Math.round(Math.random() * 1000)},
          {name: '福建',value: Math.round(Math.random() * 1000)},
          {name: '贵州',value: Math.round(Math.random() * 1000)},
          {name: '广东',value: Math.round(Math.random() * 1000)},
          {name: '青海',value: Math.round(Math.random() * 1000)},
          {name: '西藏',value: Math.round(Math.random() * 1000)},
          {name: '四川',value: Math.round(Math.random() * 1000)},
          {name: '宁夏',value: Math.round(Math.random() * 1000)},
          {name: '海南',value: Math.round(Math.random() * 1000)},
          {name: '台湾',value: Math.round(Math.random() * 1000)},
          {name: '香港',value: Math.round(Math.random() * 1000)},
          {name: '澳门',value: Math.round(Math.random() * 1000)}
        ]
      },
      {
        name: '晚上',
        type: 'map',
        mapType: 'china',
        itemStyle:{
          normal:{label:{show:true}},
          emphasis:{label:{show:true}}
        },
        data:[
          {name: '北京',value: Math.round(Math.random() * 1000)},
          {name: '天津',value: Math.round(Math.random() * 1000)},
          {name: '上海',value: Math.round(Math.random() * 1000)},
          {name: '重庆',value: Math.round(Math.random() * 1000)},
          {name: '河北',value: Math.round(Math.random() * 1000)},
          {name: '安徽',value: Math.round(Math.random() * 1000)},
          {name: '新疆',value: Math.round(Math.random() * 1000)},
          {name: '浙江',value: Math.round(Math.random() * 1000)},
          {name: '江西',value: Math.round(Math.random() * 1000)},
          {name: '山西',value: Math.round(Math.random() * 1000)},
          {name: '内蒙古',value: Math.round(Math.random() * 1000)},
          {name: '吉林',value: Math.round(Math.random() * 1000)},
          {name: '福建',value: Math.round(Math.random() * 1000)},
          {name: '广东',value: Math.round(Math.random() * 1000)},
          {name: '西藏',value: Math.round(Math.random() * 1000)},
          {name: '四川',value: Math.round(Math.random() * 1000)},
          {name: '宁夏',value: Math.round(Math.random() * 1000)},
          {name: '香港',value: Math.round(Math.random() * 1000)},
          {name: '澳门',value: Math.round(Math.random() * 1000)}
        ]
      }
    ]
  }
}

export function mockLineData(region='全国',time) {

  let data = []
  for (let i = 0; i < 7; i++) {
    data.push(Math.ceil(Math.random()*20))
  }

  return {
    title: {
      text: region + time + '一周投诉情况',
      subtext: time === '白天' ? '主题动态切换效果' : '加载过渡效果'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      show: false,
      data:[time]
    },
    toolbox: {
      show: true,
      feature: {
        dataZoom: {},
        dataView: {readOnly: false},
        magicType: {type: ['line', 'bar']},
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis:  {
      type: 'category',
      boundaryGap: false,
      data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} 件'
      }
    },
    series: [
      {
        name:time,
        type:'line',
        data,
        markPoint: {
          data: [
            {type: 'max', name: '最大值'},
            {type: 'min', name: '最小值'}
          ]
        },
        markLine: {
          data: [
            {type: 'average', name: '平均值'}
          ]
        }
      },
    ]
  }
}
