class Single {
    private static instance: Single = new Single()

    private constructor() {
        console.log('Run the constructor only the first time it\'s called')        
    }

    static getInstance(): Single {
        return Single.instance
    }

    now() {
        return new Date
    }
}

console.log(Single.getInstance().now())
console.log(Single.getInstance().now())