from selenium import webdriver
from selenium.webdriver.common.by import By
import json
from pathlib import Path
import time

#for mypy
from selenium.webdriver.common.options import ArgOptions
from selenium.webdriver.remote.webdriver import WebDriver

link = "https://www.agriharyana.gov.in/CenterStateSponsoredSchemes"

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
eles = driver.find_elements(By.XPATH,"/html/body[@class='d-flex flex-column min-vh-100']/form[@id='myform']/div[@class='container']/div[@class='bg-light shadow-sm shadow p-4 rounded bg-light']/div[@id='ContentPlaceHolder1_divGrid']/div/table[@id='ContentPlaceHolder1_gvCentralSchemes']/tbody/tr[@class='pagination-ys']/td/table/tbody/tr/td")

pages = len(eles)
data = [] 

for i in range(1,pages+1):
    if i != 1:
        driver.execute_script(f"__doPostBack('ctl00$ContentPlaceHolder1$gvCentralSchemes','Page${i}')")
        time.sleep(1)
    ele = driver.find_elements(By.XPATH,"/html/body[@class='d-flex flex-column min-vh-100']/form[@id='myform']/div[@class='container']/div[@class='bg-light shadow-sm shadow p-4 rounded bg-light']/div[@id='ContentPlaceHolder1_divGrid']/div/table[@id='ContentPlaceHolder1_gvCentralSchemes']/tbody/tr")
    for e in ele:
        if e.get_attribute("class") == "pagination-ys":
            continue
        else:
            temp = {}
            try:
                temp["Title"] = e.find_element(By.XPATH,"./td[2]").text
                temp["Download"] = e.find_element(By.XPATH,"./td[4]/a").get_attribute("href") #type:ignore
                data.append(temp)
            except:
                pass
            
driver.quit()    
    
fol = Path("./frontend/jsons")
fol.mkdir(exist_ok=True)
with open(fol/"haryana.json","w",encoding="utf-8") as f:
    json.dump(data,f,indent=4,ensure_ascii=False)