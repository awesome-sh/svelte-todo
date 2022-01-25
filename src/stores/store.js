import { writable } from 'svelte/store';

export const isWrite = writable(false)
export const todos = writable([])