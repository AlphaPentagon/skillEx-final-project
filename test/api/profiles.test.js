import profiles from "../../pages/api/profiles/index.js";
import { createMocks } from "node-mocks-http";

describe("/api/profiles/", () => {
  test("returns posted profile object", async () => {
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: {
        profile_id: "62e3f0e6fc13ae3b3e000005",
        full_name: "John Smith",
        preferred_name: "John",
        teach_skills: ["english", "cooking"],
        learn_skills: ["accounting", "diy", "it"],
        bio: "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
        avatar_url: "https://randomuser.me/api/portraits/men/63.jpg",
        approved: true,
      },
    });

    await profiles(req, res);

    const expected = {
      id: expect.any(Number),
      profile_id: "62e3f0e6fc13ae3b3e000005",
      full_name: "John Smith",
      preferred_name: "John",
      teach_skills: ["english", "cooking"],
      learn_skills: ["accounting", "diy", "it"],
      bio: "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
      avatar_url: "https://randomuser.me/api/portraits/men/63.jpg",
      approved: true,
    };

    //expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toStrictEqual(expected);
  });
});
