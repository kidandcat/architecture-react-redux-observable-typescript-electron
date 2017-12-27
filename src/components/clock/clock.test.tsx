import * as React from "react";
import { shallow } from "enzyme";

import { Clock } from "./clock.component";
import { configureStore } from "../../State/store";

const store = configureStore({});

test("<Clock />", () => {
  const wrapper = shallow(<Clock store={store} />);
  expect(wrapper).toMatchSnapshot();
});
