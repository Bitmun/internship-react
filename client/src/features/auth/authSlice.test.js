import { describe, expect, jest, it, afterEach } from "@jest/globals";
import { logInUser } from "./reducers/logInUser";
// import { logIn } from "./authSlice";

jest.mock("node-fetch");

describe("Authentication Tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should dispatch success action when authentication is successful", async () => {
    const credentials = { username: "admin", password: "1234" };
    const mockDispatch = jest.fn();

    const thunk = logInUser(credentials);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: logInUser.fulfilled.type,
        payload: expect.anything(),
      }),
    );
  });

  it("should dispatch error action when authentication fails", async () => {
    const credentials = { username: "testuser", password: "testpassword" };
    const mockDispatch = jest.fn();

    const thunk = logInUser(credentials);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: logInUser.rejected.type,
        payload: expect.anything(),
      }),
    );
  });
});
