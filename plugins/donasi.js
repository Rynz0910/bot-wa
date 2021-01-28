let handler = async m => m.reply(`
 *「Donasi Pulsa」*
 •083856085455

  *「Donasi Sub YouTube」*
  •https://youtube.com/channel/UCjOtJKGySNfDUvoA2D2c9_A
  `.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

 
      