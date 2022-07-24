<template>
  <div class="map-view">
    <div
      ref="myEchart"
      id="main"
    >
      2
    </div>
  </div>
</template>
<script>
// import geoJson from "@/assets/datas.json";
import china from "../../../node_modules/echarts/map/json/china.json";

export default {
  data() {
    return {};
  },
  mounted() {
    let geoJson = [
      { name: "南海诸岛", value: 0 },
      { name: "北京", value: this.randomValue() },
      { name: "天津", value: this.randomValue() },
      { name: "上海", value: this.randomValue() },
      { name: "重庆", value: this.randomValue() },
      { name: "河北", value: this.randomValue() },
      { name: "河南", value: this.randomValue() },
      { name: "云南", value: this.randomValue() },
      { name: "辽宁", value: this.randomValue() },
      { name: "黑龙江", value: this.randomValue() },
      { name: "湖南", value: this.randomValue() },
      { name: "安徽", value: this.randomValue() },
      { name: "山东", value: this.randomValue() },
      { name: "新疆", value: this.randomValue() },
      { name: "江苏", value: this.randomValue() },
      { name: "浙江", value: this.randomValue() },
      { name: "江西", value: this.randomValue() },
      { name: "湖北", value: this.randomValue() },
      { name: "广西", value: this.randomValue() },
      { name: "甘肃", value: this.randomValue() },
      { name: "山西", value: this.randomValue() },
      { name: "内蒙古", value: this.randomValue() },
      { name: "陕西", value: this.randomValue() },
      { name: "吉林", value: this.randomValue() },
      { name: "福建", value: this.randomValue() },
      { name: "贵州", value: this.randomValue() },
      { name: "广东", value: this.randomValue() },
      { name: "青海", value: this.randomValue() },
      { name: "西藏", value: this.randomValue() },
      { name: "四川", value: this.randomValue() },
      { name: "宁夏", value: this.randomValue() },
      { name: "海南", value: this.randomValue() },
      { name: "台湾", value: this.randomValue() },
      { name: "香港", value: this.randomValue() },
      { name: "澳门", value: this.randomValue() },
    ];
    // let myChart = this.$echarts.init(document.getElementById("main"));
    let myChart = this.$echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
    this.$echarts.registerMap("china", china);

    let option = {
      backgroundColor: "rgb(100, 180, 252)",
      title: {
        text: "苏苏",
      },
      geo: {
        map: "china",
        aspectScale: 0.75,
        zoom: 1.1,
        itemStyle: {
          normal: {
            areaColor: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: "#ccc",
                },
                {
                  offset: 1,
                  color: "red",
                },
              ],
              globalCoord: true,
            },
          },
        },
      },
      series: [
        {
          type: "map",
          zoom: 1.1,
          map: "china",
          data: geoJson,
          itemStyle: {
            normal: {
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "#ccc",
                  },
                  {
                    offset: 1,
                    color: "red",
                  },
                ],
                globalCoord: true,
              },
            },
            emphasis: {
              areaColor: "rgb(107, 127, 240)",
              borderWidth: 0.1,
              shadowColor: "rgb(231, 57, 57)",
              shadowOffsetX: 1,
              shadowOffsetY: 1,
            },
          },
          label: {
            normal: {
              show: true,
              textStyle: {
                color: "rgb(255, 255, 255)",
              },
            },
          },
        },
      ],
    };
    myChart.setOption(option);
  },
  methods: {
    randomValue() {
      return Math.round(Math.random() * 1000);
    },
  },
};
</script>
<style lang="scss">
.map-view {
  width: 100%;
  height: 100%;
  #main {
    width: 100%;
    height: 100%;
    background-color: rgb(82, 150, 252);
    height: 56.25rem;
  }
}
</style>