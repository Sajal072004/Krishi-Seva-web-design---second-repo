from selenium import webdriver
from selenium.webdriver.common.by import By
import json
from pathlib import Path

#for mypy
from selenium.webdriver.common.options import ArgOptions
from selenium.webdriver.remote.webdriver import WebDriver

link = 'https://www.apagrisnet.gov.in/tschemes.php'

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
ele = driver.find_element(By.XPATH,"/html/body/div[@class='page-wrapper']/div[@class='container']/div[@class='row']/div[@class='col-md-9 col-sm-12 col-xs-12 column']/table[@class='table table-bordered table-hover table-condensed']/tbody")

table = ele.find_elements(By.TAG_NAME, 'tr')

data = []
for i in range(1,len(table)):
    temp = {}
    row = table[i].find_elements(By.TAG_NAME, 'td')
    if row[0].text.isdigit():
        temp["Title"] = (row[1].text)
    else:
        temp["Title"] = (row[0].text)
    try:
        ref = row[-1].find_element(By.TAG_NAME, 'a')
        if link is not None and "download" in row[-1].text.lower():
            temp["Download"] = (ref.get_attribute('href'))              #type: ignore
                
        data.append(temp)
    except:
        pass
  
  
driver.quit()
  
fol = Path("./frontend/jsons")
fol.mkdir(exist_ok=True)
with open(fol/"andhra_pradesh.json","w",encoding="utf-8") as f:
    json.dump(data,f,indent=4,ensure_ascii=False)