export type User = {
    fullName: string
    email: string
    avatarUrl: string
    id: string
}

const getUser = async (): Promise<User | undefined> => {
    const storageUser = await window.localStorage.getItem('user')

    if (storageUser) {
        return JSON.parse(storageUser)
    }
    return undefined
}

export { getUser }
