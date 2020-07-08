const sort = require('./sort');
const embed = require('./embed');

/**
 * 在多行中嵌入一行 
 *
 * @param lines 多行，是一个数组
 * 
 * @param embeds [{insert,replace,line}] 多行，是一个数组
 * + insert 在当前行前面插入一行  
 * + replace 把多行替换为一行  
 * + line 嵌入的行  
 * 
 * insert 与 replace 优先使用 insert  
 * 
 * @param beforeEmbed 嵌入前事件 
 */
const main = ({ lines, embeds, beforeEmbed }) => embed({
  lines,
  embeds: sort(embeds),
  beforeEmbed,
});

module.exports = main;
