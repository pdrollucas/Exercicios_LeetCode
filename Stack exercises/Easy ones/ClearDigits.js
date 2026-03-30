// Nome do exercício: 3174. Clear Digits
// Link do exercício: https://leetcode.com/problems/clear-digits/?envType=problem-list-v2&envId=stack
// Plataforma: Leetcode
// Estrutura de dados utilizada: Pilha
// Dificuldade: Fácil
// Justificativa: Empilho as letras. Quando encontro um número, removo o último elemento da pilha.

// Solução:
var clearDigits = function(s) {
  let stack = [];

  for (let char of s) {
    if (char >= '0' && char <= '9') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
};