const{test,expect}=require('@playwright/test')

test('Soft Assertions',async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");

    //hard Assertion
    await expect(page).toHaveTitle("STORE");
    await expect.soft(page).toHaveTitle("Wrong Title");
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
    const logo=await page.locator("//a[@id='nava']//img");
    await expect(logo).toBeVisible();
})