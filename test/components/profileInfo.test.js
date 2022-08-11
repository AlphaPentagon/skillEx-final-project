import React from "react";
import { render, screen } from "../test-utils";
import ProfileInfo from "../../src/components/ProfileInfo/index";

describe("ProfileInfo component", () => {
  it("should render the correct profile bio text", () => {
    // arrange
    const profileObject = {
      id: 1,
      profile_id: { $oid: "62e3f0e6fc13ae3b3e000005" },
      full_name: "John Smith",
      preferred_name: "John",
      teach_skills: ["english", "cooking"],
      learn_skills: ["accounting", "diy", "it"],
      bio: "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
      //   avatar_url: "https://randomuser.me/api/portraits/men/63.jpg",
      approved: true,
    };
    const expected = profileObject.bio;
    // act
    render(<ProfileInfo profile={profileObject} />);
    const actual = screen.getByTestId("bio-text");
    // assert
    expect(actual).toHaveTextContent(expected);
  });
});
