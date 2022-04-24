// import Vue from "vue";
import Clipboard from "clipboard";
import { Toast } from "vant";

function clipboardSuccess() {
    Toast("复制成功");
}

function clipboardError() {
    Toast("复制失败");
}

export default function handleClipboard(text, event) {
    const clipboard = new Clipboard(event.target, {
        text: () => text,
    });
    clipboard.on("success", () => {
        clipboardSuccess();
        clipboard.destroy();
    });
    clipboard.on("error", () => {
        clipboardError();
        clipboard.destroy();
    });
    clipboard.onClick(event);
}
