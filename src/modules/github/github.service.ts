import { lastValueFrom } from 'rxjs'
import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { RepositoryResponse } from './types'

@Injectable()
export class GithubService {
    constructor(private readonly http: HttpService) {}

    getUser(token: string) {
        const request = this.http.get(`/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return lastValueFrom(request).then(({ data }) => data)
    }

    getRepository(token: string, owner: string, name: string) {
        const request = this.http.get<RepositoryResponse>(`/repos/${owner}/${name}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return lastValueFrom(request).then(({ data }) => data)
    }
}
