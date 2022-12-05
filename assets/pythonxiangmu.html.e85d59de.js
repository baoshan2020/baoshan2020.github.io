import{_ as a,r as t,o as d,c as r,b as e,d as n,e as A,a as l}from"./app.dad05bb1.js";const s={},o=l(`<h1 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> python</h1><h2 id="项目一-爬虫" tabindex="-1"><a class="header-anchor" href="#项目一-爬虫" aria-hidden="true">#</a> 项目一：爬虫</h2><h3 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景" aria-hidden="true">#</a> 项目背景</h3><p>公司网站被黑客共计了，导致百度能搜索到30万条记录。</p><p>解决方法：上传死链接到百度，百度可以自动消除。</p><p>由于连接太多，手动处理太慢。第一次自动化用的是控制台js语句+键盘模拟器处理。缺点，键盘模拟器点击位置容易出错。改用python后速度快多了</p><h3 id="项目代码" tabindex="-1"><a class="header-anchor" href="#项目代码" aria-hidden="true">#</a> 项目代码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import requests  # 发送请求
import random  # 随机
from bs4 import BeautifulSoup  # 解析页面
from time import sleep  # 等待间隔

headers = {
    &quot;User-Agent&quot;: &quot;Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36&quot;,
    &quot;Accept&quot;: &quot;text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9&quot;,
    &quot;Accept-Language&quot;: &quot;zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7&quot;,
    &quot;Connection&quot;: &quot;keep-alive&quot;,
    &quot;Accept-Encoding&quot;: &quot;gzip, deflate, br&quot;,
    &quot;Host&quot;: &quot;www.baidu.com&quot;,
    # 需要更换Cookie
    &quot;Cookie&quot;: &quot;BIDUPSID=76DBD5A86BE0BD7625AADFB8B90EAD27; PSTM=1640784058; __yjs_duid=1_468e8de14fcb94e78193b0ae56115b251641473993177; BAIDUID=76DBD5A86BE0BD76327198379EDC9366:SL=0:NR=10:FG=1; BDUSS=VYb35OUFZLeU53SEM0WVFTU2loVy1oRG10SjRwYmx3REdVYVY3blYyMFpMenhqRVFBQUFBJCQAAAAAAAAAAAEAAAA73gUCbXRoc29sYXIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmiFGMZohRjRH; BDUSS_BFESS=VYb35OUFZLeU53SEM0WVFTU2loVy1oRG10SjRwYmx3REdVYVY3blYyMFpMenhqRVFBQUFBJCQAAAAAAAAAAAEAAAA73gUCbXRoc29sYXIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmiFGMZohRjRH; BDSFRCVID=XuLOJeCmHRbrH05jabgLKwTWk2KK0gOTHllnJB-JkWIwb-KVJeC6EG0Ptf8g0KubuTkzogKK0gOTH6KF_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF=tbCeoK0-tDt3qn7I5KIhDjo-qxbXqhvtBgOZ0lOEWUoDqlPxjt6H-4-TypJnL-PHW20j0h7mWnRSDlctqf6O3UFW-mciLfT-0bc4KKJxbnLWeIJo5t5h3-PhhUJiB5OMBan7_qvIXKohJh7FM4tW3J0ZyxomtfQxtNRJ0DnjtpChbRO4-TF5j5vyjU5; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; H_PS_PSSID=37377_36555_37355_37300_36885_37402_37406_36789_37260_26350_37364; BAIDUID_BFESS=76DBD5A86BE0BD76327198379EDC9366:SL=0:NR=10:FG=1; BDSFRCVID_BFESS=XuLOJeCmHRbrH05jabgLKwTWk2KK0gOTHllnJB-JkWIwb-KVJeC6EG0Ptf8g0KubuTkzogKK0gOTH6KF_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF_BFESS=tbCeoK0-tDt3qn7I5KIhDjo-qxbXqhvtBgOZ0lOEWUoDqlPxjt6H-4-TypJnL-PHW20j0h7mWnRSDlctqf6O3UFW-mciLfT-0bc4KKJxbnLWeIJo5t5h3-PhhUJiB5OMBan7_qvIXKohJh7FM4tW3J0ZyxomtfQxtNRJ0DnjtpChbRO4-TF5j5vyjU5; BDRCVFR[feWj1Vr5u3D]=I67x6TjHwwYf0; delPer=0; PSINO=1; BA_HECTOR=00ala405a100aha12l0kr68j1hitloe19; ZFY=q2Ougyzq8HanC6MrzZ:Al5LCZbJiQLnlR97TmNk4rMn0:C&quot;
}

def main():
    page = 1
    print(&#39;开始爬取第{}页&#39;.format(page + 1))
    wait_seconds = random.uniform(1, 2)  # 等待时长秒
    print(&#39;开始等待{}秒&#39;.format(wait_seconds))
    sleep(wait_seconds)  # 随机等待
    v_keyword = &#39;site:www.tusenergy.com&#39;
    url = &#39;https://www.baidu.com/s?wd=&#39; + v_keyword + &#39;&amp;pn=&#39; + str(page * 10)
    r = requests.get(url, headers=headers)
    html = r.text
    print(&#39;响应码是:{}&#39;.format(r.status_code))
    soup = BeautifulSoup(html, &#39;html.parser&#39;)
    print(soup)
    result_list = soup.find_all(class_=&#39;result c-container new-pmd&#39;)
    print(&#39;正在爬取:{},共查询到{}个结果&#39;.format(url, len(result_list)))

if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目二-k3cloud" tabindex="-1"><a class="header-anchor" href="#项目二-k3cloud" aria-hidden="true">#</a> 项目二：k3cloud</h2><h3 id="费用单自报销模块" tabindex="-1"><a class="header-anchor" href="#费用单自报销模块" aria-hidden="true">#</a> 费用单自报销模块</h3><p>动获取ceo、cfo、财务、出纳，实现一次更改，多次使用。</p>`,11),c={href:"https://vip.kingdee.com/article/351467585134584832?cid=352345987919963136&productLineId=1",target:"_blank",rel:"noopener noreferrer"},u=e("h3",{id:"基础资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#基础资料","aria-hidden":"true"},"#"),n(" 基础资料")],-1),h=e("p",null,"供应商审核后，自动分配到指定公司",-1),m={href:"https://vip.kingdee.com/article/357146268671234048?productLineId=1",target:"_blank",rel:"noopener noreferrer"};function v(b,p){const i=t("ExternalLinkIcon");return d(),r("div",null,[o,e("p",null,[n("代码分析连接："),e("a",c,[n("二叉树"),A(i)])]),u,h,e("p",null,[n("代码分析连接："),e("a",m,[n("基础资料API"),A(i)])])])}const q=a(s,[["render",v],["__file","pythonxiangmu.html.vue"]]);export{q as default};
