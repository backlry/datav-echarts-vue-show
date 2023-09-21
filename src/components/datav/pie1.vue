<template>
    <div id=top-header>
        <dv-border-box-8 class="border8" :dur=3>
            <div class="test" style="width: 100%;height: 95%;" ></div>
        </dv-border-box-8>
        
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    name:'heaDer',
    data() {
        return {
            
        }
    },
    methods:{
        draw(){
           let myChart = echarts.init(document.querySelector('.test'));
           let option = {
                    title:{text: 'This is a test',
                           left: 'center',
                           top: '2%',
                            textStyle:{
                            color:'#fff',
                            fontSize:16
                        },
                           },
                    tooltip: {
                        trigger: 'item'
                    },//鼠标悬听后显示
                    legend: {
                        top: '7%',
                        left: 'center',
                        textStyle:{
                            color:'#fff',
                            fontSize:12
                        },
                        
                    },
                    series: [
                        {
                        top:'10%',//饼状图位置
                        left:'0.5%',
                        name: 'Access From',
                        type: 'pie',
                        radius: ['35%', '50%'],
                        avoidLabelOverlap: true,
                        label: {
                            
                            show: true,
                            // position: 'center',
                            formatter:'{b}:{d}%',
                            textStyle:{
                                color:'#fff',
                                 fontSize:14
                            }
                        },
                        emphasis: {
                            label: {
                            show: true,
                            fontSize: 20,
                            fontWeight: 'bold',
                            color:'rgb(256,256,256)'
                            }
                        },
                        labelLine: {
                            show: true,
                            length:3,
                            lineStyle:{width:3}
                        },//视觉引导线
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                                ]
                                }
                            ]
                        }; 
            myChart.setOption(option);
        }
    
    },
    mounted() {
            this.draw();
        },

}
</script>
<style lang="less" scoped>
#top-header {
//   position: relative;
  width: 33.3%;//组件设置为在index中占33.3%，即1/3
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  border: 0px;
  margin: 0px;

    .border8{
        border:1px solid ;
        color:rgb(2, 88, 131);
        width: 100%;
        
    }
}        
</style>