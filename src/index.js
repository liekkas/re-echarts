/**
 * Created by liekkas on 16/2/19.
 */
import React, { PropTypes } from 'react'
import shallowCompare from 'react-addons-shallow-compare'
import echarts from 'echarts'
import elementResizeEvent from 'element-resize-event'

class ECharts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      needInit: false //是否需要初始化,第一次创建或者主题发生变化需要init
    }
  }

  renderChart() {
    const { id, option, notMerge, notRefreshImmediately, config } = this.props
    const chartDom = this.refs[id]
    const theme = (config && config.theme) || 'default'

    let chart = echarts.getInstanceByDom(chartDom)
    if (!chart || this.state.needInit) {
      chart = echarts.init(chartDom,theme)
      elementResizeEvent(chartDom, function() {
        chart.resize();
      })
    }

    if (config && config.hasOwnProperty('event')) {
      config.event.map(({ type, handler }) => chart.on(type, handler))
    }

    if (config && config.showLoading) {
      chart.showLoading('default', (config && config.loadingOption) || {
          text: '加载中...',
          color: '#c23531',
          textColor: '#000',
          maskColor: 'rgba(255, 255, 255, 0.8)',
          zlevel: 0
        })
    } else {
      chart.hideLoading()
      chart.setOption(option, notMerge, notRefreshImmediately)
    }
  }

  componentDidMount() {
    this.renderChart()
  }

  componentDidUpdate() {
    this.renderChart()
  }

  componentWillReceiveProps(nextProps) {
    //如果主题切换,需要重新创建实例,因为ECharts的主题设置api在init中,
    if (this.props.config.theme !== nextProps.config.theme) {
      this.setState({ needInit: true })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    echarts.dispose(this.refs[this.props.id])
  }

  render() {
    return <div ref={this.props.id} style={this.props.style}/>
  }
}

/**
 *
 * option: 图表的配置项和数据
 * notMerge: 可选，是否不跟之前设置的option进行合并，默认为false，即合并
 * notRefreshImmediately: 可选，在设置完option后是否不立即刷新画布，默认为false，即立即刷新
 * style: 图表容器的样式,默认高宽100%
 * config: 设置
 *    theme: 主题
 *    event: 事件
 *    showLoading: 是否呈现加载效果
 *    loadingOption: 加载效果设置
 * id: 图表id,可选
 */
ECharts.propTypes = {
  option: PropTypes.object.isRequired,
  notMerge: PropTypes.bool,
  notRefreshImmediately: PropTypes.bool,
  style: PropTypes.object,
  config: PropTypes.object,
  id: PropTypes.string,
}

ECharts.defaultProps = {
  config: {},
  notMerge: false,
  notRefreshImmediately: false,
  style: {
    width: '100%',
    height: '100%',
  },
  id: 'chart',
}

export default ECharts

