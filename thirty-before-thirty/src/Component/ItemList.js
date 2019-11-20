import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../actions/itemActions';
import ItemForm from '../Component/ItemForm';

const ItemList = (props) => {
  useEffect((props) => {
    props.fetchList()
  }, []);
  console.log(props, 'ItemList.js, line 11');

  return (
    <div className="items">
      {props.items && props.items.map(item => <Item key={item.id} item={item} />)}
      <ItemForm />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state.items,
    fetchItems: state.fetchItems,
    error: state.error
  }
};

export default connect(
  mapStateToProps,
  { fetchList }
)(ItemList);