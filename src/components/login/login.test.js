import { handleEnterKey } from "./utils";

describe("Util functions of Login", () => {
  describe("handleEnterKey", () => {
    let mockEvent = { keyCode: 13 };
    const mockCallBack = jest.fn(() => {});
    it("run callback when keycode is 13", () => {
      handleEnterKey(mockEvent, mockCallBack);
      expect(mockCallBack).toHaveBeenCalled();
      mockCallBack.mockClear();
    });
  });
});

describe("Util functions of Login", () => {
  describe("handleEnterKey", () => {
    it("run callback when keycode is NOT 13", () => {
      let mockEvent = { keyCode: 12 };
      const mockCallBack = jest.fn(() => {});
      handleEnterKey(mockEvent, mockCallBack);
      expect(mockCallBack).not.toHaveBeenCalled();
    });
  });
});
