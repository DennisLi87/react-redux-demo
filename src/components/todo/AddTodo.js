import React from 'react';


let AddTodo = ( { onSubmit } ) => {
    let input;

    return (
        <div>
          <form onSubmit={ e => {
              onSubmit.call(this, e, input);
          } }>
            <input ref={ node => {
                input = node;
            } } />
            <button type="submit">
              Add Todo
            </button>
          </form>
        </div>
    )
};

export default AddTodo;