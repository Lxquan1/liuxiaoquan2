let Mock = require("mockjs")
let data = [
    { id: 0, name: "中国 npm 镜像源升级公告", text: "fengmk2", text1: "fengmk2" , text2: "fengmk2"},
    { id: 1, name: "中国 npm 镜像源升级公告", text: "fengmk2", text1: "fengmk2" , text2: "fengmk2"},
    { id: 2, name: "中国 npm 镜像源升级公告", text: "fengmk2", text1: "fengmk2" , text2: "fengmk2" },
    { id: 3, name: "中国 npm 镜像源升级公告", text: "fengmk2", text1: "fengmk2" , text2: "fengmk2"},
    { id: 4, name: "中国 npm 镜像源升级公告", text: "fengmk2", text1: "fengmk2" , text2: "fengmk2" },

]
Mock.mock("/api/homeindex", "get", function (config) {
    console.log(config);
    return data
})
Mock.mock(/\/api\/homeindex\/\d/, "delete", function (config) {
    console.log(config.url);
    let arr = config.url.split("/")
    let id = arr.pop()
    data.splice(id, 1)
    data.forEach(function(item,index){
        item.id = index
    })
    return data
})