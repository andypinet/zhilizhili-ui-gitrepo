import arrayElements from "../lang/arrayElements";

export default function(element) {
                var eventType = 'mousewheel';
                if (document.mozHidden !== undefined) {
                    eventType = 'DOMMouseScroll';
                }

                arrayElements(element).forEach(function(arrayele) {
                    var self = arrayele;
                    arrayele.addEventListener(eventType, function(event) {
                        // 一些数据
                        var scrollTop = self.scrollTop,
                                scrollHeight = self.scrollHeight,
                                height = self.clientHeight;                             

                        var delta = (event.wheelDelta) ? event.wheelDelta : -(event.detail || 0);

                        if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
                            // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
                            self.scrollTop = delta > 0? 0: scrollHeight;
                            // 向上滚 || 向下滚
                            event.preventDefault();
                        }
                    }, false);
                });                    
            };