// Nome do exercício: 34. Find first and last position of element in sorted array
// Link do exercício: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/?envType=problem-list-v2&envId=array
// Plataforma: Leetcode
// Estrutura de dados utilizada: Array
// Dificuldade: Média
// Justificativa: Foram utilizadas duas buscas binárias, uma para o elemento da esquerda (first position) e outra para o da direita (last position)

// Solução:
function searchRange(nums: number[], target: number): number[] {
    function findLeft(): number {
        let left = 0, right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                result = mid;
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    function findRight(): number {
        let left = 0, right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                result = mid;
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    return [findLeft(), findRight()];
}