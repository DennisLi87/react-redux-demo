import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../redux/actions'
import Link from '../../components/common/elements/Link'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: ( e ) => {
            e.preventDefault();
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);