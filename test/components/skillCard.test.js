import React from "react";
import { render, screen } from "../test-utils";
import SkillCard from "../../src/components/SkillCard/index";

describe("Skill Card component", () => {
  it("should render the correct skill name", () => {
    // arrange
    const skillObject = {
      skill_id: 1,
      skill_name: "accounting",
      image: "/media/categories/accounting.jpg",
      description: "PLACEHOLDER",
    };
    const expected = skillObject.skill_name;
    // act
    render(<SkillCard title={expected} />);
    const skillTitleArr = screen.getAllByRole("link");
    // this will select the 2nd link on the page, which is the one we want to test
    const actual = skillTitleArr[1];
    // assert
    expect(actual).toHaveTextContent(expected);
  });
});
