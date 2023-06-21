import { SetStateAction } from "react";

export const sleep = async (dlay: number | undefined) => {
    await new Promise(r => setTimeout(r, dlay))
}

export async function useYofiAnimation(styleName: { display: string; }, set: { (value: SetStateAction<{ display: string; }>): void; (value: SetStateAction<{ display: string; }>): void; (value: SetStateAction<{ display: string; }>): void; (value: SetStateAction<{ display: string; }>): void; (arg0: any): void; }, AnimationArray: string | any[]) {
    var lastAnimation = styleName;
    for (let i = 0; i < AnimationArray.length; i++) {
        i > 0 && AnimationArray[i - 1].sleep ? await sleep(AnimationArray[i - 1].sleep) : null
        lastAnimation = { ...lastAnimation, ...AnimationArray[i].style }
        set(lastAnimation)
    }
}

export const useSleep = async(dlay:number) => {
    await new Promise(r => setTimeout(r, dlay))
}