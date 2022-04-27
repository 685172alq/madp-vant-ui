<template>
    <div>
        <div :style="`padding:0 ${gridPadding}px;`" class="madp-container">
            <div class="gutter">
                <div class="madp-frame" :style="`margin:0 -${gutter / 2}px`">
                    <div
                        class="madp-col-span-12"
                        v-if="span == 12"
                        :style="`padding:0 ${gutter / 2}px`"
                    >
                        <div class="madp-frame-text">100%</div>
                    </div>
                    <div
                        class="madp-col-span-6"
                        v-if="span == 6"
                        :style="`padding:0 ${gutter / 2}px`"
                    >
                        <div class="madp-frame-text">50%</div>
                    </div>

                    <div
                        class="madp-col-span-4"
                        v-if="span == 4"
                        :style="`padding:0 ${gutter / 2}px`"
                    >
                        <div class="madp-frame-text">33.33%</div>
                    </div>
                    <div
                        class="madp-col-span-3"
                        v-if="span == 3"
                        :style="`padding:0 ${gutter / 2}px`"
                    >
                        <div class="madp-frame-text">25%</div>
                    </div>
                    <div
                        class="madp-col-span-2"
                        v-if="span == 2"
                        :style="`padding:0 ${gutter / 2}px`"
                    >
                        <div class="madp-frame-text">16.6%</div>
                    </div>
                    <!-- <div
                :class="
                    `${mode}` === 'popup'
                        ? 'madp-frame-popup'
                        : `${mode}` === 'modular'
                        ? 'madp-frame-modular'
                        : ''
                "
                :style="`height:${gridHeight}px;line-height:${gridHeight}px`"
                class="madp-frame-item"
            >
                {{ !mode ? "" : mode == "popup" ? "弹窗卡片" : "模块卡片" }}
            </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "UiCol",
    props: {
        gridPadding: {
            type: Number,
            default: 0,
        },
        gridHeight: {
            type: Number,
            default: 300,
        },
        mode: {
            type: String,
            default: "",
        },
        background: {
            type: Boolean,
            default: false,
        },
        span: {
            type: Number,
            default: 1,
        },
    },
    data() {
        return {
            gutter: "",
        };
    },
    methods: {},
    mounted() {
        console.log("内边距--", this.framePadding, this.span, this.gutter);
        console.log("上上级---", this.$parent.gutter);
        this.gutter = this.$parent.gutter;
    },
};
</script>
<style lang="scss" scoped>
.madp-container {
    background: #fff;
    .madp_frame--display {
        background-image: linear-gradient(
            90deg,
            #fdf0f1 4.16666667%,
            transparent 4.16666667%,
            transparent 8.33333333%,
            #fdf0f1 8.33333333%,
            #fdf0f1 12.5%,
            transparent 12.5%,
            transparent 16.66666667%,
            #fdf0f1 16.66666667%,
            #fdf0f1 20.83333333%,
            transparent 20.83333333%,
            transparent 25%,
            #fdf0f1 25%,
            #fdf0f1 29.16666667%,
            transparent 29.16666667%,
            transparent 33.33333333%,
            #fdf0f1 33.33333333%,
            #fdf0f1 37.5%,
            transparent 37.5%,
            transparent 41.66666667%,
            #fdf0f1 41.66666667%,
            #fdf0f1 45.83333333%,
            transparent 45.83333333%,
            transparent 50%,
            #fdf0f1 50%,
            #fdf0f1 54.16666667%,
            transparent 54.16666667%,
            transparent 58.33333333%,
            #fdf0f1 58.33333333%,
            #fdf0f1 62.5%,
            transparent 62.5%,
            transparent 66.66666667%,
            #fdf0f1 66.66666667%,
            #fdf0f1 70.83333333%,
            transparent 70.83333333%,
            transparent 75%,
            #fdf0f1 75%,
            #fdf0f1 79.16666667%,
            transparent 79.16666667%,
            transparent 83.33333333%,
            #fdf0f1 83.33333333%,
            #fdf0f1 87.5%,
            transparent 87.5%,
            transparent 91.66666667%,
            #fdf0f1 91.66666667%,
            #fdf0f1 95.83333333%,
            transparent 95.83333333%
        );
    }
    .madp-frame {
        position: relative;
        margin-left: 0;
        margin-right: 0;
        height: auto;
        zoom: 1;
        display: block;
        .madp-frame-text {
            color: #fff;
            padding: 30px 0;
            text-align: center;
            font-size: 16px;
            background: rgba(0, 153, 229, 0.7);
        }
        .madp-col-span-12 {
            display: block;
            width: 100%;
        }
        .madp-col-span-6 {
            display: block;
            width: 50%;
        }
        .madp-col-span-4 {
            display: block;
            width: 33.33%;
        }
        .madp-col-span-3 {
            display: block;
            width: 25%;
        }
        .madp-col-span-2 {
            display: block;
            width: 16.66%;
        }
        .madp-col-span-12,
        .madp-col-span-6,
        .madp-col-span-4,
        .madp-col-span-3,
        .madp-col-span-2 {
            float: left;
            flex: 0 0 auto;
            margin-bottom: 18px;
            box-sizing: border-box;
        }
        .madp-ui-row-gutter {
            margin-right: 8px;
        }
        .madp-frame-item {
            //background: #fff;
            text-align: center;
            color: #ddd;
        }
        .madp-frame-popup {
            border-radius: 10px;
        }
        .madp-frame-modular {
            border-radius: 20px;
        }
    }
}
</style>
