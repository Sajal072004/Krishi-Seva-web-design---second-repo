from selenium import webdriver
from selenium.webdriver.common.by import By
import json
from pathlib import Path

#for mypy
from selenium.webdriver.common.options import ArgOptions
from selenium.webdriver.remote.webdriver import WebDriver

link = 'https://agriwelfare.gov.in/en/Major'

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
ele = driver.find_element(By.XPATH,"/html/body/section[@class='ab_msec']/div[@class='container']/div[@class='row']/div[@class='col-12 col-sm-12 col-md-12 col-lg-12']/div[@class='wh_cat']/table[@class='table table-bordered table-striped testdatatable']/tbody")

table = ele.find_elements(By.TAG_NAME, 'tr')


data = []

for i in range(len(table)):
    temp = {}
    row = table[i].find_elements(By.TAG_NAME, 'td')
    temp["Title"] = (row[1].text)
    links = row[3].find_elements(By.TAG_NAME, 'a')
    if len(links)==2:
        for l in links:
            if "download" in l.text.lower():
                temp["Download"] = (l.get_attribute('href'))        #type: ignore  
            if "link" in l.text.lower():
                temp["Link"] = (l.get_attribute('href'))            #type: ignore
    else:
        if "download" in l.text.lower():
            temp["Download"] = (links[0].get_attribute('href'))     #type: ignore
        else:
            temp["Download"] = ("NA")
        if "link" in l.text.lower():
            temp["Link"] = (links[0].get_attribute('href'))         #type: ignore
        else:
            temp["Link"] = ("NA")
    data.append(temp)
    
driver.quit()
fol = Path("./jsons")
fol.mkdir(exist_ok=True)
with open(fol/"india.json","w",encoding="utf-8") as f:
    json.dump(data,f,indent=4,ensure_ascii=False)