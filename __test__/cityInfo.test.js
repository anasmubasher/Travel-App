/**
 * @jest-environment jsdom
 */
import { cityInfo } from "../src/client/js/cityInfo"

describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit function", () => {
        expect(cityInfo).toBeDefined();
})});