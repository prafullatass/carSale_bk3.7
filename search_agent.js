const searchInput = document.querySelector("#search_input")

const displayOnDOM = sale => {
    $("#agent_info").innerHTML += `<h2>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</h2>`
    $("#agent_info").innerHTML += `<div>${sale.sales_agent.email}<div>`
    $("#agent_info").innerHTML += `<h4>Profit : $${sale.gross_profit}</h4><hr/>`
}
searchInput.addEventListener("keypress", event => {
    if (event.charCode === 13) {
        //empty the DOM
        $("#weekly_report").innerHTML = ""
        $("#agent_info").innerHTML = ""
        const searchTerm = event.target.value
        salesByWeek.forEach(sale => {
            const a = Object.values(sale.sales_agent).find(str => str.includes(searchTerm))
            if (a != undefined) {
                displayOnDOM(sale)
            }
        });
    }
})