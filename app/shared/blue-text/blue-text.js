/**
 * BlueText Custom UI Component
 * Derived from https://github.com/mikebranstein/TheNativeScriptBook/blob/master/AppendixB/PetScrapbook/app/views/shared/scrapbook-list/scrapbook-list.js 
 * Invocation: 
 * <page xmlns:bt="shared/blue-text/blue-text" ... />
 * <bt:BlueText text="This is blue text" ... />
 */

// For {N} 6
// const Label = require("tns-core-modules/ui/label").Label;

// For {N} 8
import {Label} from "@nativescript/core";

var BlueText = (function (_super) {

  __extends(BlueText, _super);

  function BlueText() {
    _super.call(this);

    this.style = "color: blue;"; 

  }; // end BlueText function
  return BlueText;
})(Label);  // Specify parent class

exports.BlueText = BlueText;