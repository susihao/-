(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09947d46"],{"3db0":function(e,a,l){"use strict";l("45ed")},"45ed":function(e,a,l){},cb27:function(e,a,l){"use strict";l.r(a);var n=function(){var e=this,a=e._self._c;return a("div",{staticClass:"score-map"},[a("div",{staticClass:"main"},[a("div",{ref:"mainMap",attrs:{id:"map"}},[e._v("2")])])])},m=[],u=l("03d6b"),t={data(){return{}},mounted(){this.draw()},methods:{draw(){var e="中国人民大学2017年各省市计划录取人数",a="数据爬取自千栀网\n，\n上海、浙江无文理科录取人数",l=" rgb(55, 75, 113)",n="等线",m=15,t=18,v="china",o=[{name:"北京",value:177},{name:"天津",value:42},{name:"河北",value:102},{name:"山西",value:81},{name:"内蒙古",value:47},{name:"辽宁",value:67},{name:"吉林",value:82},{name:"黑龙江",value:66},{name:"上海",value:24},{name:"江苏",value:92},{name:"浙江",value:114},{name:"安徽",value:109},{name:"福建",value:116},{name:"江西",value:91},{name:"山东",value:119},{name:"河南",value:137},{name:"湖北",value:116},{name:"湖南",value:114},{name:"重庆",value:91},{name:"四川",value:125},{name:"贵州",value:62},{name:"云南",value:83},{name:"西藏",value:9},{name:"陕西",value:80},{name:"甘肃",value:56},{name:"青海",value:10},{name:"宁夏",value:18},{name:"新疆",value:67},{name:"广东",value:123},{name:"广西",value:59},{name:"海南",value:14}],r={},i=[{name:"北京",value:[{name:"文科",value:95},{name:"理科",value:82}]},{name:"天津",value:[{name:"文科",value:22},{name:"理科",value:20}]},{name:"河北",value:[{name:"文科",value:60},{name:"理科",value:42}]},{name:"山西",value:[{name:"文科",value:40},{name:"理科",value:41}]},{name:"内蒙古",value:[{name:"文科",value:23},{name:"理科",value:24}]},{name:"辽宁",value:[{name:"文科",value:39},{name:"理科",value:28}]},{name:"吉林",value:[{name:"文科",value:41},{name:"理科",value:41}]},{name:"黑龙江",value:[{name:"文科",value:35},{name:"理科",value:31}]},{name:"上海",value:[{name:"文科",value:12},{name:"理科",value:12}]},{name:"江苏",value:[{name:"文科",value:47},{name:"理科",value:45}]},{name:"浙江",value:[{name:"文科",value:57},{name:"理科",value:57}]},{name:"安徽",value:[{name:"文科",value:57},{name:"理科",value:52}]},{name:"福建",value:[{name:"文科",value:59},{name:"理科",value:57}]},{name:"江西",value:[{name:"文科",value:49},{name:"理科",value:42}]},{name:"山东",value:[{name:"文科",value:67},{name:"理科",value:52}]},{name:"河南",value:[{name:"文科",value:69},{name:"理科",value:68}]},{name:"湖北",value:[{name:"文科",value:60},{name:"理科",value:56}]},{name:"湖南",value:[{name:"文科",value:62},{name:"理科",value:52}]},{name:"重庆",value:[{name:"文科",value:47},{name:"理科",value:44}]},{name:"四川",value:[{name:"文科",value:65},{name:"理科",value:60}]},{name:"贵州",value:[{name:"文科",value:32},{name:"理科",value:30}]},{name:"云南",value:[{name:"文科",value:42},{name:"理科",value:41}]},{name:"西藏",value:[{name:"文科",value:5},{name:"理科",value:4}]},{name:"陕西",value:[{name:"文科",value:38},{name:"理科",value:42}]},{name:"甘肃",value:[{name:"文科",value:28},{name:"理科",value:28}]},{name:"青海",value:[{name:"文科",value:5},{name:"理科",value:5}]},{name:"宁夏",value:[{name:"文科",value:10},{name:"理科",value:8}]},{name:"新疆",value:[{name:"文科",value:36},{name:"理科",value:31}]},{name:"广东",value:[{name:"文科",value:63},{name:"理科",value:60}]},{name:"广西",value:[{name:"文科",value:29},{name:"理科",value:30}]},{name:"海南",value:[{name:"文科",value:8},{name:"理科",value:6}]}];let s=this.$echarts.init(this.$refs.mainMap);this.$echarts.registerMap(v,u);var c=480,f=9,h=100,d=20,p=function(e){var a=[];for(let n=0;n<e.length;n++){var l=r[e[n].name];l&&a.push({name:e[n].name,value:l.concat(e[n].value)})}return a};let b={title:{text:e,subtext:a,x:"center",textStyle:{color:l,fontFamily:n,fontSize:t},subtextStyle:{fontSize:m,fontFamily:n}},tooltip:{trigger:"item",formatter:function(e){if("undefined"==typeof e.value[2]){for(var a="",l=0;l<i.length;l++)if(e.name==i[l].name){a+=i[l].name+":<br>";for(var n=0;n<i[l].value.length;n++)a+=i[l].value[n].name+":"+i[l].value[n].value+"<br>"}return console.log(a),a}a="";for(let m=0;m<i.length;m++)if(e.name==i[m].name){a+=i[m].name+":<br>";for(let e=0;e<i[m].value.length;e++)a+=i[m].value[e].name+":"+i[m].value[e].value+"<br>"}return console.log(a),a}},legend:{orient:"vertical",y:"bottom",x:"right",data:["credit_pm2.5"],textStyle:{color:"#fff"}},visualMap:{show:!0,min:0,max:200,left:"left",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[1],inRange:{color:["#00467F","#A5CC82"]}},toolbox:{show:!0,orient:"vertical",left:"right",top:"center",feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},geo:{show:!0,map:v,label:{normal:{show:!0},emphasis:{show:!0}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}}},series:[{name:"散点",type:"scatter",coordinateSystem:"geo",data:p(o),symbolSize:function(e){return e[2]/10},label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#05C3F9"}}},{type:"map",map:v,geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!0},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data:o},{name:"点",type:"scatter",coordinateSystem:"geo",symbol:"pin",symbolSize:function(e){var a=(h-d)/(c-f),l=d-a*f;return l=h-a*c,a*e[2]+l},label:{normal:{show:!0,textStyle:{color:"#fff",fontSize:9}}},itemStyle:{normal:{color:"#F62157"}},zlevel:6,data:p(o)},{name:"Top 5",type:"effectScatter",coordinateSystem:"geo",data:p(o.sort((function(e,a){return a.value-e.value})).slice(0,5)),symbolSize:function(e){return e[2]/10},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"yellow",shadowBlur:10,shadowColor:"yellow"}},zlevel:1}]};s.setOption(b),b&&s.setOption(b)}}},v=t,o=(l("3db0"),l("2877")),r=Object(o["a"])(v,n,m,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-09947d46.896db69b.js.map