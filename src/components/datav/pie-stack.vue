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
           let option= {    animation:false,
                     title:{
                            text:'this is a test',
                            left:'40%',
                            top:'4%',
                            textStyle:{
                            color:'#fff',
                            fontSize:20

                                  },},
                            tooltip: {
                                trigger: 'item',
                                formatter: '{a} <br/>{b}: {c} ({d}%)'//鼠标悬听后显示
                            },
                            legend: {
                                right:'1%',
                                bottom:'2%',
                                data: [
                                'Direct',
                                'Marketing',
                                'Search Engine',
                                'finish',
                                'unfinish',
                                // 'Video Ads',
                                // 'Baidu',
                                // 'Google',
                                // 'Bing',
                                // 'Others'
                                ],
                                textStyle:{
                                    color:'#fff',
                                    fontSize:14},
                                orient:'vertical'//方向
                            },//图例
                            series: [//第一个饼图数据

                                {
                                top:'10%',//饼状图位置
                               left:'0.5%',
                                name: 'Access From',//a系列名，b数据名，c数值，d百分比
                                type: 'pie',
                                // selectedMode: 'single',//选中模式（饼图突出的部分），与数据中的‘selected’对应
                                radius: [0, '40%'],
                                label: {
                                    position: 'inner',//名字在饼图里面
                                    fontSize: 13,
                                    textStyle:{
                                            color:'#fff',
                                    }
                                },
                                labelLine: {
                                    show: false//视觉引导线关
                                },
                                data: [
                                    { value: 1548, name: 'Search Engine' },
                                    { value: 775, name: 'Direct' },
                                    { value: 679, name: 'Marketing',selected: true }
                                ]
                                },
                                {
                                top:'10%',//饼状图位置
                               left:'0.5%',
                                name: 'Access From',
                                type: 'pie',
                                radius: ['40%', '60%'],//饼图半径，内圈35，外圈60
                                labelLine: {
                                    length: 27,//引导线长度
                                    lineStyle:{width:3}
                                },
                                // selectedMode: 'multiple',//选中模式，可以被多选，对应data中的多个selected
                                label: {
                                    formatter: '{d}%',//饼块label显示样式
                                    backgroundColor: 'transparent',
                                    fontSize:14,
                                    textStyle:{
                                            color:'#fff',
                                    }
                                    // borderColor: '#8C8D8E',
                                    // borderWidth: 1,
                                    // borderRadius: 4,
                                    
                                    // rich: {//富文本
                                    // a: {
                                    //     color: '#6E7079',
                                    //     lineHeight: 22,
                                    //     align: 'center'
                                    // },
                                    // hr: {
                                    //     borderColor: '#8C8D8EE',
                                    //     width: '100%',
                                    //     borderWidth: 1,
                                    //     height: 0
                                    // },
                                    // b: {
                                    //     color: '#4C5058',
                                    //     fontSize: 14,
                                    //     fontWeight: 'bold',
                                    //     lineHeight: 33
                                    // },
                                    // per: {
                                    //     color: '#fff',
                                    //     backgroundColor: '#4C5058',
                                    //     padding: [3, 4],
                                    //     borderRadius: 4
                                    // }
                                    // }
                                },
                                data: [//第二个饼数据
                                    { value: 104, name: 'finish',selected: true},
                                    { value: 335, name: 'unfinish' ,selected: true},
                                    { value: 310, name: 'finish' },
                                    { value: 251, name: 'unfinish' },
                                    { value: 234, name: 'finish' },
                                    { value: 147, name: 'unfinish' },
                                    { value: 135, name: 'finish' },
                                    { value: 102, name: 'unfinish' }
                                ]
                                }
                            ]
                        };
        //    let option = {
        //             title:{text: 'This is a test',
        //                    left: 'center',
        //                    top: '2%',
        //                     textStyle:{
        //                     color:'#fff',
        //                     fontSize:16
        //                 },
        //                    },
        //             tooltip: {
        //                 trigger: 'item'
        //             },//鼠标悬听后显示
        //             legend: {
        //                 top: '7%',
        //                 left: 'center',
        //                 textStyle:{
        //                     color:'#fff',
        //                     fontSize:12
        //                 },
                        
        //             },
        //             series: [
        //                 {
        //                 top:'10%',//饼状图位置
        //                 left:'0.5%',
        //                 name: 'Access From',
        //                 type: 'pie',
        //                 radius: ['35%', '50%'],
        //                 avoidLabelOverlap: true,
        //                 label: {
                            
        //                     show: true,
        //                     // position: 'center',
        //                     formatter:'{b}:{d}%',
        //                     textStyle:{
        //                         color:'#fff',
        //                          fontSize:14
        //                     }
        //                 },
        //                 emphasis: {
        //                     label: {
        //                     show: true,
        //                     fontSize: 20,
        //                     fontWeight: 'bold',
        //                     color:'rgb(256,256,256)'
        //                     }
        //                 },
        //                 labelLine: {
        //                     show: true,
        //                     length:3,
        //                     lineStyle:{width:3}
        //                 },//视觉引导线
        //                 data: [
        //                     { value: 1048, name: 'Search Engine' },
        //                     { value: 735, name: 'Direct' },
        //                     { value: 580, name: 'Email' },
        //                     { value: 484, name: 'Union Ads' },
        //                     { value: 300, name: 'Video Ads' }
        //                         ]
        //                         }
        //                     ]
        //                 }; 
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