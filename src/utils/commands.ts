export const setText = async (element: Promise<WebdriverIO.Element>, text: string) => {
  await (await element).setValue(text);
};

export const selectDropdown = async (elements: Promise<WebdriverIO.ElementArray>, value: string) => {
  const element = await elements;
  element.forEach(async (elem) => {
    const el = await elem.getAttribute("value");
    if (el === value) {
      await elem.click();
    }
  });
};

export const click = async (element: Promise<WebdriverIO.Element>) => {
  await (await element).click();
};
