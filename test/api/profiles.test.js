import profile from "../../pages/api/profiles/[id].js";
import { createMocks } from "node-mocks-http";

describe("/api/profiles/[id]", () => {
  test("returns profile where id is 1 and object conatins correct data types", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        id: "1",
      },
    });

    await profile(req, res);

    const expected = {
      id: 1,
      profile_id: expect.any(String),
      full_name: expect.any(String),
      preferred_name: expect.any(String),
      teach_skills: expect.arrayContaining([expect.any(String)]),
      learn_skills: expect.arrayContaining([expect.any(String)]),
      bio: expect.any(String),
      avatar_url: expect.any(String),
      approved: expect.any(Boolean),
    };

    //expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toStrictEqual(expected);
  });
});
