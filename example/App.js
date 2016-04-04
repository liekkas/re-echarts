/**
 * Created by liekkas on 16/3/31.
 */
import React from 'react'
import echarts from 'echarts'
import ECharts from '../src/index'
import { mockLineData, mockMapData } from './mockData'
import china from './china.json'
import './dark'

echarts.registerMap('china', china)

const colors = ['rgba(255, 0, 0, 0.4)', 'rgba(0, 255, 0, 0.4)', 'rgba(0, 0, 255, 0.4)']
function getLoadingOption() {
  return {
    text: '数据加载中...',
    color: '#c23531',
    textColor: '#000',
    maskColor: colors[Math.floor(Math.random() * 2)],
    zlevel: 0,
  }
}

const styles = {
  root: {
    height: '96vh',
    margin: '2vh',
    display: 'flex',
    backgroundColor: 'whitesmoke',
  },
  map: {
    width: '60%',
    height: '100%',
    border: '1px solid #336699',
    boxSizing: 'border-box',
  },
  container: {
    width: '39%',
    height: '100%',
    marginLeft: '1%',
  },
  day: {
    width: '100%',
    height: '49%',
    border: '1px solid #336699',
    marginBottom: '2%',
  },
  night: {
    width: '100%',
    height: '49%',
    border: '1px solid #336699',
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.onMapClicked = this.onMapClicked.bind(this)
    this.state = {
      mapOption: mockMapData(),
      dayOption: mockLineData('全国', '白天'),
      nightOption: mockLineData('全国', '晚上'),
      mapConfig: {
        event: [{ type: 'click', handler: this.onMapClicked }],
      },
    }
  }

  onMapClicked(item) {
    this.setState({
      dayOption: mockLineData(item.name,'白天'),
      dayConfig: {
        theme: (this.state.dayConfig && this.state.dayConfig.theme === 'dark') ? 'default' : 'dark',
      },
      nightConfig: {
        showLoading: true,
        loadingOption: getLoadingOption(),
      }
    })

    //晚上数据延迟两秒
    const bind = this
    setTimeout(function () {
      bind.setState({
        nightOption: mockLineData(item.name,'晚上'),
        nightConfig: {
          showLoading: false,
        }
      })
    },2000)
  }

  render() {
    const { mapOption, dayOption, nightOption, mapConfig, dayConfig, nightConfig } = this.state
    return (
      <div style={styles.root}>
        <ECharts option={mapOption} config={mapConfig} style={styles.map} />
        <div style={styles.container}>
          <ECharts option={dayOption} config={dayConfig} style={styles.day}/>
          <ECharts option={nightOption} config={nightConfig} style={styles.night}/>
        </div>
      </div>
    )
  }
}

export default App
