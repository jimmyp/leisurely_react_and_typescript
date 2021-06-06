import  { Dispatch } from "react"
import { connect } from "react-redux";
import { Actions } from './store'

const Controls = (props: { 
  rotateBy: Dispatch<number>, 
  nextImage: Dispatch<void>
  }) =>
      <div>
        <button onClick={() => props.rotateBy(-45)}>CCW</button>
        <button onClick={() => props.nextImage()}>Next Image</button>
        <button onClick={() => props.rotateBy(45)}>CW</button>
      </div>

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  rotateBy: (degrees: number) => dispatch({ 'type': 'rotate', rotationDelta: degrees }),
  nextImage: () => dispatch({ 'type': 'next'})
})

export default connect(
  null,
  mapDispatchToProps
)(Controls)