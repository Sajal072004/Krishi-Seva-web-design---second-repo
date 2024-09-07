from selenium import webdriver
from selenium.webdriver.common.by import By
import json
from pathlib import Path

#for mypy
from selenium.webdriver.common.options import ArgOptions
from selenium.webdriver.remote.webdriver import WebDriver

link = 'https://economictimes.indiatimes.com/topic/farmers'

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

news = driver.find_elements(By.XPATH,"/html/body/main/div/div/div[@id='categorywiseTop']/div[@class='clr flt topicstry story_list']")
news.extend(driver.find_elements(By.XPATH,"/html/body/main/div/div/div[@id='categorywise']/ul[@class='data']/li[@id='all']/div[@class='clr flt topicstry story_list']"))

def extract(block):
    part = block.find_element(By.XPATH,'./div')
    title = part.find_element(By.XPATH,"./h2/a").get_attribute("title")
    link = part.find_element(By.XPATH,"./h2/a").get_attribute("href")
    desc = part.find_element(By.XPATH,"./p").text
    time = part.find_element(By.XPATH,"./time").text
    img_src = block.find_element(By.TAG_NAME,"img").get_attribute("src")
    
    return {
        "title":title,
        "link":link,
        "desc":desc,
        "time":time,
        "img_src":img_src
    }
    
data = list(map(extract,news))
driver.close()


fol = Path("./frontend/jsons")
fol.mkdir(exist_ok=True)
with open(fol/"news.json","w",encoding="utf-8") as f:
    json.dump(data,f,indent=4,ensure_ascii=False)
    