import { createStore } from "redux"

export type RotatedImage = { url: string, rotation: number}

export type State = {
    imageIndexOffset: number
    imagesWithRotations: RotatedImage[]
}

type Next = { type: 'next' }

type Rotate = { type: 'rotate', rotationDelta: number }

type Actions = Next | Rotate

function imagesReducer(state: State = {
    imageIndexOffset: 0,
    imagesWithRotations: [
        { url: "https://pixabay.com/get/gf085a3c4fafcbd085e1341b0dea66bd6584a702e989cd636a4873e0243b1c1247eb7008178708152e1b10b6d9440e2d89d876076d4a5bfbcedd732ec1a0b9b97_1280.jpg", rotation: 0}, 
        { url: "https://pixabay.com/get/gf8792a37018f41b0dd6687de325fb6c3e0dc2b53fdd7adacdb271d7f7a90d80cbd9a9a6ddb3ba1fbfa1d22cf5181d3bac5dade90dd02e0b8c6ac4771c44da91c_1280.jpg", rotation: 0},
        { url: "https://pixabay.com/get/gf8792a37018f41b0dd6687de325fb6c3e0dc2b53fdd7adacdb271d7f7a90d80cbd9a9a6ddb3ba1fbfa1d22cf5181d3bac5dade90dd02e0b8c6ac4771c44da91c_1280.jpg", rotation: 0},
        { url: "https://pixabay.com/get/g075aa8f251aad38c98b25351faedb9241e75aea8b34e160ad7db4f3e94a3168cc1924b02b967fd5cc5ee2a9297441b35496a7131ea4fa6146d33f6922a5a6125_1280.jpg", rotation: 0}
    ]
}, action: Actions) {
    switch (action.type) {
        case 'next':
        return { 
            ...state, 
            imageIndexOffset: state.imageIndexOffset++ 
        }
        case 'rotate':
        return {
            ...state, 
            imagesWithRotations: state.imagesWithRotations.map((img, index) => 
            index === selectCurrentImageIndex(state) 
                ?  { url: state.imagesWithRotations[selectCurrentImageIndex(state) ].url, rotation: state.imagesWithRotations[selectCurrentImageIndex(state) ].rotation + action.rotationDelta}
                : img)
        }
        default:
        return state
    }   
}

export function selectCurrentImageIndex(state: State): number
{
  return state.imageIndexOffset % state.imagesWithRotations.length;
}
  
export const store = createStore(imagesReducer);