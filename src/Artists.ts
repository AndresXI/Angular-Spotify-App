import { Album } from './Album';  

/** Data model for an Artist */
export class Artist {
    id: number; 
    name: string; 
    genres: any; 
    albums: Album[]; 
}