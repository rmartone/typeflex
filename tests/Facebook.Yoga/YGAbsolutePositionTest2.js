var Yoga = Yoga || require("../lib/api.js");

// testing the case that interests me
it("absolute_layout_0x0x0x0", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(1024);
    root.setHeight(768);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setPosition(Yoga.EDGE_TOP, 0);
    root_child0.setPosition(Yoga.EDGE_BOTTOM, 0);
    root_child0.setPosition(Yoga.EDGE_LEFT, 0);
    root_child0.setPosition(Yoga.EDGE_RIGHT, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);

    root_child1.setPosition(Yoga.EDGE_TOP, 0);
    root_child1.setPosition(Yoga.EDGE_BOTTOM, 0);
    root_child1.setPosition(Yoga.EDGE_LEFT, 0);
    root_child1.setPosition(Yoga.EDGE_RIGHT, 0);

    root.insertChild(root_child0, 0);
    root.insertChild(root_child1, 1);

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(1024 === root.getComputedWidth(), "1024 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(768 === root.getComputedHeight(), "768 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(1024 === root_child0.getComputedWidth(), "1024 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(768 === root_child0.getComputedHeight(), "768 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    console.assert(0 === root_child1.getComputedLeft(), "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")");
    console.assert(0 === root_child1.getComputedTop(), "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")");
    console.assert(1024 === root_child1.getComputedWidth(), "1024 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")");
    console.assert(768 === root_child1.getComputedHeight(), "768 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")");

    //console.log(root_child0.getComputedLayout());
    //console.log(root_child1.getComputedLayout());
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});