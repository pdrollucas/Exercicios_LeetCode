// Nome do exercício: 203. Remove linked list elements
// Link do exercício: https://leetcode.com/problems/remove-linked-list-elements/description/?envType=problem-list-v2&envId=linked-list
// Plataforma: Leetcode
// Estrutura de dados utilizada: Lista Encadeada
// Dificuldade: Fácil
// Justificativa: Foi utilizado um nó dummy para evitar tratar separadamente a remoção do head da lista.

// Solução:

class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode(0, head)
  
  let current: ListNode | null = dummy

  while (current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return dummy.next
}