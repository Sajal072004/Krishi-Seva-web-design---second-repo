from selenium import webdriver
from selenium.webdriver.common.by import By
import json
from pathlib import Path
import time
#for mypy
from selenium.webdriver.common.options import ArgOptions
from selenium.webdriver.remote.webdriver import WebDriver

link = "https://diragri.assam.gov.in/swf-sitemap"

opt:ArgOptions
driver:WebDriver

opt = webdriver.FirefoxOptions()

opt.add_argument('--headless')
opt.add_argument("--window-size=1920,1080")
opt.add_argument("--start-maximized")

opt.set_preference("network.stricttransportsecurity.preloadlist", False)
opt.set_preference("security.enterprise_roots.enabled", True)
opt.set_preference("webdriver_assume_untrusted_issuer", False)
opt.set_preference("webdriver_accept_untrusted_certs", True)

driver = webdriver.Firefox(options=opt)

driver.get(link)
time.sleep(2)
ele = driver.find_elements(By.XPATH,"/html/body/section/div/div/div/div/div[@class='content-portion']/div[@class='region region-content']/div[@id='block-system-main']/div[@class='content']/div[@class='swf-sitemap']/ul/li/ul/li[5]/ul/li")
data = []
for i in ele:
    temp = {}
    temp["Title"] = i.text
    temp["Download"] = i.find_element(By.TAG_NAME,"a").get_attribute("href") #type: ignore
    for j in ["pradhan","central",'national']:
        if j in i.text.lower():
            break
    else:
        data.append(temp)

driver.quit()

fol = Path("./frontend/jsons")
fol.mkdir(exist_ok=True)
with open(fol/"assam.json","w",encoding="utf-8") as f:
    json.dump(data,f,indent=4,ensure_ascii=False)