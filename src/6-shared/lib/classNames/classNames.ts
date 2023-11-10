export type Mods = Record<string, string | boolean>
// const obj: Mods = {
//   'abc': "1"
// }

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean), // здесь могут прилетать undefinded, поэтому фильтрую по булеан типу
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className),
    ]
        .join(' ');
}
