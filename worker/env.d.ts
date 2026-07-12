export {};

declare global {
  // Augments the ambient `Cloudflare.Env` used by `cloudflare:workers`'s
  // `env` export with the bindings this project may opt into. `DB` is
  // optional because `db/index.ts` only requires it once wrangler.jsonc
  // declares a `d1_databases` binding named `DB`.
  namespace Cloudflare {
    interface Env {
      DB?: D1Database;
    }
  }
}
