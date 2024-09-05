from selenium import webdriver
from selenium.webdriver.common.by import By
import json
from pathlib import Path
import time
#for mypy
from selenium.webdriver.common.options import ArgOptions
from selenium.webdriver.remote.webdriver import WebDriver

link = "https://www.tn.gov.in/scheme/beneficiary_wise/14"

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
while True:
    eles = driver.find_elements(By.XPATH, "/html/body/div/div/div/div/div/div/div/div/div/div/div/section/fieldset/div/div/div/p")
    for i in eles:
        temp = {}
        temp["Title"] = i.text
        temp["Download"] = i.find_element(By.XPATH, "a").get_attribute("href") #type: ignore
        data.append(temp)
    try:
        next_page = driver.find_element(By.XPATH, "/html[@class='js win chrome chrome1 webkit webkit5']/body[@class='html not-front not-logged-in two-sidebars page-scheme page-scheme-beneficiary-wise page-scheme-beneficiary-wise- page-scheme-beneficiary-wise-14 i18n-en']/div[@class='header']/div[@class='header_img']/div[@id='front_maincontainer']/div[@class='pagecontent']/div[@class='left-corner']/div[@class='clear-block']/div[@id='node']/div[@class='profile_form_div']/div[@class='about-services']/div[@class='questions']/div[@class='region region-content']/section[@id='block-system-main']/fieldset[@class='panel panel-default form-wrapper']/div[@class='panel-body']/div[@class='result_inner']/div[@class='text-center']/ul[@class='pagination']/li[@class='next last']/a")
        next_page.click()
    except:
        break
    
driver.quit()
fol = Path("./jsons")
fol.mkdir(exist_ok=True)
with open(fol/"tamil_nadu.json","w",encoding="utf-8") as f:
    json.dump(data,f,indent=4,ensure_ascii=False)