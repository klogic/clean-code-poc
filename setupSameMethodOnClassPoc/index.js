const PocClass = require("./pocClass");

function init() {
  /**
   * according to java code in clean code book.
   * public static String render(PageData pageData) throws Exception { return render(pageData, false); }
   * public static String render(PageData pageData, boolean isSuite) throws Exception { return new SetupTeardownIncluder(pageData).render(isSuite); }
   *
   * Question
   * Can we declare same function name in class, but different argument received like code above?.
   */

  const pocClass = new PocClass();
  console.log(pocClass.get("first-value")); // fn2: first-value undefined
  console.log(pocClass.get("first-value", "secode-value")); // fn2: first-value secode-value

  /**
   * Answer
   * It can declare same function. but it will hit the latest function instead
   */
}

init();
