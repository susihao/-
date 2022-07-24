// 数据接口封装



// ***********************************************信息管理页*********************************************** 
// 获取数据
export function getData(root, url, params) {
  root.$service.get(
    url,
    { params: params || {} }
  ).then(res => {
    if (res.data.status === 200) {
      // root.tableData = res.data.data;
      // root.total = res.data.total;
      // root.tableData.forEach(el => {
      //   el.sex == '1' ? el.sex_text = '男' : el.sex_text = '女'
      // });
      changeData(root, res)
    }
  })
}

// 添加 修改数据
import qs from 'qs'
export function changeInfo(root, url, method, data) {
  data = qs.stringify(data);
  root.$service({
    url,
    method,
    data
  }).then(res => {

    if (res.data.status === 200) {
      changeData(root, res)
      root.$message({ type: "success", message: res.data.message });
    } else {
      root.$message({ type: "danger", message: "操作失败" });
    }
  })
}

// 删除 数据
export function delData(root, url, id, callback) {
  root.$alert("确定删除吗？", "提示", {
    confirmButtonText: "确定",
    callback: () => {
      root.$service({
        url: url + '/' + id,
        method: 'delete'
      }).then(res => {
        if (res.data.data === 200) {
          root.$message({ type: "success", message: res.data.message });
          callback(root, url)
        }
      })
    },
  });

}

// 数据 处理
export function changeData(root, data) {
  root.tableData = data.data.data;
  root.total = data.data.total;

  // 第一种  数据处理格式
  if (root.tableData[0].sex) {
    root.tableData.forEach(el => {
      el.sex == '1' ? el.sex_text = '男' : el.sex_text = '女'
    });
  }
  // console.log(root.tableData[0].completed);

  if (root.tableData[0].completed != null) {
    root.tableData.forEach(el => {
      console.log(el.completed);
      el.completed ? el.completed_text = '完成' : el.completed_text = '未完成'
    });
  }

  // 第二种\
  // root.tableData.map(item => {
  //   arr.map(aItem => {
  //     item[aItem] ? item[aItem + '_text'] = "是" : item[aItem + '_text'] = '否'
  //   })
  // })

}




// ***********************************************作业列表页***********************************************

// export function getDataWorks() {
//   root.
// }

export function getDataWorks(root, url, params, arr) {
  root.$service.get(
    url,
    { params: params || {} }
  ).then(res => {
    if (res.data.status === 200) {
      root.tableData = res.data.data;
      root.total = res.data.total;

      // 第二种数据处理格式
      root.tableData.map(item => {
        arr.map(aItem => {
          item[aItem] ? item[aItem + '_text'] = "是" : item[aItem + '_text'] = '否'
        })
      });

      (root.loading = false)
    }
  })
}