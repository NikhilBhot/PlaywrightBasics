const{test,expect}=require('@playwright/test')

test('Input Box',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const name=await page.locator("//input[@id='name']");
    await expect(name).toBeEditable();
    await expect(name).toBeVisible();
    await expect(name).toBeEmpty();
    await expect(name).toBeEnabled();
    await name.fill("Nikhil");
    await expect(name).toHaveValue("Nikhil");
   // await expect(name).toBeEmpty(); //Its Fail beacause we fill
   await expect(name).not.toBeEmpty();
})
