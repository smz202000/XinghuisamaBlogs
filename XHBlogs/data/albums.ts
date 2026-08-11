// Hermes 博客：相册（暂无）
export interface Photo { url: string; caption?: string; }
export interface Album { id: string; title: string; description: string; cover: string; date: string; photos: Photo[]; }

export const albums: Album[] = [];
