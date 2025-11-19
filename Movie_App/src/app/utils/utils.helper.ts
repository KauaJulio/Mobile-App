export class UtilsHelper{

    public static interpolateColor(startColor: number[], endColor: number[], progress: number): number [] {
        
        return startColor.map((start, index) => {
            return Math.round(start + (endColor[index] - start) * progress);
        });
    }

}