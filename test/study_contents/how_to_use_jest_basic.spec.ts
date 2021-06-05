/**
 * Jestの基本やり方に関するサンプル
 *
 * test("テストの説明", () => {
 *    expect("テスト対象").toXXX("予想結果");
 * });
 *
 * #> npm test                // test all test files (*spec.ts or test/**)
 * #> npm test sample.ts      // test sample file
 * #> yarn test sample.ts     // test sample file
 */


// toBe() : 基本データタイプのテスト
import exp = require("constants");

test("1 is 1", () => {
   const result = expect(1).toBe(1);

   // result : true -> undefined, false -> undefined
   // console.log(`RESULT : ${result}`);
});


// toEqual() : Objectのテストやり方
function getUser(id: string) {
   return {
      id,
      email: `user${id}@test.com`,
   };
}
test("return a user object", () => {
   expect(getUser("Ian")).toEqual({
      id: "Ian",
      email: `userIan@test.com`
   });
});


// toBeTruthy(), toBeFalsy()
test("test boolean", () => {
   // False : 0, null, undefined, false
   expect(0).toBeFalsy();
   expect(null).toBeFalsy();
   expect(undefined).toBeFalsy();
   expect(false).toBeFalsy();

   // True : 1, true ...
   expect(1).toBeTruthy();
   expect(true).toBeTruthy();
});


// toHaveLength(), toContain()
test("Test Array", () => {
   const smartPhoneVendor = ["Apple", "Samsung", "Sony"];
   expect(smartPhoneVendor).toHaveLength(3);
   expect(smartPhoneVendor).toContain("Apple");
   expect(smartPhoneVendor).toContainEqual("Apple");
   expect(smartPhoneVendor).not.toContain("Asus");
});


// toMatch() : string or regex string
test("string", () => {
   // string
   expect(getUser("Ian").email).toBe("userIan@test.com");
   // regex string
   expect(getUser("Jay").email).toMatch(/.*test.com$/);
});


// toThrow()
function getUserException(id: number) {
   if (id <= 0) throw new Error("Invalid ID");
   return {
      id,
      email: `user${id}@test.com`,
   };
};
test("throw when id is non negative", () => {

   // 重要：Exceptionの場合、テスト対象を関数で作る　→　このようにしないと実際のExceptionが発生される
   expect(() => getUserException(-1)).toThrow();
   expect(() => getUserException(-1)).toThrow("Invalid ID");
});
