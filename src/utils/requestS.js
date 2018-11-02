import Fetch from 'node-fetch'

export const http = {
  baseUrl:'http://api.dev.edu.jingshonline.net',


  headers:{
    'Access-Control-Allow-Origin': '*',//允许请求头
    'Accept': 'application/json',
    //json形式
    'Content-Type': 'application/json',
    'mode': ' cors ',
    'cache':'no-cache'
  },
  // 'http://api.dev.edu.jingshonline.net/api/services/app/CourseSubject/GetCourseSubjectList', 
  request(url,method,header) {
    console.log('http.request')
    Fetch(this.baseUrl+url,{ 
      method: method, 
      // mode: "no-cors",
      credentials: 'include', 
      headers:this.headers
    }).then(res=>{
      return res.json()
    }).then(data=>{
      console.log(data)
      this.setState({
        tableData:data.result
      })
    }).catch((error)=>{
      console.log('error')
      console.log(error)
    })
  }
}


// export default http

// export function fetchRequest(url,method,params=''){
//   if(params===''){
//     return new Promise(function(resolve,reject){
//       Fetch(baseUrl+url,{
//         method:method,
//         headers:headers
//       }).then(res=>res.json()).then(res=>{
//         console.log('success')
//         console.log(res)
//         resolve(res)
//       }).catch(err=>{
//         console.log('err')
//         console.log(err)
//         reject(err)
//       })
//     })
//   }else{
//     return new Promise(function(resolve,reject){
//       Fetch(baseUrl+url,{
//         method:method,
//         headers:headers,
//         body:params
//       }).then(res=>res.json()).then(res=>{
//         console.log('success')
//         console.log(res)
//         resolve(res)
//       }).catch(err=>{
//         console.log('err')
//         console.log(err)
//         reject(err)
//       })
//     })
//   }
// }