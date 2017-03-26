<template>
    <div class="mt-range" :class="{ 'mt-range-disabled': disabled }">
        <slot name="start"></slot>
        <div class="mt-range-content" ref="content">
            <div class="mt-range-runway" :style="{ 'border-top-width': barHeight + 'px' }"></div>
            <div class="mt-range-progress" :style="{ width: progress + '%', height: barHeight + 'px' }"></div>
            <div class="mt-range-thumb" ref="thumb" :style="{ left: progress + '%' }"></div>
        </div>
        <slot name="end"></slot>
    </div>
</template>
<style lang="scss">
    .mt-range {
        position: relative;
        display: flex;
        height: 30px;
        line-height: 30px;
        color:red;

        .mt-range-content {
            position: relative;
            flex: 1;
            margin-right: 30px;
        }

        .mt-range-runway {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            right: -30px;
            border-top-color: #a9acb1;
            border-top-style: solid;
        }

        .mt-range-thumb {
            background-color: #fff;
            position: absolute;
            left: 0;
            top: 0;
            width: 30px;
            height: 30px;
            border-radius: 100%;
            cursor: move;
            box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
        }

        .mt-range-progress {
            position: absolute;
            display: block;
            background-color: #26a2ff;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
        }
    }
    .mt-range-disabled {
        opacity: 0.5;
    }
</style>
<script type="text/babel">
    import draggable from './drag';

    export default {
        name: 'mt-range',
        data: function () {
            return {
                initValue: 0
            }
        },
        props: {
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100
            },
            step: {
                type: Number,
                default: 1
            },
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: Number
            },
            barHeight: {
                type: Number,
                default: 1
            },
            onChange: {
                type: Function
            }
        },

        computed: {
            progress() {
                const value = this.initValue;
                if (typeof value === 'undefined' || value === null) return 0;
                return Math.floor((value - this.min) / (this.max - this.min) * 100);
            }
        },

        mounted() {
            this.initValue = this.value;

            const thumb = this.$refs.thumb;
            const content = this.$refs.content;


            const getThumbPosition = () => {
                const contentBox = content.getBoundingClientRect();
                const thumbBox = thumb.getBoundingClientRect();

                return {
                    left: thumbBox.left - contentBox.left,
                    top: thumbBox.top - contentBox.top
                };
            };

            let dragState = {};
            draggable(thumb, {
                start: () => {
                    if (this.disabled) return;
                    const position = getThumbPosition();
                    dragState = {
                        thumbStartLeft: position.left,
                        thumbStartTop: position.top
                    };
                },
                drag: (event) => {
                    if (this.disabled) return;
                    const contentBox = content.getBoundingClientRect();
                    const deltaX = event.pageX - contentBox.left - dragState.thumbStartLeft;
                    const stepCount = Math.ceil((this.max - this.min) / this.step);
                    const newPosition = (dragState.thumbStartLeft + deltaX) - (dragState.thumbStartLeft + deltaX) % (contentBox.width / stepCount);

                    let newProgress = newPosition / contentBox.width;
                    if (newProgress < 0) {
                        newProgress = 0;
                    } else if (newProgress > 1) {
                        newProgress = 1;
                    }
                    this.progress = this.min + newProgress * (this.max - this.min);
                    this.initValue = parseInt(this.min + newProgress * (this.max - this.min));
                    this.onChange(this.initValue);
                },
                end: () => {
                    if (this.disabled) return;
                    dragState = {};
                    this.onChange(this.initValue);
                }
            });
        }
    };
</script>

