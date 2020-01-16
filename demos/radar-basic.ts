// 雷达图

const data = [
  {
    item: 'Design',
    score: 70,
  },
  {
    item: 'Development',
    score: 60,
  },
  {
    item: 'Marketing',
    score: 60,
  },
  {
    item: 'Users',
    score: 40,
  },
  {
    item: 'Test',
    score: 60,
  },
  {
    item: 'Language',
    score: 70,
  },
  {
    item: 'Technology',
    score: 50,
  },
  {
    item: 'Support',
    score: 30,
  },
  {
    item: 'Sales',
    score: 60,
  },
  {
    item: 'UX',
    score: 50,
  },
];
const radarPlot = new g2plot.Radar(document.getElementById('canvas'), {
  data: [],
  angleField: 'item',
  radiusField: 'score',
  radiusAxis: {
    gridType: 'arc',
    gridAlternateColor: '#ccc',
  },
});
radarPlot.render();

radarPlot.changeData(data);

// 作为模块 避免变量冲突
export {};
