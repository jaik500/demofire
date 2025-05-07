export interface User {

    id: number
    username: string
    password: string
    name: string
    roles: any[]
    gender: string
    email: string
    createDate: any
    status: boolean
}

export interface Login {
    email: string;
    password: string;
    
}
