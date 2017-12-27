import * as React from "react";
import { shallow } from "enzyme";

import { ColorChanger } from "./colorChanger.component";
import { configureStore } from "../../State/store";

const store = configureStore({});

test("<ColorChanger />", () => {
  const wrapper = shallow(<ColorChanger store={store} />);
  //const input = wrapper.find("input");

  //input.simulate("change", { currentTarget: { value: "red" } });

  //expect(Store.color.tempValue).toBe("red");

  //wrapper.find("button").simulate("click");

  //expect(Store.color.value).toBe("red");
  expect(wrapper).toMatchSnapshot();
});
