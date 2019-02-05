const $ = document.querySelector.bind(document)
$("#weekly_report").innerHTML = "<h1> Weekly Report </h1>"
salesByWeek.forEach(sale => {
    $("#weekly_report").innerHTML += `<h2>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</h2>`
    Object.entries(sale.vehicle)
        .forEach(entry => $("#weekly_report").innerHTML += `<div>${entry[0]} : ${entry[1]}<div>`);
    $("#weekly_report").innerHTML += `<h4>Profit : $${sale.gross_profit}</h4><hr/>`
});

