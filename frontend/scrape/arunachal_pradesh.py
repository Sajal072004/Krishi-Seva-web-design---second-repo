from selenium import webdriver
from selenium.webdriver.common.by import By
import json
from pathlib import Path

#for mypy
from selenium.webdriver.common.options import ArgOptions
from selenium.webdriver.remote.webdriver import WebDriver

link = 'https://agri.arunachal.gov.in/?p=schemes&type=21'

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
ele = driver.find_element(By.XPATH,"/html/body/div[@class='container-fluid']/div[@class='inner-content']/div[@class='container']/div[@class='row inner-textarea']/div[@id='style-2']/div[@class='topinner']/table[@id='example']/tbody")

table = ele.find_elements(By.TAG_NAME, 'tr')

data = []
for i in range(len(table)):
    temp = {}
    row = table[i].find_elements(By.TAG_NAME, 'td')
    temp["Title"] = (row[1].text)
    links = row[-1].find_element(By.TAG_NAME, 'a')
    temp["Download"] = (links.get_attribute('href')) #type:ignore
    data.append(temp)
    
driver.quit()    
    
fol = Path("./jsons")
fol.mkdir(exist_ok=True)
with open(fol/"arunachal_pradesh.json","w",encoding="utf-8") as f:
    json.dump(data,f,indent=4,ensure_ascii=False)