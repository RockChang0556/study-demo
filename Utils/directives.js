/**
 * @file 注册全局自定义指令
 * @author FE
 */
import Vue from 'vue';
import {
    utils
} from './utils.js';

/**
 * 定位到指定 class 位置
 * 示例: <p v-get-position="{class: 'top'}">基本信息</p>
 * 参数说明: 必填,Object
 *      {
 *          class: String 定位到页面中第一个此class的位置, 如为'top'则定位顶部
 *          defaultTop: Number(default: 60) 默认定位高度
 *      }
 */
Vue.directive('getPosition', {
    bind(el, binding, vnode) {
        const setScrollTop = scrollTop => {
            document.documentElement.scrollTop = scrollTop;
            document.body.scrollTop = scrollTop;
        };
        let data = binding.value;
        let classPost = data.class || 'hold'; // 没有则不操作
        let defaultTop = data.defaultTop || 60;
        el.addEventListener('click', () => {
            if (classPost === 'top') {
                setScrollTop(0);
                return;
            } else if (classPost === 'hold') {
                return;
            }
            let obj = document.querySelector('.' + classPost);
            let x = 0;
            let y = 0;
            while (obj) {
                x += obj.offsetLeft;
                y += obj.offsetTop;
                obj = obj.offsetParent;
            }
            setScrollTop(y - defaultTop);
        });
    }
});

/**
 * 按钮涟漪效果
 * 示例: <button v-show-waves>按钮</button>
 * 参数说明: 暂无
 */
Vue.directive('showWaves', {
    bind(el, binding, vnode) {
        el.addEventListener('mousedown', e => {
            el.classList.add('waves');
            let wavesDiv = el.getElementsByTagName('div');
            // 第一次没有涟漪div，动态生成
            if (wavesDiv[0] == null) {
                let div = document.createElement('div');
                div.className = 'waves-effect';
                el.appendChild(div);
                wavesDiv = el.getElementsByTagName('div');
            }

            // 设置按钮样式为’waves-effect‘即去掉动画样式’waves-effect-animation‘
            wavesDiv[0].className = 'waves-effect';
            // 计算涟漪坐标（折算成左上角坐标而非中心点），涟漪大小（取外标签最长边）
            let wH = el.offsetWidth > el.offsetHeight ? el.offsetWidth : el.offsetHeight;
            let iX = e.pageX - utils.offset(el).left;
            let iY = e.pageY - utils.offset(el).top;
            let nX = iX - wH / 2;
            let nY = iY - wH / 2;

            // 设置涟漪div样式，准备播放动画
            wavesDiv[0].style.width = wH + 'px';
            wavesDiv[0].style.height = wH + 'px';
            wavesDiv[0].style.left = nX + 'px';
            wavesDiv[0].style.top = nY + 'px';
            wavesDiv[0].classList.add('waves-effect-animation');
        });
    }
});

/**
 * 点击外部关闭弹框
 * 示例: <button v-clickoutside>按钮</button>
 * 参数说明: 暂无
 */
Vue.directive('clickoutside', {
    bind(el, binding, vnode) {
        function documentHandler(e) {
            if (el.contains(e.target)) {
                return false;
            }
            if (binding.expression) {
                binding.value(e);
            }
        }
        el._vueClickOutside_ = documentHandler;
        document.addEventListener('click', documentHandler);
    },
    unbind(el, binding) {
        document.removeEventListener('click', el._vueClickOutside_);
        delete el._vueClickOutside_;
    }
});

/**
 * 跨层级获取 ref
 * 使用方法: 
 *  1. 在顶级组件添加 provide
 *      provide() {
            return {
                setChildRef: (name, ref) => {
                    this[name] = ref
                },
                getChildRef: (name) => {
                    return this[name]
                }
            }
        },
    2. 在需要上报的子孙组件上添加 <p v-my-ref="c => setChildRef('myp', c)"></p>
 *  3. 在顶级组件组件使用 this.myp 就可以拿到p元素了
    4. 在其他组件 inject getChildRef这个方法,然后 this.getChildRef('myp') 也可以拿到p元素
 * 参数说明: callback('当前ref')
 */
Vue.directive('myRef', {
    bind: function bind(el, binding, vnode) {
        binding.value(vnode.componentInstance || el, vnode.key);
    },
    update: function update(el, binding, vnode, oldVnode) {
        if (oldVnode.data && oldVnode.data.directives) {
            var oldBinding = oldVnode.data.directives.find(function (directive) {
                var name = directive.name;
                return name === directiveName;
            });
            if (oldBinding && oldBinding.value !== binding.value) {
                oldBinding && oldBinding.value(null, oldVnode.key);
                binding.value(vnode.componentInstance || el, vnode.key);
                return;
            }
        }
        // Should not have this situation
        if (vnode.componentInstance !== oldVnode.componentInstance || vnode.elm !== oldVnode.elm) {
            binding.value(vnode.componentInstance || el, vnode.key);
        }
    },
    unbind: function unbind(el, binding, vnode) {
        binding.value(null, vnode.key);
    }
});