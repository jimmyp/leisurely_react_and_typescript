import  React, { Dispatch, SetStateAction } from "react"
import { connect } from "react-redux";
import { Actions, RotateImageAction, selectCurrentImageIndex, State } from "./store"

function rotateCurrentImage(rotationDelta: number, prev: State): State
{
  const currentImageIndex = selectCurrentImageIndex(prev);

  const newImages =
    prev.imagesWithRotations.map((img, index) => 
      index === currentImageIndex 
        ?  { url: prev.imagesWithRotations[currentImageIndex].url, rotation: prev.imagesWithRotations[currentImageIndex].rotation + rotationDelta}
        : img
    );

  return {
    ...prev,
    imagesWithRotations: newImages
  }
}

export const Controls = (props: { 
  rotateBy: Dispatch<number>, 
  nextImage: Dispatch<void>
  }) =>
      <div>
        <button onClick={() => props.rotateBy(-45)}>CCW</button>
        <button onClick={() => props.nextImage()}>Next Image</button>
        <button onClick={() => props.rotateBy(45)}>CW</button>
      </div>

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  rotateBy: (degrees: number) => dispatch({ 'type': 'rotate', payload: degrees }),
  nextImage: () => dispatch({ 'type': 'next'})
})

export default connect(
  null,
  mapDispatchToProps
)(Controls)