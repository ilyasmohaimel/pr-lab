import { openDB, type DBSchema } from 'idb';
import type { SimState } from '../domain/simulation';
export type Profile = { theme: 'dark'|'light'|'system'; textSize: 16|18|20; reducedMotion: boolean; browseFreely: boolean; bookmarks: string[] };
export type Draft = { id: string; name: string; text: string; validation: { command: string; status: string; evidence: string }[]; updatedAt: string };
export type Progress = { id: string; completed: string[]; answers: Record<string, number>; objectives: string[]; resume: string; profile: Profile; missions: Record<string, SimState>; drafts: Draft[]; updatedAt: string };
interface PRLabDB extends DBSchema { progress: { key: string; value: Progress } }
const key = 'canonical'; const blank = (): Progress => ({ id: 'pr-lab', completed: [], answers: {}, objectives: [], resume: '#/path', profile: { theme: 'dark', textSize: 18, reducedMotion: false, browseFreely: false, bookmarks: [] }, missions: {}, drafts: [], updatedAt: new Date().toISOString() });
const db = () => openDB<PRLabDB>('prlab-progress-v1', 1, { upgrade(database) { database.createObjectStore('progress'); } });
export async function loadProgress(): Promise<Progress> { const result = await (await db()).get('progress', key); return result ?? blank(); }
export async function saveProgress(progress: Progress): Promise<void> { await (await db()).put('progress', { ...progress, updatedAt: new Date().toISOString() }, key); }
export async function resetProgress(): Promise<Progress> { const next = blank(); await saveProgress(next); return next; }
export function validateImport(value: unknown): value is Progress { if (!value || typeof value !== 'object') return false; const candidate = value as Partial<Progress>; return candidate.id === 'pr-lab' && Array.isArray(candidate.completed) && typeof candidate.answers === 'object' && !!candidate.profile && typeof candidate.missions === 'object'; }
