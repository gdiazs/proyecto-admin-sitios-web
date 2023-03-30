/// <reference types="vite/client" />

interface ImportMetaEnv{
    readonly VITE_API_INVENTORY_BACKEND: string;
}


interface ImportMeta {
    readonly env: ImportMetaEnv
}