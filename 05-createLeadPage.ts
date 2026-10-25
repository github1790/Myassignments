import { LoginPage } from "./01-loginPage";


export class CreateLeadPage extends LoginPage{

async enterMandatoryFields(){

    await this.page.locator('//input[@id="createLeadForm_companyName"]').fill("Testleaf");
    await this.page.locator('//input[@id="createLeadForm_firstName"]').fill("Ravindran");
    await this.page.locator('//input[@id="createLeadForm_lastName"]').fill("R")

}

async clickCreateLead(){

    await this.page.locator('//input[@class="smallSubmit"]').click();
}

}