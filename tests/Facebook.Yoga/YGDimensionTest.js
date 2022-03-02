/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @Generated by gentest/gentest.rb from gentest/fixtures/YGDimensionTest.html

var Yoga = Yoga || require("../lib/api.js");

it("wrap_child", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(100);
    root_child0.setHeight(100);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("wrap_grandchild", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);

    var root_child0 = Yoga.Node.create(config);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setWidth(100);
    root_child0_child0.setHeight(100);
    root_child0.insertChild(root_child0_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child0_child0.getComputedLeft(), "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0_child0.getComputedTop(), "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")");
    console.assert(100 === root_child0_child0.getComputedWidth(), "100 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0_child0.getComputedHeight(), "100 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child0_child0.getComputedLeft(), "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0_child0.getComputedTop(), "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")");
    console.assert(100 === root_child0_child0.getComputedWidth(), "100 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0_child0.getComputedHeight(), "100 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
