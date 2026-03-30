// Nome do exercício: 20. Valid Parentheses
// Link do exercício: https://leetcode.com/problems/valid-parentheses/?envType=problem-list-v2&envId=stack
// Plataforma: Leetcode
// Estrutura de dados utilizada: Pilha
// Dificuldade: Fácil
// Justificativa: Empilho todos os caracteres de abertura. Ao encontrar fechamento, verifico se combina com o topo da pilha.

// Solução:

var isValid = function(s) {
  let stack = [];

  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    // se for fechamento
    if (map[char]) {
      let top = stack.pop();

      if (top !== map[char]) {
        return false;
      }
    } else {
      // se for abertura
      stack.push(char);
    }
  }

  return stack.length === 0;
};