from selenium import webdriver
from selenium.webdriver.common.by import By
import json
from pathlib import Path
import time
#for mypy
from selenium.webdriver.common.options import ArgOptions
from selenium.webdriver.remote.webdriver import WebDriver

link = "https://mpkrishi.mp.gov.in/Englishsite_New/suvidhaye_New.aspx"

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
ele = driver.find_elements(By.XPATH,"/html/body/section[@id='middle']/div[@class='container']/div[@class='row']/div[@class='col-sm-9']/div[@class='widget archieve']/div[4]/table[@class='table table-striped table-bordered']/tbody/tr[@class='success']")
data = []
scrape = False
for i in ele:
    if scrape:
        temp = {}
        l = i.find_elements(By.TAG_NAME,"td")[1]
        temp["Title"] = (l.text.split("|")[0].strip("PDF"))
        temp["Download"] = (l.find_element(By.TAG_NAME,"a").get_attribute("href")) #type: ignore
        data.append(temp)
            
        
    else:
        if "राज्य" in i.text:
            scrape = True
    
driver.quit()

fol = Path("./jsons")
fol.mkdir(exist_ok=True)
with open(fol/"madhaya_pradesh.json","w",encoding="utf-8") as f:
    json.dump(data,f,indent=4,ensure_ascii=False)