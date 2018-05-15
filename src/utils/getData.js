import axios from "axios";

var instance = axios.create({
        baseURL: "http://api.softeem.xin/musicApi"
    })
    //获取浏览音乐的方法
    // 流行
import globaData from "./globaData";


export function getPopularmusic() {
    instance.get("/playlist/detail?id=3778678").then(res => {
        localStorage.setItem("popularmusic", JSON.stringify(res.data));
        //+1；
        globaData.isDataReady++;
    }).catch(err => {
        localStorage.setItem("popularmusic", "[]");
    });
}
//古典
export function getClassicalmusic() {
    instance.get("/playlist/detail?id=71384707").then(res => {
        localStorage.setItem("classicalmusic", JSON.stringify(res.data));
        //+1;
        globaData.isDataReady++;
    }).catch(err => {
        localStorage.setItem("classicalmusic", "[]");
    });
}
//纯音乐
export function getLightmusic() {
    instance.get("/playlist/detail?id=26467411").then(res => {
        localStorage.setItem("lightmusic", JSON.stringify(res.data));
        //+1;
        globaData.isDataReady++;
    }).catch(err => {
        localStorage.setItem("lightmusic", "[]");
    });
}
//电台
export function getRadiomusic() {
    instance.get("/playlist/detail?id=897089 ").then(res => {
        localStorage.setItem("radiomusic", JSON.stringify(res.data));
        //+1;
        globaData.isDataReady++;
    }).catch(err => {
        localStorage.setItem("radiomusic", "[]");
    });
}

//默认导出的方法 
export default function getData() {
    //初次调用
    if (localStorage.getItem("popularmusic") == undefined) {
        //缓存如果不存在数据，我就调用这个方法，从服务器上面获取数据，然后放到缓存时面去
        getPopularmusic();
    }
    if (localStorage.getItem("classicalmusic") == undefined) {
        //缓存如果不存在数据，我就调用这个方法，从服务器上面获取数据，然后放到缓存时面去
        getClassicalmusic();
    }
    if (localStorage.getItem("lightmusic") == undefined) {
        //缓存如果不存在数据，我就调用这个方法，从服务器上面获取数据，然后放到缓存时面去
        getLightmusic();
    }
    if (localStorage.getItem("radiomusic") == undefined) {
        //缓存如果不存在数据，我就调用这个方法，从服务器上面获取数据，然后放到缓存时面去
        getRadiomusic();
    }
    setInterval(() => {
        //每隔半个小时，从服务器获取最新的数据，再写到缓存里面
        getPopularmusic();
        getClassicalmusic();
        getLightmusic();
        getRadiomusic();
    }, 1000 * 60 * 30);

}