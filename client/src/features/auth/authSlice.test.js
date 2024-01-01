import {
  describe,
  expect,
  jest,
  it,
  afterEach,
  beforeEach,
} from "@jest/globals";
import fetchMock from "jest-fetch-mock";
import { logInUser } from "./reducers/logInUser";

fetchMock.enableMocks();

describe("Authentication Tests", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should dispatch success action when authentication is successful", async () => {
    const mockDispatch = jest.fn();

    const response = {
      msg: "logged in successfully",
      data: {
        logInStatus: true,
      },
    };

    fetch.mockResponse(JSON.stringify(response));

    const thunk = logInUser();

    const data = await thunk(mockDispatch);

    expect(data.payload).toEqual(response);
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: logInUser.fulfilled.type,
      }),
    );
  });

  it("should dispatch error action when authentication fails", async () => {
    const mockDispatch = jest.fn();

    fetch.mockReject(() => Promise.reject(new Error("Reject")));

    const thunk = logInUser();

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: logInUser.rejected.type,
      }),
    );
  });
});
