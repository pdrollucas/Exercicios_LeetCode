// Nome do exercício: 143. Reorder list
// Link do exercício: https://leetcode.com/problems/reorder-list/?envType=problem-list-v2&envId=linked-list
// Plataforma: Leetcode
// Estrutura de dados utilizada: Lista encadeada
// Dificuldade: Médio
// Justificativa: Separo a lista em duas metades, inverto a segunda e intercalo. Isso permite resolver com tempo de execução 0(n)

// Solução:

function reorderList(head) {
  if (!head || !head.next) return

  // Encontrar o meio
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // Reverter a segunda metade
  let prev = null
  let curr = slow.next
  slow.next = null

  while (curr) {
    let nextTemp = curr.next
    curr.next = prev
    prev = curr
    curr = nextTemp
  }

  // Intercalar
  let first = head
  let second = prev

  while (second) {
    let temp1 = first.next
    let temp2 = second.next

    first.next = second
    second.next = temp1

    first = temp1
    second = temp2
  }
}