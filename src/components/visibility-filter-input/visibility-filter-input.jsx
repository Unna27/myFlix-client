import React from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';

import { setFilter } from '../../actions/actions';

  const dispatch = useDispatch();
  const updateFilter = (value) => {
    useEffect(()=>{
      dispatch(setFilter(value));
  },[dispatch])

  }

function VisibilityFilterInput({visibilityFilter}) {
  return <Form.Control
    onChange={e => updateFilter(e.target.value)}
    value={visibilityFilter}
    placeholder="filter"
  />;
}

export default VisibilityFilterInput