/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

//@see https://docs.astro.build/ja/guides/environment-variables/

interface ImportMetaEnv {
  readonly SECRET_PASSWORD: string;
  readonly PUBLIC_ANYBODY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
