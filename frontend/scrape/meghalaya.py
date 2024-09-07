from selenium import webdriver
from selenium.webdriver.common.by import By
import json
from pathlib import Path
import time
#for mypy
from selenium.webdriver.common.options import ArgOptions
from selenium.webdriver.remote.webdriver import WebDriver

link = "https://megagriculture.gov.in/PUBLIC/schemes_horticulture.aspx"

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

ele = driver.find_element(By.XPATH,"/html/body/div[@id='spacing']/div[@id='content']/div[@class='wrap-content zerogrid']/div[@id='zoom']/div[@class='small']/div[@class='row block']/div[@id='main-content']/div[@class='wrap-col']/form[@id='Form1']/table/tbody/tr/td[2]/select[@id='ContentPlaceHolder1_SchemeType']")
sub_but = driver.find_element(By.XPATH,"/html/body/div[@id='spacing']/div[@id='content']/div[@class='wrap-content zerogrid']/div[@id='zoom']/div[@class='small']/div[@class='row block']/div[@id='main-content']/div[@class='wrap-col']/form[@id='Form1']/table/tbody/tr/td[3]/input[@id='ContentPlaceHolder1_btnsch']")

ele.find_elements(By.TAG_NAME,"option")[1].click()
sub_but.click()

sch = driver.find_elements(By.XPATH,"/html/body/div[@id='spacing']/div[@id='content']/div[@class='wrap-content zerogrid']/div[@id='zoom']/div[@class='small']/div[@class='row block']/div[@id='main-content']/div[@class='wrap-col']/form[@id='Form1']/div[@id='ContentPlaceHolder1_SchemesLink']/table")

data = []
for i in sch:
    
    temp = {}
    temp["Title"] = i.text.split("-")[1].strip()
    temp["Download"] = i.find_element(By.TAG_NAME,"a").get_attribute("href") #type: ignore
    data.append(temp)
            
driver.quit()

fol = Path("./frontend/jsons")
fol.mkdir(exist_ok=True)
with open(fol/"meghalaya.json","w",encoding="utf-8") as f:
    json.dump(data,f,indent=4,ensure_ascii=False)