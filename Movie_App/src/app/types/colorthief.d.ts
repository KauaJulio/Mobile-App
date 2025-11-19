declare module 'colorthief' {
    export default class Colorthief {
        getColor(sourceImage: HTMLImageEtement, quality?: number): [number, number, number];
        getpatette(sourceInage: HTMLImageEtement, colorCount?: number, quality?: number): [number, number, number][];
    }
}