const menu = [
  { name: 'Livros', path: '/livros', icon: 'livros', width: 44 },
  { name: 'Missões', path: '/missoes', icon: 'quest', width: 55 },
  { name: 'Conquistas', path: '/conquistas', icon: 'conquista', width: 54 },
  { name: 'Monstros', path: '/monstros', icon: 'icon_17' },
  { name: 'Arquis', path: '/arquis', icon: 'icon_50', width: 65 },
  { name: 'Territórios', path: '/territorios', icon: 'icon_23', width: 53 },
  { name: 'Calabouços', path: '/calaboucos', icon: 'icon_07', width: 44 },
  { name: 'Fichas', path: '/fichas', icon: '64929023', width: 64 },
  { name: 'Emotes', path: '/emotes', icon: 'emote_1', width: 64, rand: 25 },
  { name: 'Títulos', path: '/titulos', icon: 'coliseum', width: 45 },
  { name: 'Receitas', path: '/receitas', icon: 'icon_04', width: 51 },
  { name: 'Ferramentas', path: '/ferramentas', icon: 'stats', width: 51 },
  { name: 'Sobre', path: '/sobre', icon: 'sobre', width: 42 }
];

const colors = ['#A363D8', '#3FA4D8', '#32BEB8', '#B1C224', '#FECC30', '#FAA327', '#F7621E', '#DC3838', '#EF657A'];

export default menu.map((e, i) => ({ ...e, bg: colors[i % colors.length] }));
