export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions) {
    // return new Intl.DateTimeFormat(undefined, options).format(date)
    return new Intl.DateTimeFormat("en", options).format(date)
}