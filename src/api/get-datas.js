import request from "./http.js"

export function FindPage (categoryId,issue,sortBy,page,size) {
    return request({
        url:"http://192.168.2.236/faq/core/find_page",
        method :"post",
        data:{
          issue: issue,
          sortBy: sortBy,
          page: page,
          size: size
        }
    })
}
export function FindCategoryPage (categoryId,issue,sortBy,page,size) {
  return request({
      url:"http://192.168.2.236/faq/core/find_page",
      method :"post",
      data:{
        categoryId: categoryId,
        issue: issue,
        sortBy: sortBy,
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
export function GetQuestion (faqId,page,status,size) {
  return request({
      url:"http://192.168.2.236/faq/question/find_page",
      method :"post",
      data:{
        faqId: faqId,
        page: page,
        status: status,
        size: size
      }
  })
}
export function GetReply (page,questionId,size) {
  return request({
      url:"http://192.168.2.236/faq/reply/find",
      method :"get",
      data:{
        page: page,
        questionId: questionId,
        size: size
      }
  })
}