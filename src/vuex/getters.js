//getter
import globaData from "../utils/globaData";
export default {
    currentMusic(state) {
        return state.currentMusic;
    },
    muiscUrl(state) {
        return state.muiscUrl;
    },
    popularmusic() {
        return localStorage.getItem("popularmusic") == undefined ? [] : JSON.parse(localStorage.getItem("popularmusic"));
    },
    classicalmusic() {
        return localStorage.getItem("classicalmusic") == undefined ? [] : JSON.parse(localStorage.getItem("classicalmusic"));
    },
    lightmusic() {
        return localStorage.getItem("lightmusic") == undefined ? [] : JSON.parse(localStorage.getItem("lightmusic"));
    },
    radiomusic() {
        return localStorage.getItem("radiomusic") == undefined ? [] : JSON.parse(localStorage.getItem("radiomusic"));
    },
    isDataReady() {
        if (localStorage.getItem("lightmusic") != undefined &&
            localStorage.getItem("classicalmusic") != undefined &&
            localStorage.getItem("lightmusic") != undefined &&
            localStorage.getItem("radiomusic") != undefined) {
            globaData.isDataReady = 4;
        }
        return globaData.isDataReady;
    }
}