import React from "react";
import { shallow } from "enzyme";
import Home from "../../../app/components/dashboard";

const home = shallow(<Home />);

describe("Page Home:", () => {
  it("should has h1 title", () => {
    const title = home.find("h1").text();

    expect(title).toEqual("this is home page!");
  });
});

