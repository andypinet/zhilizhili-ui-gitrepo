export default function(element) {
                // 数据检测

                if (Array.isArray(element)) {
                    return element;
                }
                if (element instanceof NodeList)  {
                    return Array.prototype.slice.call(element);
                }
                return [element];
            }