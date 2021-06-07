import { connect } from 'react-redux';
import { State, selectCurrentImage, RotatedImage } from './store'

type FrameProps = { rotatedImage: RotatedImage };

function Frame(props: FrameProps){
    return <img
      alt="mi imagia"
      src={props.rotatedImage.url}
      style={{transform: `rotate(${props.rotatedImage.rotation}deg)`}}
    />
  }


const mapStateToProps = (state: State): FrameProps => ({
    rotatedImage:  selectCurrentImage(state)
})
export default connect(
    mapStateToProps
)(Frame)