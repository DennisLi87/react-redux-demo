
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions';
import AddTodo from '../../components/todo/AddTodo';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit ( e, input ) {
            e.preventDefault();
            if (!input.value.trim()) {
                return;
            }
            dispatch(addTodo(input.value));
            input.value = '';
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTodo);