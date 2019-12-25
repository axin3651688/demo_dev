import request from "./http.js"

export function FindPage (issue,sortBy,direction,page,size) {
    return request({
        url:"http://192.168.2.236/faq/core/find_page",
        method :"post",
        data:{
          issue: issue,
          sortBy: sortBy,
          direction: direction,
          page: page,
          size: size
        }
    })
}
export function FindTitlePage (title,issue,sortBy,direction,page,size) {
  return request({
      url:"http://192.168.2.236/faq/core/find_page",
      method :"post",
      data:{
        title: title,
        issue: issue,
        sortBy: sortBy,
        direction: direction,
        page: page,
        size: size
      }
  })
}
export function FindCategoryPage (categoryId,issue,sortBy,direction,page,size) {
  return request({
      url:"http://192.168.2.236/faq/core/find_page",
      method :"post",
      data:{
        categoryId: categoryId,
        issue: issue,
        sortBy: sortBy,
        direction: direction,
        page: page,
        size: size
      }
  })
}
export function FindOne(value){
  return request({
    url:"http://192.168.2.236/faq/core/find_one?field=id&value=" + value,
      method :"get"
  })
}
export function AddReadCount(value){
  return request({
    url:"http://192.168.2.236/faq/core/add_read_count/" + value,
      method :"get"
  })
}
export function FindAllCategory () {
  return request({
      url:"http://192.168.2.236/faq/category/find",
      method :"get"
  })
}
export function FindAll () {
  return request({
      url:"http://192.168.2.236/faq/core/find",
      method :"get"
  })
}
export function SendQuestion (content,faqId,title) {
  return request({
      url:"http://192.168.2.236/faq/question/save",
      method :"post",
      data:{
          content: content,
          faqId: faqId,
          title: title 
      }
  })
}
export function GetQuestion (faqId,page,size,status) {
  return request({
      url:"http://192.168.2.236/faq/question/find_page",
      method :"post",
      data:{
        faqId: faqId,
        page: page,
        size: size,
        status: status

      }
  })
}
export function GetReply (value) {
  return request({
      url:"http://192.168.2.236/faq/reply/find_one?field=id&value=" + value,
      method :"get"
  })
}