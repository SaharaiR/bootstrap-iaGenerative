// This file is intentionally left blank.
// Write your custom JavaScript code here.
var chartTab = document.getElementById('chart-tab');

window.onload = function () {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Expenses',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    chartTab.addEventListener('click', function () {
        // Define the months
        const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    
        // Initialize arrays to store the income and expenses
        let income = [];
        let expenses = [];
    
        // Loop through each month
        for (let month of months) {
            // Get the income and expense values for the month
            let incomeValue = document.getElementById(`${month}-income`).value;
            let expenseValue = document.getElementById(`${month}-expenses`).value;
    
            // Add the values to the income and expenses arrays
            income.push(incomeValue);
            expenses.push(expenseValue);
        }
        // Update the chart data
        myChart.data.datasets[0].data = income;
        myChart.data.datasets[1].data = expenses;
    
        // Update the chart to reflect the new data
        myChart.update();
    });
}