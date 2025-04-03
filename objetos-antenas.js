const antennasData = {
    antennas: [
      {
        brand: "Huawei",
        model: "ATD4518R9",
        technology: "4G",
        frequency_range: "1710-2690 MHz",
        gain: "18 dBi"
      },
      {
        brand: "Kathrein",
        model: "742215",
        technology: "3G",
        frequency_range: "1920-2170 MHz",
        gain: "17 dBi"
      },
      {
        brand: "CommScope",
        model: "DBXL-15-8065",
        technology: "4G",
        frequency_range: "698-960 MHz, 1710-2690 MHz",
        gain: "15 dBi"
      },
      {
        brand: "Ericsson",
        model: "AIR 3218",
        technology: "4G",
        frequency_range: "700-2700 MHz",
        gain: "18 dBi"
      },
      {
        brand: "Andrew",
        model: "DBXLH-6565B-VTM",
        technology: "3G",
        frequency_range: "1710-2170 MHz",
        gain: "16.5 dBi"
      }
    ]
  };
  
  function displayAntennas(data) {
    const container = document.getElementById("antennas-container");
  
    data.antennas.forEach(antenna => {
      const card = document.createElement("div");
      card.classList.add("antenna-card");
  
      card.innerHTML = `
        <h3>${antenna.brand} - ${antenna.model}</h3>
        <p><strong>Tecnología:</strong> ${antenna.technology}</p>
        <p><strong>Frecuencia:</strong> ${antenna.frequency_range}</p>
        <p><strong>Ganancia:</strong> ${antenna.gain}</p>
      `;
  
      container.appendChild(card);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    displayAntennas(antennasData);
  });
  