function echo<GenericType>(data: GenericType): GenericType {
    return data
}

type Echo = <GenericType>(data: GenericType) => GenericType

const callEcho: Echo = echo

console.log(echo<string>('Something'))