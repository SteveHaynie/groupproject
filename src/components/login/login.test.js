import {handleEnterKey} from './utils';

describe("Util functions of Login", () => {
    describe("handleEnterKey", () => {
        let mockEvent = {keyCode: 13};
        const mockCallBack = jest.fn(() => {})
        it("run callback when keycode is 13", () => {
            handleEnterKey(mockEvent, mockCallBack)
            expect(mockCallBack).toHaveBeenCalled()
            mockCallBack.mockClear()
        }) 
        it("run callback when keycode is NOT 13", () => {
            mockEvent = {keyCode: 12};
            handleEnterKey(mockEvent, mockCallBack)
            expect(mockCallBack).not.toHaveBeenCalled()
        }) 
    })
})




