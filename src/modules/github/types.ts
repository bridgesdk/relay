export type RepositoryResponse = {
    id: number
    node_id: string
    name: string
    full_name: string
    private: boolean
    owner: {
        id: number
        login: string
    }
    permissions: {
        admin: boolean
        maintain: boolean
        push: boolean
        triage: boolean
        pull: boolean
    }
}
