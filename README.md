### line-embedder

在多行中嵌入一行

```
const embedder = require('line-embedder');

embedder({
  lines,                 // 多行，是一个数组
  embeds: [
    {
      insert: N,         // 在第 N 行之前，插入一行
      line: ...,         // 插入的行
    },
    {
      replace: [X, Y],   // 从第 X 行到第 Y 行，替换为一行
      line: ...,         // 替换的行
    },
    {
      insert: N,         // 优先使用 insert
      replace: [X, Y]    // replace 不起作用
      line: ...,
    },
  ],
});
```
  
**注：**  
（1）行号从 `1` 开始  
（2）会修改原始数组  
