from selenium import webdriver
from selenium.webdriver.common.by import By
import json
from pathlib import Path
import time
#for mypy
from selenium.webdriver.common.options import ArgOptions
from selenium.webdriver.remote.webdriver import WebDriver

link = "https://agri.odisha.gov.in/schemes-agriculture/agriculture?field_agriculture_sector_and_sch_target_id=All"

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

data = []
k = 1
try:
    while True:
        i = driver.find_element(By.XPATH,f"/html/body/div/section/section/div/div/div/div/main/section/div[2]/div/div/div/div/div/table/tbody/tr[{k}]")
        rec = i.find_elements(By.TAG_NAME, "td")
        for check in ["minutes","national","rashstriya","pradhan"]:
            if check in rec[1].text.lower():
                break
        else:
            temp = {}
            temp["Title"] = (rec[1].text)
            temp["Download"] = (rec[2].find_element(By.TAG_NAME,"a").get_attribute("href")) #type: ignore
            data.append(temp)
        k+=1
except:
    pass

driver.quit()

fol = Path("./jsons")
fol.mkdir(exist_ok=True)
with open(fol/"odisha.json","w",encoding="utf-8") as f:
    json.dump(data,f,indent=4,ensure_ascii=False)


