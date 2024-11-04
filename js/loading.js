const url1 = "./json/time.json";
const url2 = "./json/me.json";
const request1 = new XMLHttpRequest();
request1.open("get", url1, true);
request1.send();
request1.onload = function () {
    let list = document.getElementById("track-list");
    if (request1.status === 200) {
        const json = JSON.parse(request1.responseText);
        let key;
        let num = 0;
        for (key in json) {
            num++;
        }
        for (let i = num; i !== 0; i--) {
            let newLi = document.createElement("li");
            newLi.innerHTML = "<i class=\"node-icon\"><img alt=\"哎呀！图片不见了\" src=\"img/tb.svg\"></i>" +
                "<span class=\"time\">" + json[i]['time'] + "</span>" +
                "<span class=\"txt\">" + json[i]['text'] + "</span>"
            list.append(newLi);
        }
        console.log("%c历程加载成功", "color: #16a085");
    } else {
        let newLi = document.createElement("li");
        newLi.innerHTML = "<i class=\"node-icon\"><img alt=\"哎呀！图片不见了\" src=\"img/tb.svg\"></i>" +
            "<span class=\"time\">Time获取失败</span>" +
            "<span class=\"txt\">Text获取失败</span>"
        list.append(newLi);
        console.log("%c历程获取失败", "color: #FC427B");
    }
}
const request2 = new XMLHttpRequest();
request2.open("get", url2, true);
request2.send();
request2.onload = function () {
    if (request2.status === 200) {
        const json = JSON.parse(request2.responseText);
        let kk_about_1 = document.getElementById("kk_about_1");
        kk_about_1.innerHTML = json['me']
        let kk_about_2 = document.getElementById("kk_about_2");
        kk_about_2.innerHTML = json['about']
    }
}
