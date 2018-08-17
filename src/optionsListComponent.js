import React, { Component } from 'react';
import OptionListEntry from './optionListEntryComponent.js'
import store from './store.js'
import { connect } from 'react-redux'


var mapStateToProps = state => ({
  OptionList: state.options
})


var OptionList = (props) => (
  <div>
    <p>Hello World</p>
    {
      props.OptionList.map((item) => (
        <OptionListEntry item={item} />
      ))
    }
  </div>
)

export default connect(mapStateToProps)(OptionList);
