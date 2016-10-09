/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import InfoImage from "src/components/info-image";

describe("components/info-image", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<InfoImage />);
      expect(component).to.not.be.null;
    });

  });

});
