// Nome do exercício: 21. Merge Two Sorted List
// Link do exercício: https://leetcode.com/problems/merge-two-sorted-lists/?envType=problem-list-v2&envId=linked-list
// Plataforma: Leetcode
// Estrutura de dados utilizada: Lista Encadeada
// Dificuldade: Fácil
// Justificativa: Foi utilizado um nó dummy para evitar tratar separadamente a remoção do head da lista.

// Solução:

var mergeTwoLists = function(list1, list2) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 || list2;

  return dummy.next;
};