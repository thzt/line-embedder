const insertLine = require('./util/insert-line');
const replaceLine = require('./util/replace-line');

const embed = ({ lines, embeds, beforeEmbed }) => {
  let offset = 0;
  for (const embed of embeds) {
    const { insert, replace, line } = embed;

    // 优先判断 insert
    const isInsertMode = insert != null;
    if (isInsertMode) {
      beforeEmbed && beforeEmbed({
        mode: 'insert',
        args: insert,
      });
      offset = insertLine(lines, offset, insert, line);
      continue;
    }

    const [from, to] = replace;
    beforeEmbed && beforeEmbed({
      mode: 'replace',
      args: [from, to],
    });
    offset = replaceLine(lines, offset, replace, line);
  }

  return lines;
};

module.exports = embed;
