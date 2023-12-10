import { IsString } from 'class-validator'

export class ResourceConfig {
    @IsString()
    readonly RESOURCE_CONTROLLER_TYPE: 'filesystem' | 'kubernetes-crd' = 'filesystem'

    @IsString()
    readonly RESOURCE_MANIFEST_PATH: string = 'manifest.yaml'
}
