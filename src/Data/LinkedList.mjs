import { Node } from "./Node.mjs"

export class LinkedList {
    #count
    #head

    constructor(){
        this.#count = 0
        this.#head = null
    }

    push(item) {
        const node = new Node(item)
        let current
        if (this.#head == null) {
            this.#head = node
        } else {
            current = this.#head
            while (current.next != null)
                current = current.next
            current.next = node
        }
        this.#count++
    }

    getElementAt(index) {
        if (index>=0 && index<this.#count) {
            let node = this.#head;
            for (let i=0;i<index && node != null; i++)
                node = node.next
            console.log(node.getData())
            return node.getData();
        }
        return null
    }

    imprimir() {
        let nodoActual = this.#head;
        while (nodoActual !== null) {
            console.log(nodoActual.getData());
            nodoActual = nodoActual.next;
        }
    }

    isEmpty(){
        return this.size() === 0
    }
    size(){
        return this.#count
    }


}