type Item<Key, Value> = { key: Key, value: Value }

class InternalMap<Key, Value> {
    items: Array<Item<Key, Value>> = new Array<Item<Key, Value>>()

    getItem(key: Key): Item<Key, Value> | null {
        const result = this.items.filter(element => element.key === key)
        return result ? result[0] : null
    }

    setItem(item: Item<Key, Value>): void {
        const found = this.getItem(item.key)

        if(found) {
            found.value = item.value
        } else {
            this.items.push(item)
        }
    }

    clear(): void {
        this.items = new Array<Item<Key, Value>>()
    }

    print(): void {
        console.log(this.items)
    }
}

const map = new InternalMap<number, string>()
map.setItem({ key: 1, value: 'Pedro' })
map.setItem({ key: 2, value: 'Rebeca' })
map.setItem({ key: 3, value: 'Maria' })
map.setItem({ key: 1, value: 'Gustavo' })

console.log(map.getItem(2))
map.print()
map.clear()
map.print()