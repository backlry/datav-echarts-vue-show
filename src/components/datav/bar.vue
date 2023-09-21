// 横型动态柱状图
<template>
    <div class="top-header-1">
        <dv-border-box-1>
            <div class='firstbar' style="width: 100%;height: 100%;"></div>
        </dv-border-box-1>
    </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    name:'barFirst',
    data() {
        return {
            data_org:[3,5,7,4,8],
            count_i:0,
            data_x:['A', 'B', 'C', 'D', 'E'],
            color_total:['#FF9966','#FF6666','#CC9966','#666666','#999933']
        }
    },
    
    methods: {
        bar_init()
        {

            let option = 
            {  title:{  text:'this is a action of bar',
                        left: "center",
                        top: "2%",
                        textStyle:
                        {
                        fontSize: 18,
                        color:'#fff'
                        },
                    },//标题
                yAxis: {
                    
                    type:'value',
                    splitLine://网格虚线
                    {show:true,
                        lineStyle:{
                            type:'dashed',
                            color:'#55b9b4'
                        }
                    },
                    axisLine://坐标轴线
                    {
                        show:true,
                        lineStyle:{
                            color:'#55b9b4'
                        }
                    },
                    axisLabel:{
                        show:true,
                        
                        color:'rgb(255,255,255,1)',
                        fontSize:16,
                        
                    }//坐标轴标签
                },
                xAxis: {
                    type: 'category',
                    data:this.data_x.slice(0,3),
                    axisLine:{
                        lineStyle:{
                            color:'#55b9b4'
                        },
                    
                    },
                    axisLabel:{
                        show:true,
                        
                        color:'rgb(255,255,255,1)',
                        fontSize:16,
                        
                    }
                     
                },
                series: [
                    {
                    name: 'y',
                    type: 'bar',
                    data: this.data_org.slice(0,3),
                    label: {
                        show: true,
                        
                        valueAnimation: true
                    },
                    colorBy:'data',//柱状图颜色来自哪里，data/series，写成data就是根据data数量来弄color的种类。
                    avoidLabelOverlap: true
                    },
                    
                ],
                legend: {
                    show: false,
                    textStyle:{
                            color:'#fff',
                            fontSize:18
                        },
                    
                },
                color:this.color_total.slice(0,3),//与colorby相联系，colorby写的来源data，data有三类，那么就会抽color中三种颜色。
                label:
                {
                    color:'#fff',
                    fontSize:20,
                    position:'inside'
                },
               
               
            };
                return option
       },

       update(data)
       {
         if(this.count_i>=data.length)
            {
                this.count_i=0
            }
                let data_total=data.concat(data.slice(0,2))
                let data_open = data_total.slice(this.count_i,this.count_i+3);
                
            return data_open
       }
       
    },
    mounted() {
        let option=this.bar_init()
        let  myChart = echarts.init(document.querySelector('.firstbar'));
        setInterval(()=>
        {
           
            let really_datax=this.update(this.data_x);
            let really_datay=this.update(this.data_org);
            let really_color=this.update(this.color_total)
                this.count_i++;
            myChart.setOption(
            {
            series: [{
                data: really_datay
            }],
            
            xAxis: {data: really_datax},
            color:really_color
            });
        
        }, 5000);
        myChart.setOption(option)
        },
    
}
</script>
<style lang="less">
.top-header-1{
    width: 33%;
    .firstbar{
        width: 100%;
    }
}
    
</style>