import React, { Component } from 'react'
import request from '../utils/request'

class Home extends Component {
  State={
    tableData:[]
  }
  getData(){
    request.get('/api/services/app/CourseSubject/GetCourseSubjectList').then(res=>{
      console.log(res)
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

  }

  //页面更新完成
  componentDidUpdate(newprops, oldprops) {

  }

  //页面销毁前
  componentWillUnmount() {
  
  }
  render() {
    return (
      <div>
        <p>Home</p>
        {this.State.tableData}
      </div>
    )
  }
}
export default Home;