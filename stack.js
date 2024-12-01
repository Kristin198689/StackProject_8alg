class Stack {
    constructor() {
        this.items = []; // массив для хранения элементов стека
    }

    empty() {
        return this.items.length === 0;
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.empty()) {
            throw new Error("Стек пуст, невозможно выполнить pop.");
        }
        return this.items.pop();
    }

    peek() {
        if (this.empty()) {
            throw new Error("Стек пуст, невозможно выполнить peek.");
        }
        return this.items[this.items.length - 1];
    }

    search(element) {
        const index = this.items.lastIndexOf(element);
        return index === -1 ? -1 : this.items.length - 1 - index;
    }
}

// Функция для демонстрации работы стека
function runStackDemo() {
    const stack = new Stack();

    // Добавление элементов в стек
    stack.push(10);
    stack.push(20);
    stack.push(30);

    // Удаление элемента и получение верхнего элемента
    const output = document.getElementById("output");
    output.innerHTML = `
        Вершина стека: ${stack.peek()}<br>
        Удален элемент: ${stack.pop()}<br>
        Новая вершина: ${stack.peek()}<br>
        Поиск элемента 10: ${stack.search(10)}<br>
        Поиск элемента 50: ${stack.search(50)}<br>
        Стек пуст? ${stack.empty()}
    `;
}
