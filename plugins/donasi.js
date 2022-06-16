let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0896-0679-0112]
│ •  [0896-0679-0112]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
