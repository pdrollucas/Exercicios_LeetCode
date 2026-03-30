# Nome do exercício: 27. Remove Element
# Link do exercício: https://leetcode.com/problems/remove-element/?envType=problem-list-v2&envId=array
# Plataforma: Leetcode
# Estrutura de dados utilizada: Array
# Dificuldade: Fácil
# Justificativa: Foi utilizado um ponteiro K que indica onde colocar o próximo valor válido (diferente de val)

# Solução:
class Solution(object):
    def removeElement(self, nums, val):
        k = 0

        for num in nums:
            if num != val:
                nums[k] = num
                k += 1

        return k
