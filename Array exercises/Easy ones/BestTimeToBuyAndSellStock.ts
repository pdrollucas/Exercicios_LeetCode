// Nome do exercício: 121. Best time to buy and sell stock
// Link do exercício: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=problem-list-v2&envId=array
// Plataforma: Leetcode
// Estrutura de dados utilizada: Array
// Dificuldade: Fácil
// Justificativa: Por se tratar de uma pesquisa simples sem a necessidade de ordenação, foi utilizado um algoritmo com tempo de execução O(n)

// Solução:

function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            const profit = price - minPrice;
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    return maxProfit;
}