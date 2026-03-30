// Nome do exercício: 143. Reorder list
// Link do exercício: https://leetcode.com/problems/reorder-list/?envType=problem-list-v2&envId=stack
// Plataforma: Leetcode
// Estrutura de dados utilizada: Pilha
// Dificuldade: Médio
// Justificativa: Coloco todos os nós em uma pilha para acessar o final. Depois intercalo início e fim ajustando os ponteiros.

// Solução:

var reorderList = function(head) {
  if (!head) return;

  let stack = [];
  let current = head;

  // 1. Coloca todos os nós na pilha
  while (current) {
    stack.push(current);
    current = current.next;
  }

  current = head;

  // 2. Reorganiza
  while (current) {
    let last = stack.pop();

    if (current === last || current.next === last) {
      last.next = null;
      break;
    }

    let temp = current.next;
    current.next = last;
    last.next = temp;

    current = temp;
  }
};