from selenium import webdriver
from selenium.webdriver.common.by import By
import json
from pathlib import Path
import time
#for mypy
from selenium.webdriver.common.options import ArgOptions
from selenium.webdriver.remote.webdriver import WebDriver

link = "https://agri.punjab.gov.in/?q=schemes"

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
eles = driver.find_elements(By.XPATH, "/html/body/div[@class='main-container container']/div[@class='row']/div[@id='skiplink']/div[@class='region region-content']/div[@id='block-system-main']/div/div[@class='view-content']/div[@class='item-list']/ul/li")
data = []

for i in eles:
    
    temp = {}
    temp["Title"] = i.text
    temp["Download"] = i.find_element(By.XPATH, "./div/span/a").get_attribute("href") #type: ignore
    data.append(temp)

driver.quit()
fol = Path("./frontend/jsons")
fol.mkdir(exist_ok=True)
with open(fol/"punjab.json","w",encoding="utf-8") as f:
    json.dump(data,f,indent=4,ensure_ascii=False)
