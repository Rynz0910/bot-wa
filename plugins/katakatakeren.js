let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.katakatakeren)}”`, m)
}
handler.help = ['katakatabijak']
handler.tags = ['quotes']
handler.command = /^(katakatabijak)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.katakatakeren = [
''Jadilah dirimu sendiri. Orang tidak harus menyukaimu, dan kamu tidak perlu peduli.''
''Lebih baik dibenci apa adanya dirimu daripada dicintai karena bukan dirimu.''
''Pelajaran besar dalam hidup adalah tidak pernah takut pada siapa pun atau apa pun.''
''Hidup itu sederhana, kita yang membuatnya sulit.''
''Jika kamu tidak suka mendengar sebuah ucapan kata-kata dari orang lain, jangan sampai engkau mengatakan hal yang sama pada orang lain.''
''Kapanpun kamu ingin mencapai sesuatu, tetap buka matamu, konsentrasi, dan pastikan kamu tahu persis apa yang kamu inginkan. Tidak ada yang bisa mencapai target mereka dengan mata tertutup.''
''Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.''
''Bagaimanapun kamu membenci luka, dia lah yang telah membuat kamu dewasa.''
''Untuk menjadi yang terbaik, kamu harus mempunyai mimpi besar serta semangat untuk mewujudkannya.''
''Berilah dirimu suntikan motivasi yang dapat membantumu untuk terus berjalan dan tak kenal lelah dengan segala yang ada di depanmu.''
''Tinggalkan pikiran yang membuatmu lemah, dan peganglah pikiran yang memberi kekuatan bagimu.''
''Sesuatu yang dapat dibayangkan pasti dapat diraih. Sesuatu yang bisa diimpikan pasti dapat diwujudkan.''
''Masalah yang kamu hadapi bukan untuk menjatuhkanmu, tetapi agar kamu bisa berpikir dewasa dari hari ini, kemarin, dan sebelumnya.''
''Lebih baik menerima kejujuran yang pahit, dari pada kebohongan yang manis.''
''Jangan pernah meremehkan dirimu sendiri, karena manusia itu kuat yang memiliki kemampuan untuk merubah dirinya.''
''Mula-mula, kau harus mengubah dirimu sendiri atau tidak akan ada yang berubah untukmu.''
]





