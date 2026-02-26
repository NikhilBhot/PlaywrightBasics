const{test,expect}=require('@playwright/test')

test('Assertion In Playwright',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register');
    //Check The page URL by toHaveURL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    //To Check Titel by toHavetitle
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    //To CheckElement Is Is Visble or not :toBeVisible
    const logo=await page.locator("//img[@alt='nopCommerce demo store']");
    await expect(logo).toBeVisible();

    //elemet is enable is not :toBeEnabled
    //element is disable or not //toBeDisable
    //serach box  is enable  or not
    await expect(page.locator("//input[@id='small-searchterms']")).toBeEnabled();

    //Radio/checkbox is checked :toBeChecked

    const maleRadioButton=await page.locator("//input[@value='M']");
    await expect(maleRadioButton).toBeEnabled();
    //Radio Button to not Be checked
    await expect(maleRadioButton).not.toBeChecked();
    await maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();
    const newCheckBox=await page.locator("//input[@id='NewsLetterSubscriptions_0__IsActive']");
    await expect(newCheckBox).toBeChecked();

    //Element Have Atrribute Or not
    const registerButton=await page.locator("//button[@id='register-button']");
    await expect(registerButton).toHaveAttribute('type','submit');

     //toHaveText->Full Value 
    await expect(await page.locator("//h1")).toHaveText("Register");

    //tocontainText
    await expect(page.locator("//h1")).toContainText('Reg');

    //ToHaveValue //input box conatin value or not
    const firstName=await page.locator("//input[@id='FirstName']");
    await expect(firstName).toBeEnabled();
    await expect(firstName).toBeEditable();
    await firstName.fill("Nikhil");
    await expect(firstName).toHaveValue('Nikhil');

    //toHave Count // InDropdown how many option
    //expect(page.locator("")).toHaveCount('Count');

    //This All Are Hard Assertion
})