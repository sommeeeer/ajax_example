const sensorSelect = document.querySelector('#sensor');

// async function fetchMyEndpoint(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
//   console.log(typeof data);
// }

async function fetchMySensorData(sensorNumber) {
  console.log(sensorNumber);
  try {
    const response = await fetch(`/sensor_data?sensor=${sensorNumber}`);
    if (!response.ok) throw new Error('Response was not ok');
    const sensorData = await response.json();
    console.log(sensorData);
    console.log(sensorData);
  } catch (err) {
    console.log(`some error happend: ${err}`);
  }
  // Plotly.newPlot(tag, graphs, layout)
}

sensorSelect.addEventListener('change', (e) => {
  console.log(e.target.value);
  fetchMySensorData(e.target.value);
});
