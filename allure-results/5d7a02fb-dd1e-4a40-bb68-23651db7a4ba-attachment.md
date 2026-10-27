# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: searchProduct.spec.ts >> Search Product
- Location: tests\searchProduct.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#submit_search')
    - locator resolved to <button type="button" id="submit_search" class="btn btn-default btn-lg">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=f3e1]:
  - banner [ref=f3e2]:
    - generic [ref=f3e5]:
      - link [ref=f3e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f3e9]
      - list [ref=f3e12]:
        - listitem [ref=f3e13]:
          - link " Home" [ref=f3e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f3e15]: 
            - text: Home
        - listitem [ref=f3e16]:
          - link " Products" [ref=f3e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f3e18]: 
            - text: Products
        - listitem [ref=f3e19]:
          - link " Cart" [ref=f3e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f3e21]: 
            - text: Cart
        - listitem [ref=f3e22]:
          - link " Signup / Login" [ref=f3e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f3e24]: 
            - text: Signup / Login
        - listitem [ref=f3e25]:
          - link " Test Cases" [ref=f3e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f3e27]: 
            - text: Test Cases
        - listitem [ref=f3e28]:
          - link " API Testing" [ref=f3e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f3e30]: 
            - text: API Testing
        - listitem [ref=f3e31]:
          - link " Video Tutorials" [ref=f3e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f3e33]: 
            - text: Video Tutorials
        - listitem [ref=f3e34]:
          - link " Contact us" [ref=f3e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f3e36]: 
            - text: Contact us
  - generic [ref=f3e38]:
    - img "Website for practice" [ref=f3e39]
    - textbox "Search Product" [active] [ref=f3e40]: Blue Top
    - button "" [ref=f3e41] [cursor=pointer]
  - generic [ref=f3e45]:
    - generic [ref=f3e47]:
      - heading "Category" [level=2] [ref=f3e48]
      - generic [ref=f3e49]:
        - heading [level=4] [ref=f3e52]:
          - link " Women" [ref=f3e53] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=f3e54]: 
            - text: Women
        - heading [level=4] [ref=f3e58]:
          - link " Men" [ref=f3e59] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=f3e60]: 
            - text: Men
        - heading [level=4] [ref=f3e64]:
          - link " Kids" [ref=f3e65] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=f3e66]: 
            - text: Kids
      - insertion [ref=f3e69]:
        - generic [ref=f3e72]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=f3e74]: Discover more
          - link "Dresses" [ref=f3e75] [cursor=pointer]
          - link "Polo" [ref=f3e80] [cursor=pointer]
          - link "Economics" [ref=f3e85] [cursor=pointer]
          - link "Kids' Tops" [ref=f3e90] [cursor=pointer]
          - link "Men's Jeans" [ref=f3e95] [cursor=pointer]
          - link "Mast & Harbour" [ref=f3e100] [cursor=pointer]
          - link "T SHIRT" [ref=f3e105] [cursor=pointer]
          - link "South Asians & Diaspora" [ref=f3e110] [cursor=pointer]
      - generic [ref=f3e115]:
        - heading "Brands" [level=2] [ref=f3e116]
        - list [ref=f3e118]:
          - listitem [ref=f3e119]:
            - link "(6) Polo" [ref=f3e120] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=f3e121]: (6)
              - text: Polo
          - listitem [ref=f3e122]:
            - link "(5) H&M" [ref=f3e123] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=f3e124]: (5)
              - text: H&M
          - listitem [ref=f3e125]:
            - link "(5) Madame" [ref=f3e126] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=f3e127]: (5)
              - text: Madame
          - listitem [ref=f3e128]:
            - link "(3) Mast & Harbour" [ref=f3e129] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=f3e130]: (3)
              - text: Mast & Harbour
          - listitem [ref=f3e131]:
            - link "(4) Babyhug" [ref=f3e132] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=f3e133]: (4)
              - text: Babyhug
          - listitem [ref=f3e134]:
            - link "(3) Allen Solly Junior" [ref=f3e135] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=f3e136]: (3)
              - text: Allen Solly Junior
          - listitem [ref=f3e137]:
            - link "(3) Kookie Kids" [ref=f3e138] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=f3e139]: (3)
              - text: Kookie Kids
          - listitem [ref=f3e140]:
            - link "(5) Biba" [ref=f3e141] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=f3e142]: (5)
              - text: Biba
    - generic [ref=f3e144]:
      - heading "All Products" [level=2] [ref=f3e145]
      - generic [ref=f3e147]:
        - generic [ref=f3e148]:
          - generic [ref=f3e149]:
            - img "ecommerce website products" [ref=f3e150]
            - heading "Rs. 500" [level=2] [ref=f3e151]
            - paragraph [ref=f3e152]: Blue Top
            - generic [ref=f3e153] [cursor=pointer]:
              - generic [ref=f3e154]: 
              - text: Add to cart
          - generic [ref=f3e155]:
            - heading "Rs. 500" [level=2] [ref=f3e156]
            - paragraph [ref=f3e157]: Blue Top
            - generic [ref=f3e158] [cursor=pointer]:
              - generic [ref=f3e159]: 
              - text: Add to cart
        - list [ref=f3e161]:
          - listitem [ref=f3e162]:
            - link " View Product" [ref=f3e163] [cursor=pointer]:
              - /url: /product_details/1
              - generic [ref=f3e164]: 
              - text: View Product
      - generic [ref=f3e166]:
        - generic [ref=f3e167]:
          - generic [ref=f3e168]:
            - img "ecommerce website products" [ref=f3e169]
            - heading "Rs. 400" [level=2] [ref=f3e170]
            - paragraph [ref=f3e171]:
              - text: Men
              - link "Tshirt" [ref=f3e172] [cursor=pointer]:
                - /url: "#"
            - generic [ref=f3e175] [cursor=pointer]:
              - generic [ref=f3e176]: 
              - text: Add to cart
          - generic [ref=f3e177]:
            - heading "Rs. 400" [level=2] [ref=f3e178]
            - paragraph [ref=f3e179]: Men Tshirt
            - generic [ref=f3e180] [cursor=pointer]:
              - generic [ref=f3e181]: 
              - text: Add to cart
        - list [ref=f3e183]:
          - listitem [ref=f3e184]:
            - link " View Product" [ref=f3e185] [cursor=pointer]:
              - /url: /product_details/2
              - generic [ref=f3e186]: 
              - text: View Product
      - generic [ref=f3e188]:
        - generic [ref=f3e189]:
          - generic [ref=f3e190]:
            - img "ecommerce website products" [ref=f3e191]
            - heading "Rs. 1000" [level=2] [ref=f3e192]
            - paragraph [ref=f3e193]:
              - text: Sleeveless
              - link "Dress" [ref=f3e194] [cursor=pointer]:
                - /url: "#"
            - generic [ref=f3e197] [cursor=pointer]:
              - generic [ref=f3e198]: 
              - text: Add to cart
          - generic [ref=f3e199]:
            - heading "Rs. 1000" [level=2] [ref=f3e200]
            - paragraph [ref=f3e201]: Sleeveless Dress
            - generic [ref=f3e202] [cursor=pointer]:
              - generic [ref=f3e203]: 
              - text: Add to cart
        - list [ref=f3e205]:
          - listitem [ref=f3e206]:
            - link " View Product" [ref=f3e207] [cursor=pointer]:
              - /url: /product_details/3
              - generic [ref=f3e208]: 
              - text: View Product
      - generic [ref=f3e210]:
        - generic [ref=f3e211]:
          - generic [ref=f3e212]:
            - img "ecommerce website products" [ref=f3e213]
            - heading "Rs. 1500" [level=2] [ref=f3e214]
            - paragraph [ref=f3e215]: Stylish Dress
            - generic [ref=f3e216] [cursor=pointer]:
              - generic [ref=f3e217]: 
              - text: Add to cart
          - generic [ref=f3e218]:
            - heading "Rs. 1500" [level=2] [ref=f3e219]
            - paragraph [ref=f3e220]: Stylish Dress
            - generic [ref=f3e221] [cursor=pointer]:
              - generic [ref=f3e222]: 
              - text: Add to cart
        - list [ref=f3e224]:
          - listitem [ref=f3e225]:
            - link " View Product" [ref=f3e226] [cursor=pointer]:
              - /url: /product_details/4
              - generic [ref=f3e227]: 
              - text: View Product
      - generic [ref=f3e229]:
        - generic [ref=f3e230]:
          - generic [ref=f3e231]:
            - img "ecommerce website products" [ref=f3e232]
            - heading "Rs. 600" [level=2] [ref=f3e233]
            - paragraph [ref=f3e234]: Winter Top
            - generic [ref=f3e235] [cursor=pointer]:
              - generic [ref=f3e236]: 
              - text: Add to cart
          - generic [ref=f3e237]:
            - heading "Rs. 600" [level=2] [ref=f3e238]
            - paragraph [ref=f3e239]: Winter Top
            - generic [ref=f3e240] [cursor=pointer]:
              - generic [ref=f3e241]: 
              - text: Add to cart
        - list [ref=f3e243]:
          - listitem [ref=f3e244]:
            - link " View Product" [ref=f3e245] [cursor=pointer]:
              - /url: /product_details/5
              - generic [ref=f3e246]: 
              - text: View Product
      - generic [ref=f3e248]:
        - generic [ref=f3e249]:
          - generic [ref=f3e250]:
            - img "ecommerce website products" [ref=f3e251]
            - heading "Rs. 400" [level=2] [ref=f3e252]
            - paragraph [ref=f3e253]: Summer White Top
            - generic [ref=f3e254] [cursor=pointer]:
              - generic [ref=f3e255]: 
              - text: Add to cart
          - generic [ref=f3e256]:
            - heading "Rs. 400" [level=2] [ref=f3e257]
            - paragraph [ref=f3e258]: Summer White Top
            - generic [ref=f3e259] [cursor=pointer]:
              - generic [ref=f3e260]: 
              - text: Add to cart
        - list [ref=f3e262]:
          - listitem [ref=f3e263]:
            - link " View Product" [ref=f3e264] [cursor=pointer]:
              - /url: /product_details/6
              - generic [ref=f3e265]: 
              - text: View Product
      - generic [ref=f3e267]:
        - generic [ref=f3e268]:
          - generic [ref=f3e269]:
            - img "ecommerce website products" [ref=f3e270]
            - heading "Rs. 1000" [level=2] [ref=f3e271]
            - paragraph [ref=f3e272]: Madame Top For Women
            - generic [ref=f3e273] [cursor=pointer]:
              - generic [ref=f3e274]: 
              - text: Add to cart
          - generic [ref=f3e275]:
            - heading "Rs. 1000" [level=2] [ref=f3e276]
            - paragraph [ref=f3e277]: Madame Top For Women
            - generic [ref=f3e278] [cursor=pointer]:
              - generic [ref=f3e279]: 
              - text: Add to cart
        - list [ref=f3e281]:
          - listitem [ref=f3e282]:
            - link " View Product" [ref=f3e283] [cursor=pointer]:
              - /url: /product_details/7
              - generic [ref=f3e284]: 
              - text: View Product
      - generic [ref=f3e286]:
        - generic [ref=f3e287]:
          - generic [ref=f3e288]:
            - img "ecommerce website products" [ref=f3e289]
            - heading "Rs. 700" [level=2] [ref=f3e290]
            - paragraph [ref=f3e291]: Fancy Green Top
            - generic [ref=f3e292] [cursor=pointer]:
              - generic [ref=f3e293]: 
              - text: Add to cart
          - generic [ref=f3e294]:
            - heading "Rs. 700" [level=2] [ref=f3e295]
            - paragraph [ref=f3e296]: Fancy Green Top
            - generic [ref=f3e297] [cursor=pointer]:
              - generic [ref=f3e298]: 
              - text: Add to cart
        - list [ref=f3e300]:
          - listitem [ref=f3e301]:
            - link " View Product" [ref=f3e302] [cursor=pointer]:
              - /url: /product_details/8
              - generic [ref=f3e303]: 
              - text: View Product
      - generic [ref=f3e305]:
        - generic [ref=f3e306]:
          - generic [ref=f3e307]:
            - img "ecommerce website products" [ref=f3e308]
            - heading "Rs. 499" [level=2] [ref=f3e309]
            - paragraph [ref=f3e310]:
              - text: Sleeves Printed Top - White
              - link "Product Cart System" [ref=f3e311] [cursor=pointer]
            - generic [ref=f3e315] [cursor=pointer]:
              - generic [ref=f3e316]: 
              - text: Add to cart
          - generic [ref=f3e317]:
            - heading "Rs. 499" [level=2] [ref=f3e318]
            - paragraph [ref=f3e319]: Sleeves Printed Top - White
            - generic [ref=f3e320] [cursor=pointer]:
              - generic [ref=f3e321]: 
              - text: Add to cart
        - list [ref=f3e323]:
          - listitem [ref=f3e324]:
            - link " View Product" [ref=f3e325] [cursor=pointer]:
              - /url: /product_details/11
              - generic [ref=f3e326]: 
              - text: View Product
      - generic [ref=f3e328]:
        - generic [ref=f3e329]:
          - generic [ref=f3e330]:
            - img "ecommerce website products" [ref=f3e331]
            - heading "Rs. 359" [level=2] [ref=f3e332]
            - paragraph [ref=f3e333]:
              - text: Half Sleeves Top Schiffli Detailing - Pink
              - link "V-Neck T-Shirt" [ref=f3e334] [cursor=pointer]
            - generic [ref=f3e338] [cursor=pointer]:
              - generic [ref=f3e339]: 
              - text: Add to cart
          - generic [ref=f3e340]:
            - heading "Rs. 359" [level=2] [ref=f3e341]
            - paragraph [ref=f3e342]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=f3e343] [cursor=pointer]:
              - generic [ref=f3e344]: 
              - text: Add to cart
        - list [ref=f3e346]:
          - listitem [ref=f3e347]:
            - link " View Product" [ref=f3e348] [cursor=pointer]:
              - /url: /product_details/12
              - generic [ref=f3e349]: 
              - text: View Product
      - generic [ref=f3e351]:
        - generic [ref=f3e352]:
          - generic [ref=f3e353]:
            - img "ecommerce website products" [ref=f3e354]
            - heading "Rs. 278" [level=2] [ref=f3e355]
            - paragraph [ref=f3e356]: Frozen Tops For Kids
            - generic [ref=f3e357] [cursor=pointer]:
              - generic [ref=f3e358]: 
              - text: Add to cart
          - generic [ref=f3e359]:
            - heading "Rs. 278" [level=2] [ref=f3e360]
            - paragraph [ref=f3e361]: Frozen Tops For Kids
            - generic [ref=f3e362] [cursor=pointer]:
              - generic [ref=f3e363]: 
              - text: Add to cart
        - list [ref=f3e365]:
          - listitem [ref=f3e366]:
            - link " View Product" [ref=f3e367] [cursor=pointer]:
              - /url: /product_details/13
              - generic [ref=f3e368]: 
              - text: View Product
      - generic [ref=f3e370]:
        - generic [ref=f3e371]:
          - generic [ref=f3e372]:
            - img "ecommerce website products" [ref=f3e373]
            - heading "Rs. 679" [level=2] [ref=f3e374]
            - paragraph [ref=f3e375]: Full Sleeves Top Cherry - Pink
            - generic [ref=f3e376] [cursor=pointer]:
              - generic [ref=f3e377]: 
              - text: Add to cart
          - generic [ref=f3e378]:
            - heading "Rs. 679" [level=2] [ref=f3e379]
            - paragraph [ref=f3e380]: Full Sleeves Top Cherry - Pink
            - generic [ref=f3e381] [cursor=pointer]:
              - generic [ref=f3e382]: 
              - text: Add to cart
        - list [ref=f3e384]:
          - listitem [ref=f3e385]:
            - link " View Product" [ref=f3e386] [cursor=pointer]:
              - /url: /product_details/14
              - generic [ref=f3e387]: 
              - text: View Product
      - generic [ref=f3e389]:
        - generic [ref=f3e390]:
          - generic [ref=f3e391]:
            - img "ecommerce website products" [ref=f3e392]
            - heading "Rs. 315" [level=2] [ref=f3e393]
            - paragraph [ref=f3e394]: Printed Off Shoulder Top - White
            - generic [ref=f3e395] [cursor=pointer]:
              - generic [ref=f3e396]: 
              - text: Add to cart
          - generic [ref=f3e397]:
            - heading "Rs. 315" [level=2] [ref=f3e398]
            - paragraph [ref=f3e399]: Printed Off Shoulder Top - White
            - generic [ref=f3e400] [cursor=pointer]:
              - generic [ref=f3e401]: 
              - text: Add to cart
        - list [ref=f3e403]:
          - listitem [ref=f3e404]:
            - link " View Product" [ref=f3e405] [cursor=pointer]:
              - /url: /product_details/15
              - generic [ref=f3e406]: 
              - text: View Product
      - generic [ref=f3e408]:
        - generic [ref=f3e409]:
          - generic [ref=f3e410]:
            - img "ecommerce website products" [ref=f3e411]
            - heading "Rs. 478" [level=2] [ref=f3e412]
            - paragraph [ref=f3e413]: Sleeves Top and Short - Blue & Pink
            - generic [ref=f3e414] [cursor=pointer]:
              - generic [ref=f3e415]: 
              - text: Add to cart
          - generic [ref=f3e416]:
            - heading "Rs. 478" [level=2] [ref=f3e417]
            - paragraph [ref=f3e418]: Sleeves Top and Short - Blue & Pink
            - generic [ref=f3e419] [cursor=pointer]:
              - generic [ref=f3e420]: 
              - text: Add to cart
        - list [ref=f3e422]:
          - listitem [ref=f3e423]:
            - link " View Product" [ref=f3e424] [cursor=pointer]:
              - /url: /product_details/16
              - generic [ref=f3e425]: 
              - text: View Product
      - generic [ref=f3e427]:
        - generic [ref=f3e428]:
          - generic [ref=f3e429]:
            - img "ecommerce website products" [ref=f3e430]
            - heading "Rs. 1200" [level=2] [ref=f3e431]
            - paragraph [ref=f3e432]: Little Girls Mr. Panda Shirt
            - generic [ref=f3e433] [cursor=pointer]:
              - generic [ref=f3e434]: 
              - text: Add to cart
          - generic [ref=f3e435]:
            - heading "Rs. 1200" [level=2] [ref=f3e436]
            - paragraph [ref=f3e437]: Little Girls Mr. Panda Shirt
            - generic [ref=f3e438] [cursor=pointer]:
              - generic [ref=f3e439]: 
              - text: Add to cart
        - list [ref=f3e441]:
          - listitem [ref=f3e442]:
            - link " View Product" [ref=f3e443] [cursor=pointer]:
              - /url: /product_details/18
              - generic [ref=f3e444]: 
              - text: View Product
      - generic [ref=f3e446]:
        - generic [ref=f3e447]:
          - generic [ref=f3e448]:
            - img "ecommerce website products" [ref=f3e449]
            - heading "Rs. 1050" [level=2] [ref=f3e450]
            - paragraph [ref=f3e451]:
              - text: Sleeveless Unicorn Patch Gown - Pink
              - link "Panda Shirt" [ref=f3e452] [cursor=pointer]
            - generic [ref=f3e456] [cursor=pointer]:
              - generic [ref=f3e457]: 
              - text: Add to cart
          - generic [ref=f3e458]:
            - heading "Rs. 1050" [level=2] [ref=f3e459]
            - paragraph [ref=f3e460]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=f3e461] [cursor=pointer]:
              - generic [ref=f3e462]: 
              - text: Add to cart
        - list [ref=f3e464]:
          - listitem [ref=f3e465]:
            - link " View Product" [ref=f3e466] [cursor=pointer]:
              - /url: /product_details/19
              - generic [ref=f3e467]: 
              - text: View Product
      - generic [ref=f3e469]:
        - generic [ref=f3e470]:
          - generic [ref=f3e471]:
            - img "ecommerce website products" [ref=f3e472]
            - heading "Rs. 1190" [level=2] [ref=f3e473]
            - paragraph [ref=f3e474]: Cotton Mull Embroidered Dress
            - generic [ref=f3e475] [cursor=pointer]:
              - generic [ref=f3e476]: 
              - text: Add to cart
          - generic [ref=f3e477]:
            - heading "Rs. 1190" [level=2] [ref=f3e478]
            - paragraph [ref=f3e479]: Cotton Mull Embroidered Dress
            - generic [ref=f3e480] [cursor=pointer]:
              - generic [ref=f3e481]: 
              - text: Add to cart
        - list [ref=f3e483]:
          - listitem [ref=f3e484]:
            - link " View Product" [ref=f3e485] [cursor=pointer]:
              - /url: /product_details/20
              - generic [ref=f3e486]: 
              - text: View Product
      - generic [ref=f3e488]:
        - generic [ref=f3e489]:
          - generic [ref=f3e490]:
            - img "ecommerce website products" [ref=f3e491]
            - heading "Rs. 1530" [level=2] [ref=f3e492]
            - paragraph [ref=f3e493]: Blue Cotton Indie Mickey Dress
            - generic [ref=f3e494] [cursor=pointer]:
              - generic [ref=f3e495]: 
              - text: Add to cart
          - generic [ref=f3e496]:
            - heading "Rs. 1530" [level=2] [ref=f3e497]
            - paragraph [ref=f3e498]: Blue Cotton Indie Mickey Dress
            - generic [ref=f3e499] [cursor=pointer]:
              - generic [ref=f3e500]: 
              - text: Add to cart
        - list [ref=f3e502]:
          - listitem [ref=f3e503]:
            - link " View Product" [ref=f3e504] [cursor=pointer]:
              - /url: /product_details/21
              - generic [ref=f3e505]: 
              - text: View Product
      - generic [ref=f3e507]:
        - generic [ref=f3e508]:
          - generic [ref=f3e509]:
            - img "ecommerce website products" [ref=f3e510]
            - heading "Rs. 1600" [level=2] [ref=f3e511]
            - paragraph [ref=f3e512]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=f3e513] [cursor=pointer]:
              - generic [ref=f3e514]: 
              - text: Add to cart
          - generic [ref=f3e515]:
            - heading "Rs. 1600" [level=2] [ref=f3e516]
            - paragraph [ref=f3e517]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=f3e518] [cursor=pointer]:
              - generic [ref=f3e519]: 
              - text: Add to cart
        - list [ref=f3e521]:
          - listitem [ref=f3e522]:
            - link " View Product" [ref=f3e523] [cursor=pointer]:
              - /url: /product_details/22
              - generic [ref=f3e524]: 
              - text: View Product
      - generic [ref=f3e526]:
        - generic [ref=f3e527]:
          - generic [ref=f3e528]:
            - img "ecommerce website products" [ref=f3e529]
            - heading "Rs. 1100" [level=2] [ref=f3e530]
            - paragraph [ref=f3e531]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=f3e532] [cursor=pointer]:
              - generic [ref=f3e533]: 
              - text: Add to cart
          - generic [ref=f3e534]:
            - heading "Rs. 1100" [level=2] [ref=f3e535]
            - paragraph [ref=f3e536]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=f3e537] [cursor=pointer]:
              - generic [ref=f3e538]: 
              - text: Add to cart
        - list [ref=f3e540]:
          - listitem [ref=f3e541]:
            - link " View Product" [ref=f3e542] [cursor=pointer]:
              - /url: /product_details/23
              - generic [ref=f3e543]: 
              - text: View Product
      - generic [ref=f3e545]:
        - generic [ref=f3e546]:
          - generic [ref=f3e547]:
            - img "ecommerce website products" [ref=f3e548]
            - heading "Rs. 849" [level=2] [ref=f3e549]
            - paragraph [ref=f3e550]: Colour Blocked Shirt – Sky Blue
            - generic [ref=f3e551] [cursor=pointer]:
              - generic [ref=f3e552]: 
              - text: Add to cart
          - generic [ref=f3e553]:
            - heading "Rs. 849" [level=2] [ref=f3e554]
            - paragraph [ref=f3e555]: Colour Blocked Shirt – Sky Blue
            - generic [ref=f3e556] [cursor=pointer]:
              - generic [ref=f3e557]: 
              - text: Add to cart
        - list [ref=f3e559]:
          - listitem [ref=f3e560]:
            - link " View Product" [ref=f3e561] [cursor=pointer]:
              - /url: /product_details/24
              - generic [ref=f3e562]: 
              - text: View Product
      - generic [ref=f3e564]:
        - generic [ref=f3e565]:
          - generic [ref=f3e566]:
            - img "ecommerce website products" [ref=f3e567]
            - heading "Rs. 1299" [level=2] [ref=f3e568]
            - paragraph [ref=f3e569]:
              - text: Pure Cotton V-Neck
              - link "T-Shirt" [ref=f3e570] [cursor=pointer]:
                - /url: "#"
            - generic [ref=f3e573] [cursor=pointer]:
              - generic [ref=f3e574]: 
              - text: Add to cart
          - generic [ref=f3e575]:
            - heading "Rs. 1299" [level=2] [ref=f3e576]
            - paragraph [ref=f3e577]: Pure Cotton V-Neck T-Shirt
            - generic [ref=f3e578] [cursor=pointer]:
              - generic [ref=f3e579]: 
              - text: Add to cart
        - list [ref=f3e581]:
          - listitem [ref=f3e582]:
            - link " View Product" [ref=f3e583] [cursor=pointer]:
              - /url: /product_details/28
              - generic [ref=f3e584]: 
              - text: View Product
      - generic [ref=f3e586]:
        - generic [ref=f3e587]:
          - generic [ref=f3e588]:
            - img "ecommerce website products" [ref=f3e589]
            - heading "Rs. 1000" [level=2] [ref=f3e590]
            - paragraph [ref=f3e591]: Green Side Placket Detail T-Shirt
            - generic [ref=f3e592] [cursor=pointer]:
              - generic [ref=f3e593]: 
              - text: Add to cart
          - generic [ref=f3e594]:
            - heading "Rs. 1000" [level=2] [ref=f3e595]
            - paragraph [ref=f3e596]: Green Side Placket Detail T-Shirt
            - generic [ref=f3e597] [cursor=pointer]:
              - generic [ref=f3e598]: 
              - text: Add to cart
        - list [ref=f3e600]:
          - listitem [ref=f3e601]:
            - link " View Product" [ref=f3e602] [cursor=pointer]:
              - /url: /product_details/29
              - generic [ref=f3e603]: 
              - text: View Product
      - generic [ref=f3e605]:
        - generic [ref=f3e606]:
          - generic [ref=f3e607]:
            - img "ecommerce website products" [ref=f3e608]
            - heading "Rs. 1500" [level=2] [ref=f3e609]
            - paragraph [ref=f3e610]: Premium Polo T-Shirts
            - generic [ref=f3e611] [cursor=pointer]:
              - generic [ref=f3e612]: 
              - text: Add to cart
          - generic [ref=f3e613]:
            - heading "Rs. 1500" [level=2] [ref=f3e614]
            - paragraph [ref=f3e615]: Premium Polo T-Shirts
            - generic [ref=f3e616] [cursor=pointer]:
              - generic [ref=f3e617]: 
              - text: Add to cart
        - list [ref=f3e619]:
          - listitem [ref=f3e620]:
            - link " View Product" [ref=f3e621] [cursor=pointer]:
              - /url: /product_details/30
              - generic [ref=f3e622]: 
              - text: View Product
      - generic [ref=f3e624]:
        - generic [ref=f3e625]:
          - generic [ref=f3e626]:
            - img "ecommerce website products" [ref=f3e627]
            - heading "Rs. 850" [level=2] [ref=f3e628]
            - paragraph [ref=f3e629]: Pure Cotton Neon Green Tshirt
            - generic [ref=f3e630] [cursor=pointer]:
              - generic [ref=f3e631]: 
              - text: Add to cart
          - generic [ref=f3e632]:
            - heading "Rs. 850" [level=2] [ref=f3e633]
            - paragraph [ref=f3e634]: Pure Cotton Neon Green Tshirt
            - generic [ref=f3e635] [cursor=pointer]:
              - generic [ref=f3e636]: 
              - text: Add to cart
        - list [ref=f3e638]:
          - listitem [ref=f3e639]:
            - link " View Product" [ref=f3e640] [cursor=pointer]:
              - /url: /product_details/31
              - generic [ref=f3e641]: 
              - text: View Product
      - generic [ref=f3e643]:
        - generic [ref=f3e644]:
          - generic [ref=f3e645]:
            - img "ecommerce website products" [ref=f3e646]
            - heading "Rs. 799" [level=2] [ref=f3e647]
            - paragraph [ref=f3e648]: Soft Stretch Jeans
            - generic [ref=f3e649] [cursor=pointer]:
              - generic [ref=f3e650]: 
              - text: Add to cart
          - generic [ref=f3e651]:
            - heading "Rs. 799" [level=2] [ref=f3e652]
            - paragraph [ref=f3e653]: Soft Stretch Jeans
            - generic [ref=f3e654] [cursor=pointer]:
              - generic [ref=f3e655]: 
              - text: Add to cart
        - list [ref=f3e657]:
          - listitem [ref=f3e658]:
            - link " View Product" [ref=f3e659] [cursor=pointer]:
              - /url: /product_details/33
              - generic [ref=f3e660]: 
              - text: View Product
      - generic [ref=f3e662]:
        - generic [ref=f3e663]:
          - generic [ref=f3e664]:
            - img "ecommerce website products" [ref=f3e665]
            - heading "Rs. 1200" [level=2] [ref=f3e666]
            - paragraph [ref=f3e667]: Regular Fit Straight Jeans
            - generic [ref=f3e668] [cursor=pointer]:
              - generic [ref=f3e669]: 
              - text: Add to cart
          - generic [ref=f3e670]:
            - heading "Rs. 1200" [level=2] [ref=f3e671]
            - paragraph [ref=f3e672]: Regular Fit Straight Jeans
            - generic [ref=f3e673] [cursor=pointer]:
              - generic [ref=f3e674]: 
              - text: Add to cart
        - list [ref=f3e676]:
          - listitem [ref=f3e677]:
            - link " View Product" [ref=f3e678] [cursor=pointer]:
              - /url: /product_details/35
              - generic [ref=f3e679]: 
              - text: View Product
      - generic [ref=f3e681]:
        - generic [ref=f3e682]:
          - generic [ref=f3e683]:
            - img "ecommerce website products" [ref=f3e684]
            - heading "Rs. 1400" [level=2] [ref=f3e685]
            - paragraph [ref=f3e686]: Grunt Blue Slim Fit Jeans
            - generic [ref=f3e687] [cursor=pointer]:
              - generic [ref=f3e688]: 
              - text: Add to cart
          - generic [ref=f3e689]:
            - heading "Rs. 1400" [level=2] [ref=f3e690]
            - paragraph [ref=f3e691]: Grunt Blue Slim Fit Jeans
            - generic [ref=f3e692] [cursor=pointer]:
              - generic [ref=f3e693]: 
              - text: Add to cart
        - list [ref=f3e695]:
          - listitem [ref=f3e696]:
            - link " View Product" [ref=f3e697] [cursor=pointer]:
              - /url: /product_details/37
              - generic [ref=f3e698]: 
              - text: View Product
      - generic [ref=f3e700]:
        - generic [ref=f3e701]:
          - generic [ref=f3e702]:
            - img "ecommerce website products" [ref=f3e703]
            - heading "Rs. 2300" [level=2] [ref=f3e704]
            - paragraph [ref=f3e705]: Rose Pink Embroidered Maxi Dress
            - generic [ref=f3e706] [cursor=pointer]:
              - generic [ref=f3e707]: 
              - text: Add to cart
          - generic [ref=f3e708]:
            - heading "Rs. 2300" [level=2] [ref=f3e709]
            - paragraph [ref=f3e710]: Rose Pink Embroidered Maxi Dress
            - generic [ref=f3e711] [cursor=pointer]:
              - generic [ref=f3e712]: 
              - text: Add to cart
        - list [ref=f3e714]:
          - listitem [ref=f3e715]:
            - link " View Product" [ref=f3e716] [cursor=pointer]:
              - /url: /product_details/38
              - generic [ref=f3e717]: 
              - text: View Product
      - generic [ref=f3e719]:
        - generic [ref=f3e720]:
          - generic [ref=f3e721]:
            - img "ecommerce website products" [ref=f3e722]
            - heading "Rs. 3000" [level=2] [ref=f3e723]
            - paragraph [ref=f3e724]: Cotton Silk Hand Block Print Saree
            - generic [ref=f3e725] [cursor=pointer]:
              - generic [ref=f3e726]: 
              - text: Add to cart
          - generic [ref=f3e727]:
            - heading "Rs. 3000" [level=2] [ref=f3e728]
            - paragraph [ref=f3e729]: Cotton Silk Hand Block Print Saree
            - generic [ref=f3e730] [cursor=pointer]:
              - generic [ref=f3e731]: 
              - text: Add to cart
        - list [ref=f3e733]:
          - listitem [ref=f3e734]:
            - link " View Product" [ref=f3e735] [cursor=pointer]:
              - /url: /product_details/39
              - generic [ref=f3e736]: 
              - text: View Product
      - generic [ref=f3e738]:
        - generic [ref=f3e739]:
          - generic [ref=f3e740]:
            - img "ecommerce website products" [ref=f3e741]
            - heading "Rs. 3500" [level=2] [ref=f3e742]
            - paragraph [ref=f3e743]: Rust Red Linen Saree
            - generic [ref=f3e744] [cursor=pointer]:
              - generic [ref=f3e745]: 
              - text: Add to cart
          - generic [ref=f3e746]:
            - heading "Rs. 3500" [level=2] [ref=f3e747]
            - paragraph [ref=f3e748]: Rust Red Linen Saree
            - generic [ref=f3e749] [cursor=pointer]:
              - generic [ref=f3e750]: 
              - text: Add to cart
        - list [ref=f3e752]:
          - listitem [ref=f3e753]:
            - link " View Product" [ref=f3e754] [cursor=pointer]:
              - /url: /product_details/40
              - generic [ref=f3e755]: 
              - text: View Product
      - generic [ref=f3e757]:
        - generic [ref=f3e758]:
          - generic [ref=f3e759]:
            - img "ecommerce website products" [ref=f3e760]
            - heading "Rs. 5000" [level=2] [ref=f3e761]
            - paragraph [ref=f3e762]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=f3e763] [cursor=pointer]:
              - generic [ref=f3e764]: 
              - text: Add to cart
          - generic [ref=f3e765]:
            - heading "Rs. 5000" [level=2] [ref=f3e766]
            - paragraph [ref=f3e767]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=f3e768] [cursor=pointer]:
              - generic [ref=f3e769]: 
              - text: Add to cart
        - list [ref=f3e771]:
          - listitem [ref=f3e772]:
            - link " View Product" [ref=f3e773] [cursor=pointer]:
              - /url: /product_details/41
              - generic [ref=f3e774]: 
              - text: View Product
      - generic [ref=f3e776]:
        - generic [ref=f3e777]:
          - generic [ref=f3e778]:
            - img "ecommerce website products" [ref=f3e779]
            - heading "Rs. 1400" [level=2] [ref=f3e780]
            - paragraph [ref=f3e781]: Lace Top For Women
            - generic [ref=f3e782] [cursor=pointer]:
              - generic [ref=f3e783]: 
              - text: Add to cart
          - generic [ref=f3e784]:
            - heading "Rs. 1400" [level=2] [ref=f3e785]
            - paragraph [ref=f3e786]: Lace Top For Women
            - generic [ref=f3e787] [cursor=pointer]:
              - generic [ref=f3e788]: 
              - text: Add to cart
        - list [ref=f3e790]:
          - listitem [ref=f3e791]:
            - link " View Product" [ref=f3e792] [cursor=pointer]:
              - /url: /product_details/42
              - generic [ref=f3e793]: 
              - text: View Product
      - generic [ref=f3e795]:
        - generic [ref=f3e796]:
          - generic [ref=f3e797]:
            - img "ecommerce website products" [ref=f3e798]
            - heading "Rs. 1389" [level=2] [ref=f3e799]
            - paragraph [ref=f3e800]:
              - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - link "V-Neck T-Shirt" [ref=f3e801] [cursor=pointer]
            - generic [ref=f3e805] [cursor=pointer]:
              - generic [ref=f3e806]: 
              - text: Add to cart
          - generic [ref=f3e807]:
            - heading "Rs. 1389" [level=2] [ref=f3e808]
            - paragraph [ref=f3e809]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=f3e810] [cursor=pointer]:
              - generic [ref=f3e811]: 
              - text: Add to cart
        - list [ref=f3e813]:
          - listitem [ref=f3e814]:
            - link " View Product" [ref=f3e815] [cursor=pointer]:
              - /url: /product_details/43
              - generic [ref=f3e816]: 
              - text: View Product
  - insertion [ref=f3e818]
  - contentinfo [ref=f3e820]:
    - generic [ref=f3e825]:
      - heading "Subscription" [level=2] [ref=f3e826]
      - generic [ref=f3e827]:
        - textbox "Your email address" [ref=f3e828]
        - button "" [ref=f3e829] [cursor=pointer]
        - paragraph [ref=f3e831]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f3e835]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | import { AllureHelper } from "../reporting/AllureHelper";
  3  | import { Logger } from "../utils/Logger";
  4  | 
  5  | export abstract class BasePage {
  6  |   protected readonly page: Page;
  7  | 
  8  |   constructor(page: Page) {
  9  |     this.page = page;
  10 |   }
  11 | 
  12 |   /**
  13 |    * Navigate to a relative URL.
  14 |    */
  15 |   protected async navigate(url: string): Promise<void> {
  16 |     await AllureHelper.step(`Navigate to ${url}`, async () => {
  17 |       Logger.info(`Navigating to: ${url}`);
  18 |       await this.page.goto(url, {
  19 |         waitUntil: "domcontentloaded",
  20 |       });
  21 |     });
  22 |   }
  23 | 
  24 |   /**
  25 |    * Wait until page is fully loaded.
  26 |    */
  27 |   protected async waitForPageLoad(): Promise<void> {
  28 |     await this.page.waitForLoadState("networkidle");
  29 |   }
  30 | 
  31 |   /**
  32 |    * Click on an element.
  33 |    */
  34 |   protected async click(locator: Locator): Promise<void> {
  35 |     Logger.info(`Clicking element`);
> 36 |     await locator.click();
     |                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  37 |   }
  38 | 
  39 |   /**
  40 |    * Enter text into an input.
  41 |    */
  42 |   protected async fill(locator: Locator, value: string): Promise<void> {
  43 |     Logger.info(`Entering value: ${value}`);
  44 |     await locator.fill(value);
  45 |   }
  46 | 
  47 |   /**
  48 |    * Get visible text.
  49 |    */
  50 |   protected async getText(locator: Locator): Promise<string> {
  51 |     return (await locator.textContent()) ?? "";
  52 |   }
  53 | 
  54 |   /**
  55 |    * Check if an element is visible.
  56 |    */
  57 |   protected async isVisible(locator: Locator): Promise<boolean> {
  58 |     return await locator.isVisible();
  59 |   }
  60 | 
  61 |   /**
  62 |    * Wait for an element to become visible.
  63 |    */
  64 |   protected async waitForVisible(locator: Locator): Promise<void> {
  65 |     await locator.waitFor({
  66 |       state: "visible",
  67 |     });
  68 |   }
  69 | 
  70 |   /**
  71 |    * Capture a screenshot.
  72 |    */
  73 |   protected async takeScreenshot(name: string): Promise<void> {
  74 |     await this.page.screenshot({
  75 |       path: `test-results/${name}.png`,
  76 |       fullPage: true,
  77 |     });
  78 |   }
  79 | 
  80 |   /**
  81 |    * Returns current page URL.
  82 |    */
  83 |   protected async goto(url: string): Promise<void> {
  84 |     await this.page.goto(url, {
  85 |       waitUntil: "domcontentloaded",
  86 |     });
  87 |   }
  88 | }
  89 | 
```