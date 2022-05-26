class UserPage {
  private get url_textbox() {
    return $("#urlvalue");
  }
  private get ajax_btn() {
    return $("#submitajax");
  }
  private get sucess_elem() {
    return $(".alert-success");
  }
  private get status_text() {
    return $("#statuspre");
  }
  private get outpuarea() {
    return $("#outputpre");
  }

  async openApp(pageUrl: string): Promise<void> {
    await browser.url(pageUrl);
  }

  async enterApiUrl(apiendpoint: string) {
    await this.url_textbox.setValue(apiendpoint);
  }

  async clickOnAjaxButton() {
    await this.ajax_btn.click();
  }

  async getStatusText(): Promise<string> {
    await this.sucess_elem.waitForDisplayed();
    return this.status_text.getText();
  }

  async getOutputText(): Promise<string> {
    return await this.outpuarea.getText();
  }
}

export default new UserPage();
