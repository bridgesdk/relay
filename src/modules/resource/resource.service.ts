import { readFile } from 'node:fs/promises'
import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { parse } from 'yaml'
import { ResourceConfig } from './config'
import { join } from 'node:path'

@Injectable()
export class ResourceService implements OnApplicationBootstrap {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private manifest: any

    constructor(private readonly config: ResourceConfig) {}

    getResources() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this.manifest.spec.resources.map((resource: any) => ({
            name: resource.name,
            port: resource.port
        }))
    }

    async onApplicationBootstrap() {
        const { RESOURCE_CONTROLLER_TYPE: controllerType, RESOURCE_MANIFEST_PATH: manifestPath } = this.config

        switch (controllerType) {
            case 'filesystem': {
                const absolutePathToManifest = join(process.cwd(), manifestPath)
                const data = await readFile(absolutePathToManifest, 'utf-8')

                // eslint-disable-next-line functional/immutable-data
                this.manifest = parse(data)
                break
            }

            case 'kubernetes-crd': {
                // todo: Kubernetes Custom Resource Definition called, RelayResources
                break
            }

            default: {
                throw new Error(`Unexpected Resource Controller Type: ${controllerType}`)
            }
        }
    }
}
