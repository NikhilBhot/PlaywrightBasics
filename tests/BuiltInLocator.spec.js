const{expect,test}=require('@playwright/test');


test('Built In Locator',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //For Logo -getByAltTextgit push origin feature
    await page.waitForSelector("//img[@alt='company-branding']");
    const logo=await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //Get By PlaceHolder
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    //getByRole
    await page.getByRole('button',{type:'submit'}).click();

    //getByText
    await expect(await page.getByText('manda user')).toBeVisible();
    const userName=await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    await expect(page.getByText(userName)).toBeVisible();

    //getByLabel

    //getByTitle

    //getByTestId
    
})