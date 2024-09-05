from selenium import webdriver
from selenium.webdriver.common.by import By
import json
from pathlib import Path
import time
#for mypy
from selenium.webdriver.common.options import ArgOptions
from selenium.webdriver.remote.webdriver import WebDriver

link = 'https://agriportal.cg.nic.in/agridept/AgriEn/StateScheme.html'

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

print("driver activated")
driver.get(link)
print("page loaded")
eles = driver.find_elements(By.XPATH,f"/html/body/form[@id='form1']/fieldset/div[@class='container']/div[@id='accordion']/div[@class='panel panel-danger']")

data= []
for ele in eles:
    ele.click()
    p = ele.find_element(By.XPATH,".//div[@class='panel-heading']/h4/a")
    p.click()
    content = ele.find_element(By.XPATH,".//div[@class='panel-body']")
    rows = content.find_elements(By.TAG_NAME,"tr")
    time.sleep(2)
    for i in range(1,len(rows)):
        temp = {}
        row = rows[i]
        cols = row.find_elements(By.TAG_NAME,"td")
        temp["Title"] = cols[1].text
        links = cols[-1].find_elements(By.TAG_NAME,"a")
        temp["Download"] = links[-1].get_attribute("href") #type:ignore
        data.append(temp)
        
driver.quit()

fol = Path("./jsons")
fol.mkdir(exist_ok=True)
with open(fol/"chattisgarh.json","w",encoding="utf-8") as f:
    json.dump(data,f,indent=4,ensure_ascii=False)
    