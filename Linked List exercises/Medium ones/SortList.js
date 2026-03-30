// Nome do exercício: 148. Sort list
// Link do exercício: https://leetcode.com/problems/sort-list/?envType=problem-list-v2&envId=linked-list
// Plataforma: Leetcode
// Estrutura de dados utilizada: Lista encadeada
// Dificuldade: Médio
// Justificativa: Foi utilizado o merge sort pela eficiencia de garantir o tempo de execução O(n log n)

// Solução:
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var sortList = function(head) {
  if (!head || !head.next) return head;

  // 1. dividir a lista em duas metades
  let mid = getMid(head);
  let left = head;
  let right = mid.next;
  mid.next = null; // quebra a lista

  // 2. ordenar cada metade
  left = sortList(left);
  right = sortList(right);

  // 3. fazer merge
  return merge(left, right);
};

function getMid(head) {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// merge de duas listas ordenadas
function merge(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 || l2;

  return dummy.next;
}