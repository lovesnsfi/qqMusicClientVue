//action
import axios from "axios";
export default {
    changeCurrentMusic({ commit }, _currentMusic) {
        //在这个提交过程之前，我去获取数据不就行了吗？
        commit("changeCurrentMusic", _currentMusic);
        axios.get("http://api.softeem.xin/musicApi/music/url", {
            params: {
                id: _currentMusic.id
            }
        }).then(res => {
            //res.data.data[0].url
            commit("changeMusicUrl", res.data.data[0].url);
        }).catch(err => {
            console.log(err);
        });
    },

}