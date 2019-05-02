class Queue<GenericType> {
    private queue: Array<GenericType>

    constructor(...args: GenericType[]) {
        this.queue = args
    }

    public enter(value: GenericType): void {
        this.queue.push(value)
    }

    public next(): GenericType | null {
        if(this.queue.length > 0 && this.queue[0]) {
            const first: GenericType = this.queue[0]
            this.queue.splice(0, 1)
            return first
        }

        return null
    }

    public print(): void {
        console.log(this.queue)
    }
}

const names = new Queue<string>('Gui', 'Pedro', 'Ana', 'Lu')

names.enter('Bruno')
names.enter('Carlos')

names.print()

names.next()
names.next()
names.next()

names.print()