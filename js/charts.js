let lpChart;

const CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

function getHour(m) {
    const date = new Date(m['recTime']);
    return String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0');
}

function getHourWithSecs(m){
    const date = new Date(m['recTime']);
    return String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0') + ':' + String(date.getSeconds()).padStart(2, '0');
}

function loadHistoric(id) {
    console.log(id);

    fetch(base_url + '/historico/' + id,
        {
            method: 'GET'
        })
        .then(r => r.json())
        .then(resp => {
            console.log(resp);
            const measures = resp['mediciones']//.slice(-100);

            const labels = measures.map(m => getHour(m));

            const temperaturas = measures.map(m => m['temperatura']);
            const humedades = measures.map(m => m['humedad']);
            const luminosidades = measures.map(m => m['luminosidad']);


            console.log({
                labels,
                temperaturas,
                humedades,
                luminosidades
            });

            const data = {
                labels: labels,
                datasets: [
                    {
                        label: 'Temperatura',
                        data: temperaturas,
                        borderColor: CHART_COLORS.red,
                        fill: false,
                        tension: 0.4
                    }, {
                        label: 'Humedad',
                        data: humedades,
                        borderColor: CHART_COLORS.blue,
                        fill: false,
                        tension: 0.4
                    }, {
                        label: 'Luminosidad',
                        borderColor: CHART_COLORS.yellow,
                        data: luminosidades,
                        fill: false,
                        tension: 0.4
                    }
                ]
            };

            const config = {
                type: 'line',
                data: data,
                options: {
                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Mediciones históricas'
                        },
                    },
                    interaction: {
                        intersect: false,
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Mediciones'
                            },
                        }
                    }
                },
            };

            let ctx = document.getElementById('chartHistorico').getContext('2d');
            new Chart(ctx, config);

        })
        .catch(error => {
            console.error(error);
            alertar('No se pudo cargar el histórico', 'danger');
        });
}


function setLongPolling(m) {
    const data = {
        labels: [getHourWithSecs(m)],
        datasets: [
            {
                label: 'Temperatura',
                data: [m['temperatura']],
                borderColor: CHART_COLORS.red,
                fill: false,
                tension: 0.4
            }, {
                label: 'Humedad',
                data: [m['humedad']],
                borderColor: CHART_COLORS.blue,
                fill: false,
                tension: 0.4
            }, {
                label: 'Luminosidad',
                borderColor: CHART_COLORS.yellow,
                data: [m['luminosidad']],
                fill: false,
                tension: 0.4
            }
        ]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            elements: {
                point: {
                    radius: 0
                }
            },
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Mediciones históricas'
                },
            },
            interaction: {
                intersect: false,
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Mediciones'
                    }
                }
            }
        },
    };

    let ctx = document.getElementById('chartLongPolling').getContext('2d');
    lpChart = new Chart(ctx, config);
}

function appendLongPolling(m) {
    console.log(m);
    addData(lpChart, getHourWithSecs(m), m);
}

function addData(chart, label, data) {
    chart.data.labels.push(label);

    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data[dataset['label'].toLowerCase()]);
    });
    chart.update();
}