from selenium import webdriver
from selenium.webdriver.common.by import By
import json
from pathlib import Path
import time
#for mypy
from selenium.webdriver.common.options import ArgOptions
from selenium.webdriver.remote.webdriver import WebDriver

link = "https://upagripardarshi.gov.in/StaticPages/StateSponsored-CropBreeding.aspx"

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

eles = driver.find_elements(By.XPATH, "/html/body/form[@id='aspnetForm']/div[@class='container-fluid']/div[@class='page-content']/div[@class='row']/div[@class='container']/div[@id='content']/div[@class='col-md-9']/div[@id='DivContent']/div[@class='context_area pageheight']/div[@class='mini-list bott_margin']")

data = []
for i in eles:
    lis = i.find_elements(By.XPATH, "./ul/li")
    
    for li in lis:
        temp = {}
        temp["Title"] = (li.text)
        temp["Download"] = (li.find_element(By.XPATH, "./a").get_attribute("href")) #type: ignore
        data.append(temp)
        
driver.quit()

fol = Path("./jsons")
fol.mkdir(exist_ok=True)
with open(fol/"uttar_pradesh.json","w",encoding="utf-8") as f:
    json.dump(data,f,indent=4,ensure_ascii=False)