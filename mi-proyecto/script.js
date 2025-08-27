// Chart 1: IA como evolución social / solución
new Chart(document.getElementById('chart1'), {
  type: 'doughnut',
  data: {
    labels: ['LatAm (56.4%)', 'Consumidores Saludables (38.9%)', 'Consumidores No Saludables (40.9%)'],
    datasets: [{
      label: 'IA percepción social',
      data: [56.4, 38.9, 40.9],
      backgroundColor: ['#aa4465', '#ebcaed', '#fadcf1'],
      cutout: '70%',
      borderRadius: 10
    }]
  },
  options: {
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});

// Chart 2: Inversión en IA médica
new Chart(document.getElementById('chart2'), {
  type: 'bar',
  data: {
    labels: ['2018', '2025'],
    datasets: [{
      label: 'USD miles de millones',
      data: [24, 36],
      backgroundColor: ['#fadcf1', '#aa4465'],
      borderRadius: 8
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});

// Chart 3: Regulación de IA
new Chart(document.getElementById('chart3'), {
  type: 'pie',
  data: {
    labels: ['Saludables (65%)', 'No saludables (66.9%)'],
    datasets: [{
      data: [65, 66.9],
      backgroundColor: ['#ebcaed', '#aa4465']
    }]
  },
  options: {
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});

// Chart 4: Confianza en México
new Chart(document.getElementById('chart4'), {
  type: 'bar',
  data: {
    labels: ['México', 'Promedio Global'],
    datasets: [{
      label: 'IA para diagnóstico (%)',
      data: [58.1, 42],
      backgroundColor: ['#aa4465', '#ebcaed'],
      borderRadius: 6
    }]
  },
  options: {
    plugins: {
      legend: { display: false }
    }
  }
});
// Chart 5: Influencia futura de la IA en decisiones médicas
new Chart(document.getElementById('chart5'), {
  type: 'bar',
  data: {
    labels: [
      'Sur America',
      'Asia y El Pacifico',
      'Medio Oriente & Africa',
      'Norte America',
      'Europa'
    ],
    datasets: [{
      label: 'Porcentaje (%)',
      data: [64, 64, 63, 47, 45],
      backgroundColor: ['#aa4465', '#ebcaed', '#fadcf1', '#f5efff', '#c29ebd'],
      borderRadius: 8
    }]
  },
  options: {
    plugins: {
      legend: { display: false }
    },
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 80,
        ticks: {
          stepSize: 10
        }
      }
    }
  }
});
