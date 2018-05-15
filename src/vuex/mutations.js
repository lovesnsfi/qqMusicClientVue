//mutation
export default {
    changeCurrentMusic(state, _currentMusic) {
        //这一个参数state就是上面的state全局状态
        state.currentMusic = _currentMusic;
    },
    changeMusicUrl(state, _musicUrl) {
        state.muiscUrl = _musicUrl;
    }
}