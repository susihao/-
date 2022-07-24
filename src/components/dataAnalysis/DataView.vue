<template>
  <div class="dataview">
    <el-card>
      <div id="main1">1</div>
    </el-card>
    <el-card>
      <div id="main2">2</div>
    </el-card>
  </div>
</template>
<script>
import { dataViewApi } from "@/api/api.js";
export default {
  data() {
    return {};
  },
  created() {
    dataViewApi().then((res) => {
      if (res.data.status === 200) {
        let { legend, xAxis, series } = res.data.data;
        this.draw(legend, xAxis, series);
      }
    });
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById("main1"));
    myChart.setOption({
      title: {
        text: "苏苏",
      },
      tooltip: {},
      xAxis: {
        data: ["1帮", "1帮", "1帮", "1帮", "1帮", "1帮"],
      },
      yAxis: {},
      series: [
        {
          name: "人数",
          type: "bar",
          data: [40, 50, 41, 50, 60],
        },
      ],
    });
  },
  methods: {
    draw(legend, xAxis, series) {
      let myChart = this.$echarts.init(document.getElementById("main2"));
      let option = {
        title: {
          text: "会话量",
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: xAxis,
        },
        legend: { data: legend },
        yAxis: {
          type: "value",
        },
        series: series,
      };
      myChart.setOption(option);
    },
  },
};
</script>
<style lang="scss">
.dataview {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 50%;
    text-align: center;
    #main1 {
      padding-left: 1.25rem;
      height: 31.25rem;
    }
    #main2 {
      height: 31.25rem;

      padding-right: 1.25rem;
    }
  }
}
</style>