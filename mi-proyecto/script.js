// Chart 1: IA como evolución social / solución
new Chart(document.getElementById('chart1'), {
  type: 'doughnut',
  data: {
    labels: ['LatAm (56.4%)', 'Consumidores Saludables (38.9%)', 'Consumidores No Saludables (40.9%)'],
    datasets: [{
      label: 'IA percepción social',
      data: [56.4, 38.9, 40.9],
      backgroundColor: ['#aa4465', '#d4a7d6ff', '#ebc2dcff'],
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
      backgroundColor: ['#cc9abdff', '#aa4465'],
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

// Chart 3: IA en el sector sanitario
new Chart(document.getElementById('chart3'), {
  type: 'pie',
  data: {
    labels: ['Organizaciones médicas que emplean IA (99%)', 'Organizaciones que no emplean IA (1%)'],
    datasets: [{
      data: [99, 1],
      backgroundColor: ['#aa4465','#eb9eefff']
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
      backgroundColor: ['#aa4465', '#e1a4e4ff'],
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
      backgroundColor: ['#aa4465', '#efabf3ff', '#eac9e0ff', '#ce86bfff', '#c29ebd'],
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
const steps = document.querySelectorAll(".pipeline-step");

const showOnScroll = () => {
  steps.forEach((step) => {
    const top = step.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      step.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", showOnScroll);
showOnScroll();
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".pipeline-step");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Solo una vez
        }
      });
    },
    {
      threshold: 0.1, // activa cuando el 10% de la tarjeta es visible
    }
  );

  steps.forEach((step) => {
    observer.observe(step);
  });
});

