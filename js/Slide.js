/*
 * Copyright (c) 2017-present, salesforce.com, inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided
 * that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the
 * following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or
 * promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 * @flow
 */
import React, { Component } from 'react';

import {
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View
} from 'react-native';

import { Title } from './StyledComponents';

import Icon from './Icon';

const styles = require('./styles').default;

const blue = '#00a1e0';
const gray = '#7c868d';
const lightgray = '#dddddd';

class Slide extends Component {
  renderLeft() {
    if (this.props.leftAction) {
      return (
        <TouchableHighlight
          onPress={() => this.props.leftAction()}
          style={styles.prevButtonContainer}
          activeOpacity={0.6}
          underlayColor={lightgray}
        >
          <View>
            <Icon width={100} height={100} name="left" color={blue} />
          </View>
        </TouchableHighlight>
      );
    } else {
      return null;
    }
  }

  renderRight() {
    if (this.props.rightAction) {
      return (
        <TouchableHighlight
          onPress={() => this.props.rightAction()}
          style={styles.nextButtonContainer}
          activeOpacity={0.6}
          underlayColor={lightgray}
        >
          <View>
            <Icon width={100} height={100} name="right" color={blue} />
          </View>
        </TouchableHighlight>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderLeft()}
        <View style={{marginTop: 200}}>
        <Title text={this.props.title} />
        </View>
        <View style={styles.contentContainer}>{this.props.children}</View>
        {this.renderRight()}
      </View>
    );
  }
}

module.exports = Slide;
