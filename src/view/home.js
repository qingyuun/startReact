import React, { Component } from 'react';
import Fetch from 'node-fetch'
class Home extends Component {
  State={
    tableData:[]
  }
  getData(){
    Fetch('http://api.dev.edu.jingshonline.net/api/services/app/CourseSubject/GetCourseSubjectList', { method: 'Get',cache: 'no-cache',headers: {
      "Content-Type": "application/json"
    }}).then(res=>{
      console.log(res)
      return res.json()
    }).then(data=>{
      console.log(data)
      this.setState({
        tableData:data.result
      })
    }).catch((error)=>{
      console.log(error)
    })
  }
  //页面渲染前
  componentWillMount() {
    this.getData()
  }

//页面渲染完成
  componentDidMount() {
  
  }

  //页面更新前
  componentWillUpdate(newprops, oldprops) {
    console.log(newprops, oldprops)
  }

  //页面更新完成
  componentDidUpdate(newprops, oldprops) {
    console.log(newprops, oldprops)
  }

  //页面销毁前
  componentWillUnmount() {
  
  }
  render() {
    return (
      <div>
        {this.State.tableData}
      </div>
    )
  }
}
export default Home;