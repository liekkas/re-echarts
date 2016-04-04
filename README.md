react + echarts

### 安装使用
>* npm install re-echarts --save

### 开始
>* git clone https://github.com/liekkas/re-echarts.git
>* npm i
>* npm run dev
>* open http://localhost:3000

### 特性
>* 支持ECharts3.0
>* 支持事件联动
>* 支持动态换肤
>* 支持动态缩放

### 使用说明
```
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

```

[在线DEMO](http://liekkas.github.io/rc-echarts)
