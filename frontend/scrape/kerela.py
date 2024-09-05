from selenium import webdriver
from selenium.webdriver.common.by import By
import json
from pathlib import Path
import time
#for mypy
from selenium.webdriver.common.options import ArgOptions
from selenium.webdriver.remote.webdriver import WebDriver

link = "https://keralaagriculture.gov.in/en/schemes/"

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
ele = driver.find_elements(By.XPATH,"/html/body[@class='page-template-default page page-id-9645 wp-embed-responsive siteorigin-panels  group-blog non-transparent header-sticky left-logo-right-menu full-width']/div[@id='page']/div[@id='content']/div[@class='tg-container']/div[@id='primary']/main[@id='main']/article[@id='post-9645']/div[@class='entry-content']/div[@id='pl-9645']/div")

data = []
scrape = False
for i in ele:
    if scrape:
        sch = i.find_elements(By.XPATH,"./div/div/div/div/div")
        for k in sch:
            try:
                temp = {}
                temp["Title"] = k.text.split("\n")[0]
                temp["Download"] = (k.find_element(By.TAG_NAME,'a').get_attribute("href")) #type: ignore
                data.append(temp)
            except:
                pass
        
    else:
        if "STATE PLAN SCHEMES" in i.text:
            scrape = True
    if i.text == "" or "MARKETING" in i.text:
        scrape = False
        break
    
driver.quit()

fol = Path("./jsons")
fol.mkdir(exist_ok=True)
with open(fol/"kerala.json","w",encoding="utf-8") as f:
    json.dump(data,f,indent=4,ensure_ascii=False)