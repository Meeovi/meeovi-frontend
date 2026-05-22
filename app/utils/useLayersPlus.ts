// utils/useLayersPlus.ts
import { existsSync, readdirSync, statSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { useLayers as baseUseLayers } from 'nuxt-layers-utils'

interface ExtraOptions {
  discover?: boolean
  discoverMonorepo?: boolean
  envPrefix?: string
  requiredFiles?: string[]
  log?: boolean
}

function timestamp() {
  return new Date().toISOString().replace('T', ' ').replace('Z', '')
}

function log(msg: string, enabled: boolean) {
  if (enabled) console.log(`[layers ${timestamp()}] ${msg}`)
}

function safeList(dir: string): string[] {
  try {
    return readdirSync(dir)
  } catch {
    return []
  }
}

function discoverLocalLayers(rootDir: string, logging: boolean) {
  const layersDir = resolve(rootDir, 'layers')
  const discovered: Record<string, string> = {}

  for (const entry of safeList(layersDir)) {
    const full = join(layersDir, entry)
    if (existsSync(full) && statSync(full).isDirectory()) {
      discovered[entry] = full
      log(`Discovered local layer: ${entry}`, logging)
    }
  }

  return discovered
}

function discoverMonorepoLayers(rootDir: string, logging: boolean) {
  const packagesDir = resolve(rootDir, 'packages')
  const discovered: Record<string, string> = {}

  for (const pkg of safeList(packagesDir)) {
    const pkgLayers = join(packagesDir, pkg, 'layers')
    for (const entry of safeList(pkgLayers)) {
      const full = join(pkgLayers, entry)
      if (existsSync(full) && statSync(full).isDirectory()) {
        const name = `${pkg}-${entry}`
        discovered[name] = full
        log(`Discovered monorepo layer: ${name}`, logging)
      }
    }
  }

  return discovered
}

function passesEnvToggle(name: string, envPrefix: string, logging: boolean) {
  const envVar = `${envPrefix}${name.toUpperCase().replace(/-/g, '_')}`
  const value = process.env[envVar]

  if (value === 'false') {
    log(`Disabled by env: ${envVar}=false`, logging)
    return false
  }

  return true
}

function passesHealthCheck(path: string, requiredFiles: string[], logging: boolean) {
  for (const file of requiredFiles) {
    const full = join(path, file)
    if (!existsSync(full)) {
      log(`Health check failed: missing ${file} in ${path}`, logging)
      return false
    }
  }
  return true
}

export function useLayersPlus(
  rootDir: string,
  layers: Record<string, string>,
  extra: ExtraOptions = {}
) {
  const {
    discover = true,
    discoverMonorepo = true,
    envPrefix = 'ENABLE_',
    requiredFiles = [],
    log: logging = true
  } = extra

  // 1. Discover layers
  const discoveredLocal = discover ? discoverLocalLayers(rootDir, logging) : {}
  const discoveredMono = discoverMonorepo ? discoverMonorepoLayers(rootDir, logging) : {}

  // 2. Merge manual + discovered
  const all = { ...discoveredLocal, ...discoveredMono, ...layers }

  // 3. Apply env toggles + health checks
  const filtered: Record<string, string> = {}

  for (const [name, path] of Object.entries(all)) {
    if (!passesEnvToggle(name, envPrefix, logging)) continue
    if (!passesHealthCheck(path, requiredFiles, logging)) continue
    filtered[name] = path
  }

  // 4. Pass into nuxt-layers-utils
  const wrapped = baseUseLayers(rootDir, filtered)

  // 5. Extend alias() safely (return STRINGS only)
  const originalAlias = wrapped.alias.bind(wrapped)

  wrapped.alias = (prefix: string) => {
    const baseAliases = originalAlias(prefix)

    const extraAliases: Record<string, string> = {}

    for (const [name, path] of Object.entries(filtered)) {
      extraAliases[`${prefix}${name}`] = resolve(path)
    }

    return {
      ...baseAliases,
      ...extraAliases
    }
  }

  log(`Loaded ${Object.keys(filtered).length} layers`, logging)

  return wrapped
}
