// import sensors from '../js/sensorsdata.min'
import sensors from "../assets/js/sensorsdata.min";

sensors.init({
    server_url: "http://10.114.14.100:9080/collect/app/save",
    heatmap: {
        //是否开启点击图，默认为 default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭。
        clickmap: "not_collect",
        //是否开启触达注意力图，默认 not_collect 表示关闭，不会自动采集 $WebStay 事件，可以设置 'default' 表示开启。
        scroll_notice_map: "not_collect",
    },
    app_js_bridge: true,
    is_track_single_page: false,
    show_log: true,
});

// sensors.identify(undefined, true);
sensors.quick("isReady", function () {
    //   let AnonymousID = sensors.quick("getAnonymousID");
});

/**
 * eventName:
 * 经理空间相关：managerPage managerPageShare videoToManager  videoPlay  videoPlayFinish
 * 素材相关：materialPage materialPageShare materialPageCollection
 */
export const sensorTrack = (eventName, data) => {
    sensors.track(eventName, data);
};

export const appViewPause = () => {
    sensors.quick("appViewPause");
};

export const sa = sensors;
