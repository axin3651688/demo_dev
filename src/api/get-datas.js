import request from "./http.js"

export function FindPage (page,size) {
    return request({
        url:"http://192.168.2.236/faq/core/find_page",
        method :"post",
        data:{
          page: page,
          size: size
        }
    })
}
export function FindAll () {
  return request({
      url:"http://192.168.2.236/faq/core/find",
      method :"get"
  })
}