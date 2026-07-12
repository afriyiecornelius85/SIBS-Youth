export {};

declare global {
  // Augments the ambient `Cloudflare.Env` used by `cloudflare:workers`'s
  // `env` export with the bindings this project may opt into. `DB` is
  // optional because `db/index.ts` only requires it once
  // `.openai/hosting.json` declares a `d1` binding.
  namespace Cloudflare {
    interface Env {
      DB?: D1Database;
    }
  }
}
