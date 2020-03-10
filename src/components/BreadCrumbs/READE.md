## BreadCrumbs

```javascript
import { BreadCrumbs } from '@@/BreadCrumbs'

const data = [
  {
    name: '首页',
    path: '/home',
    icon: 'icon-shoucang1',
  },
  {
    name: '列表',
    icon: 'icon-shoucang1',
  },
]

<BreadCrumbs 
  title="String"      // 面包屑标题
  separator="String"  // 自定义分隔符 默认 /
  data="Array"        // 数据
  style={{fontSize: '20px'}} // 设置字体等样式
  iconFont={{fontSize: '18px'}}  // 单独设置 icon 大小
  // onClick="function"  // 跳转
/>



```