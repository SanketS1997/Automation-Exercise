# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: register.spec.ts >> Register User - Step 1 to Step 7
- Location: tests\register.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator:  getByRole('heading', { name: 'New User Signup!' })
Expected: visible
Received: undefined

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e41]:
    - list [ref=e42]:
      - listitem [ref=e43] [cursor=pointer]
      - listitem [ref=e44] [cursor=pointer]
      - listitem [ref=e45] [cursor=pointer]
    - generic [ref=e46]:
      - generic:
        - generic [ref=e47]:
          - heading "AutomationExercise" [level=1] [ref=e48]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=e49]
          - paragraph [ref=e50]:
            - text: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
            - link "Switch Broadband Providers" [ref=e51] [cursor=pointer]
          - link [ref=e55] [cursor=pointer]:
            - /url: /test_cases
            - button "Test Cases" [ref=e56]
          - link [ref=e57] [cursor=pointer]:
            - /url: /api_list
            - button "APIs list for practice" [ref=e58]
        - img "demo website for practice" [ref=e60]
    - link "" [ref=e61] [cursor=pointer]:
      - /url: "#slider-carousel"
    - link "" [ref=e63] [cursor=pointer]:
      - /url: "#slider-carousel"
  - generic [ref=e67]:
    - generic [ref=e69]:
      - heading "Category" [level=2] [ref=e70]
      - generic [ref=e71]:
        - heading [level=4] [ref=e74]:
          - link " Women" [ref=e75] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e76]: 
            - text: Women
        - heading [level=4] [ref=e80]:
          - link " Men" [ref=e81] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e82]: 
            - text: Men
        - heading [level=4] [ref=e86]:
          - link " Kids" [ref=e87] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e88]: 
            - text: Kids
      - insertion [ref=e91]:
        - generic [ref=e94]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e96]: Discover more
          - link "API testing services" [ref=e97] [cursor=pointer]
          - link "API integration services" [ref=e102] [cursor=pointer]
          - link "Automation practice website" [ref=e107] [cursor=pointer]
          - link "Browse Designer Clothes" [ref=e112] [cursor=pointer]
          - link "Test case templates" [ref=e117] [cursor=pointer]
          - link "API testing guide" [ref=e122] [cursor=pointer]
          - link "Learn Coding Online" [ref=e127] [cursor=pointer]
          - link "Quality Assurance tools" [ref=e132] [cursor=pointer]
      - generic [ref=e137]:
        - heading "Brands" [level=2] [ref=e138]
        - list [ref=e140]:
          - listitem [ref=e141]:
            - link "(6) Polo" [ref=e142] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e143]: (6)
              - text: Polo
          - listitem [ref=e144]:
            - link "(5) H&M" [ref=e145] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e146]: (5)
              - text: H&M
          - listitem [ref=e147]:
            - link "(5) Madame" [ref=e148] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e149]: (5)
              - text: Madame
          - listitem [ref=e150]:
            - link "(3) Mast & Harbour" [ref=e151] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e152]: (3)
              - text: Mast & Harbour
          - listitem [ref=e153]:
            - link "(4) Babyhug" [ref=e154] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e155]: (4)
              - text: Babyhug
          - listitem [ref=e156]:
            - link "(3) Allen Solly Junior" [ref=e157] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e158]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e159]:
            - link "(3) Kookie Kids" [ref=e160] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e161]: (3)
              - text: Kookie Kids
          - listitem [ref=e162]:
            - link "(5) Biba" [ref=e163] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e164]: (5)
              - text: Biba
    - generic [ref=e165]:
      - generic [ref=e166]:
        - heading "Features Items" [level=2] [ref=e167]
        - generic [ref=e169]:
          - generic [ref=e170]:
            - generic [ref=e171]:
              - img "ecommerce website products" [ref=e172]
              - heading "Rs. 500" [level=2] [ref=e173]
              - paragraph [ref=e174]: Blue Top
              - generic [ref=e175] [cursor=pointer]:
                - generic [ref=e176]: 
                - text: Add to cart
            - generic [ref=e177]:
              - heading "Rs. 500" [level=2] [ref=e178]
              - paragraph [ref=e179]: Blue Top
              - generic [ref=e180] [cursor=pointer]:
                - generic [ref=e181]: 
                - text: Add to cart
          - list [ref=e183]:
            - listitem [ref=e184]:
              - link " View Product" [ref=e185] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=e186]: 
                - text: View Product
        - generic [ref=e188]:
          - generic [ref=e189]:
            - generic [ref=e190]:
              - img "ecommerce website products" [ref=e191]
              - heading "Rs. 400" [level=2] [ref=e192]
              - paragraph [ref=e193]:
                - text: Men
                - link "Tshirt" [ref=e194] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e197] [cursor=pointer]:
                - generic [ref=e198]: 
                - text: Add to cart
            - generic [ref=e199]:
              - heading "Rs. 400" [level=2] [ref=e200]
              - paragraph [ref=e201]: Men Tshirt
              - generic [ref=e202] [cursor=pointer]:
                - generic [ref=e203]: 
                - text: Add to cart
          - list [ref=e205]:
            - listitem [ref=e206]:
              - link " View Product" [ref=e207] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=e208]: 
                - text: View Product
        - generic [ref=e210]:
          - generic [ref=e211]:
            - generic [ref=e212]:
              - img "ecommerce website products" [ref=e213]
              - heading "Rs. 1000" [level=2] [ref=e214]
              - paragraph [ref=e215]:
                - text: Sleeveless
                - link "Dress" [ref=e216] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e219] [cursor=pointer]:
                - generic [ref=e220]: 
                - text: Add to cart
            - generic [ref=e221]:
              - heading "Rs. 1000" [level=2] [ref=e222]
              - paragraph [ref=e223]: Sleeveless Dress
              - generic [ref=e224] [cursor=pointer]:
                - generic [ref=e225]: 
                - text: Add to cart
          - list [ref=e227]:
            - listitem [ref=e228]:
              - link " View Product" [ref=e229] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e230]: 
                - text: View Product
        - generic [ref=e232]:
          - generic [ref=e233]:
            - generic [ref=e234]:
              - img "ecommerce website products" [ref=e235]
              - heading "Rs. 1500" [level=2] [ref=e236]
              - paragraph [ref=e237]: Stylish Dress
              - generic [ref=e238] [cursor=pointer]:
                - generic [ref=e239]: 
                - text: Add to cart
            - generic [ref=e240]:
              - heading "Rs. 1500" [level=2] [ref=e241]
              - paragraph [ref=e242]: Stylish Dress
              - generic [ref=e243] [cursor=pointer]:
                - generic [ref=e244]: 
                - text: Add to cart
          - list [ref=e246]:
            - listitem [ref=e247]:
              - link " View Product" [ref=e248] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e249]: 
                - text: View Product
        - generic [ref=e251]:
          - generic [ref=e252]:
            - generic [ref=e253]:
              - img "ecommerce website products" [ref=e254]
              - heading "Rs. 600" [level=2] [ref=e255]
              - paragraph [ref=e256]: Winter Top
              - generic [ref=e257] [cursor=pointer]:
                - generic [ref=e258]: 
                - text: Add to cart
            - generic [ref=e259]:
              - heading "Rs. 600" [level=2] [ref=e260]
              - paragraph [ref=e261]: Winter Top
              - generic [ref=e262] [cursor=pointer]:
                - generic [ref=e263]: 
                - text: Add to cart
          - list [ref=e265]:
            - listitem [ref=e266]:
              - link " View Product" [ref=e267] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e268]: 
                - text: View Product
        - generic [ref=e270]:
          - generic [ref=e271]:
            - generic [ref=e272]:
              - img "ecommerce website products" [ref=e273]
              - heading "Rs. 400" [level=2] [ref=e274]
              - paragraph [ref=e275]: Summer White Top
              - generic [ref=e276] [cursor=pointer]:
                - generic [ref=e277]: 
                - text: Add to cart
            - generic [ref=e278]:
              - heading "Rs. 400" [level=2] [ref=e279]
              - paragraph [ref=e280]: Summer White Top
              - generic [ref=e281] [cursor=pointer]:
                - generic [ref=e282]: 
                - text: Add to cart
          - list [ref=e284]:
            - listitem [ref=e285]:
              - link " View Product" [ref=e286] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e287]: 
                - text: View Product
        - generic [ref=e289]:
          - generic [ref=e290]:
            - generic [ref=e291]:
              - img "ecommerce website products" [ref=e292]
              - heading "Rs. 1000" [level=2] [ref=e293]
              - paragraph [ref=e294]: Madame Top For Women
              - generic [ref=e295] [cursor=pointer]:
                - generic [ref=e296]: 
                - text: Add to cart
            - generic [ref=e297]:
              - heading "Rs. 1000" [level=2] [ref=e298]
              - paragraph [ref=e299]: Madame Top For Women
              - generic [ref=e300] [cursor=pointer]:
                - generic [ref=e301]: 
                - text: Add to cart
          - list [ref=e303]:
            - listitem [ref=e304]:
              - link " View Product" [ref=e305] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e306]: 
                - text: View Product
        - generic [ref=e308]:
          - generic [ref=e309]:
            - generic [ref=e310]:
              - img "ecommerce website products" [ref=e311]
              - heading "Rs. 700" [level=2] [ref=e312]
              - paragraph [ref=e313]: Fancy Green Top
              - generic [ref=e314] [cursor=pointer]:
                - generic [ref=e315]: 
                - text: Add to cart
            - generic [ref=e316]:
              - heading "Rs. 700" [level=2] [ref=e317]
              - paragraph [ref=e318]: Fancy Green Top
              - generic [ref=e319] [cursor=pointer]:
                - generic [ref=e320]: 
                - text: Add to cart
          - list [ref=e322]:
            - listitem [ref=e323]:
              - link " View Product" [ref=e324] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e325]: 
                - text: View Product
        - generic [ref=e327]:
          - generic [ref=e328]:
            - generic [ref=e329]:
              - img "ecommerce website products" [ref=e330]
              - heading "Rs. 499" [level=2] [ref=e331]
              - paragraph [ref=e332]:
                - text: Sleeves Printed Top - White
                - link "Get Quality Software" [ref=e333] [cursor=pointer]
              - generic [ref=e337] [cursor=pointer]:
                - generic [ref=e338]: 
                - text: Add to cart
            - generic [ref=e339]:
              - heading "Rs. 499" [level=2] [ref=e340]
              - paragraph [ref=e341]: Sleeves Printed Top - White
              - generic [ref=e342] [cursor=pointer]:
                - generic [ref=e343]: 
                - text: Add to cart
          - list [ref=e345]:
            - listitem [ref=e346]:
              - link " View Product" [ref=e347] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e348]: 
                - text: View Product
        - generic [ref=e350]:
          - generic [ref=e351]:
            - generic [ref=e352]:
              - img "ecommerce website products" [ref=e353]
              - heading "Rs. 359" [level=2] [ref=e354]
              - paragraph [ref=e355]:
                - text: Half Sleeves Top Schiffli Detailing - Pink
                - link "API test automation" [ref=e356] [cursor=pointer]
              - generic [ref=e360] [cursor=pointer]:
                - generic [ref=e361]: 
                - text: Add to cart
            - generic [ref=e362]:
              - heading "Rs. 359" [level=2] [ref=e363]
              - paragraph [ref=e364]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e365] [cursor=pointer]:
                - generic [ref=e366]: 
                - text: Add to cart
          - list [ref=e368]:
            - listitem [ref=e369]:
              - link " View Product" [ref=e370] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e371]: 
                - text: View Product
        - generic [ref=e373]:
          - generic [ref=e374]:
            - generic [ref=e375]:
              - img "ecommerce website products" [ref=e376]
              - heading "Rs. 278" [level=2] [ref=e377]
              - paragraph [ref=e378]: Frozen Tops For Kids
              - generic [ref=e379] [cursor=pointer]:
                - generic [ref=e380]: 
                - text: Add to cart
            - generic [ref=e381]:
              - heading "Rs. 278" [level=2] [ref=e382]
              - paragraph [ref=e383]: Frozen Tops For Kids
              - generic [ref=e384] [cursor=pointer]:
                - generic [ref=e385]: 
                - text: Add to cart
          - list [ref=e387]:
            - listitem [ref=e388]:
              - link " View Product" [ref=e389] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e390]: 
                - text: View Product
        - generic [ref=e392]:
          - generic [ref=e393]:
            - generic [ref=e394]:
              - img "ecommerce website products" [ref=e395]
              - heading "Rs. 679" [level=2] [ref=e396]
              - paragraph [ref=e397]:
                - text: Full Sleeves Top Cherry - Pink
                - link "Compare Developer Tools" [ref=e398] [cursor=pointer]
              - generic [ref=e402] [cursor=pointer]:
                - generic [ref=e403]: 
                - text: Add to cart
            - generic [ref=e404]:
              - heading "Rs. 679" [level=2] [ref=e405]
              - paragraph [ref=e406]: Full Sleeves Top Cherry - Pink
              - generic [ref=e407] [cursor=pointer]:
                - generic [ref=e408]: 
                - text: Add to cart
          - list [ref=e410]:
            - listitem [ref=e411]:
              - link " View Product" [ref=e412] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e413]: 
                - text: View Product
        - generic [ref=e415]:
          - generic [ref=e416]:
            - generic [ref=e417]:
              - img "ecommerce website products" [ref=e418]
              - heading "Rs. 315" [level=2] [ref=e419]
              - paragraph [ref=e420]: Printed Off Shoulder Top - White
              - generic [ref=e421] [cursor=pointer]:
                - generic [ref=e422]: 
                - text: Add to cart
            - generic [ref=e423]:
              - heading "Rs. 315" [level=2] [ref=e424]
              - paragraph [ref=e425]: Printed Off Shoulder Top - White
              - generic [ref=e426] [cursor=pointer]:
                - generic [ref=e427]: 
                - text: Add to cart
          - list [ref=e429]:
            - listitem [ref=e430]:
              - link " View Product" [ref=e431] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e432]: 
                - text: View Product
        - generic [ref=e434]:
          - generic [ref=e435]:
            - generic [ref=e436]:
              - img "ecommerce website products" [ref=e437]
              - heading "Rs. 478" [level=2] [ref=e438]
              - paragraph [ref=e439]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e440] [cursor=pointer]:
                - generic [ref=e441]: 
                - text: Add to cart
            - generic [ref=e442]:
              - heading "Rs. 478" [level=2] [ref=e443]
              - paragraph [ref=e444]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e445] [cursor=pointer]:
                - generic [ref=e446]: 
                - text: Add to cart
          - list [ref=e448]:
            - listitem [ref=e449]:
              - link " View Product" [ref=e450] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e451]: 
                - text: View Product
        - generic [ref=e453]:
          - generic [ref=e454]:
            - generic [ref=e455]:
              - img "ecommerce website products" [ref=e456]
              - heading "Rs. 1200" [level=2] [ref=e457]
              - paragraph [ref=e458]: Little Girls Mr. Panda Shirt
              - generic [ref=e459] [cursor=pointer]:
                - generic [ref=e460]: 
                - text: Add to cart
            - generic [ref=e461]:
              - heading "Rs. 1200" [level=2] [ref=e462]
              - paragraph [ref=e463]: Little Girls Mr. Panda Shirt
              - generic [ref=e464] [cursor=pointer]:
                - generic [ref=e465]: 
                - text: Add to cart
          - list [ref=e467]:
            - listitem [ref=e468]:
              - link " View Product" [ref=e469] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e470]: 
                - text: View Product
        - generic [ref=e472]:
          - generic [ref=e473]:
            - generic [ref=e474]:
              - img "ecommerce website products" [ref=e475]
              - heading "Rs. 1050" [level=2] [ref=e476]
              - paragraph [ref=e477]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e478] [cursor=pointer]:
                - generic [ref=e479]: 
                - text: Add to cart
            - generic [ref=e480]:
              - heading "Rs. 1050" [level=2] [ref=e481]
              - paragraph [ref=e482]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e483] [cursor=pointer]:
                - generic [ref=e484]: 
                - text: Add to cart
          - list [ref=e486]:
            - listitem [ref=e487]:
              - link " View Product" [ref=e488] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e489]: 
                - text: View Product
        - generic [ref=e491]:
          - generic [ref=e492]:
            - generic [ref=e493]:
              - img "ecommerce website products" [ref=e494]
              - heading "Rs. 1190" [level=2] [ref=e495]
              - paragraph [ref=e496]: Cotton Mull Embroidered Dress
              - generic [ref=e497] [cursor=pointer]:
                - generic [ref=e498]: 
                - text: Add to cart
            - generic [ref=e499]:
              - heading "Rs. 1190" [level=2] [ref=e500]
              - paragraph [ref=e501]: Cotton Mull Embroidered Dress
              - generic [ref=e502] [cursor=pointer]:
                - generic [ref=e503]: 
                - text: Add to cart
          - list [ref=e505]:
            - listitem [ref=e506]:
              - link " View Product" [ref=e507] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e508]: 
                - text: View Product
        - generic [ref=e510]:
          - generic [ref=e511]:
            - generic [ref=e512]:
              - img "ecommerce website products" [ref=e513]
              - heading "Rs. 1530" [level=2] [ref=e514]
              - paragraph [ref=e515]: Blue Cotton Indie Mickey Dress
              - generic [ref=e516] [cursor=pointer]:
                - generic [ref=e517]: 
                - text: Add to cart
            - generic [ref=e518]:
              - heading "Rs. 1530" [level=2] [ref=e519]
              - paragraph [ref=e520]: Blue Cotton Indie Mickey Dress
              - generic [ref=e521] [cursor=pointer]:
                - generic [ref=e522]: 
                - text: Add to cart
          - list [ref=e524]:
            - listitem [ref=e525]:
              - link " View Product" [ref=e526] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e527]: 
                - text: View Product
        - generic [ref=e529]:
          - generic [ref=e530]:
            - generic [ref=e531]:
              - img "ecommerce website products" [ref=e532]
              - heading "Rs. 1600" [level=2] [ref=e533]
              - paragraph [ref=e534]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e535] [cursor=pointer]:
                - generic [ref=e536]: 
                - text: Add to cart
            - generic [ref=e537]:
              - heading "Rs. 1600" [level=2] [ref=e538]
              - paragraph [ref=e539]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e540] [cursor=pointer]:
                - generic [ref=e541]: 
                - text: Add to cart
          - list [ref=e543]:
            - listitem [ref=e544]:
              - link " View Product" [ref=e545] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e546]: 
                - text: View Product
        - generic [ref=e548]:
          - generic [ref=e549]:
            - generic [ref=e550]:
              - img "ecommerce website products" [ref=e551]
              - heading "Rs. 1100" [level=2] [ref=e552]
              - paragraph [ref=e553]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e554] [cursor=pointer]:
                - generic [ref=e555]: 
                - text: Add to cart
            - generic [ref=e556]:
              - heading "Rs. 1100" [level=2] [ref=e557]
              - paragraph [ref=e558]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e559] [cursor=pointer]:
                - generic [ref=e560]: 
                - text: Add to cart
          - list [ref=e562]:
            - listitem [ref=e563]:
              - link " View Product" [ref=e564] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e565]: 
                - text: View Product
        - generic [ref=e567]:
          - generic [ref=e568]:
            - generic [ref=e569]:
              - img "ecommerce website products" [ref=e570]
              - heading "Rs. 849" [level=2] [ref=e571]
              - paragraph [ref=e572]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e573] [cursor=pointer]:
                - generic [ref=e574]: 
                - text: Add to cart
            - generic [ref=e575]:
              - heading "Rs. 849" [level=2] [ref=e576]
              - paragraph [ref=e577]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e578] [cursor=pointer]:
                - generic [ref=e579]: 
                - text: Add to cart
          - list [ref=e581]:
            - listitem [ref=e582]:
              - link " View Product" [ref=e583] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e584]: 
                - text: View Product
        - generic [ref=e586]:
          - generic [ref=e587]:
            - generic [ref=e588]:
              - img "ecommerce website products" [ref=e589]
              - heading "Rs. 1299" [level=2] [ref=e590]
              - paragraph [ref=e591]:
                - text: Pure Cotton V-Neck
                - link "T-Shirt" [ref=e592] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e595] [cursor=pointer]:
                - generic [ref=e596]: 
                - text: Add to cart
            - generic [ref=e597]:
              - heading "Rs. 1299" [level=2] [ref=e598]
              - paragraph [ref=e599]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e600] [cursor=pointer]:
                - generic [ref=e601]: 
                - text: Add to cart
          - list [ref=e603]:
            - listitem [ref=e604]:
              - link " View Product" [ref=e605] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e606]: 
                - text: View Product
        - generic [ref=e608]:
          - generic [ref=e609]:
            - generic [ref=e610]:
              - img "ecommerce website products" [ref=e611]
              - heading "Rs. 1000" [level=2] [ref=e612]
              - paragraph [ref=e613]: Green Side Placket Detail T-Shirt
              - generic [ref=e614] [cursor=pointer]:
                - generic [ref=e615]: 
                - text: Add to cart
            - generic [ref=e616]:
              - heading "Rs. 1000" [level=2] [ref=e617]
              - paragraph [ref=e618]: Green Side Placket Detail T-Shirt
              - generic [ref=e619] [cursor=pointer]:
                - generic [ref=e620]: 
                - text: Add to cart
          - list [ref=e622]:
            - listitem [ref=e623]:
              - link " View Product" [ref=e624] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e625]: 
                - text: View Product
        - generic [ref=e627]:
          - generic [ref=e628]:
            - generic [ref=e629]:
              - img "ecommerce website products" [ref=e630]
              - heading "Rs. 1500" [level=2] [ref=e631]
              - paragraph [ref=e632]: Premium Polo T-Shirts
              - generic [ref=e633] [cursor=pointer]:
                - generic [ref=e634]: 
                - text: Add to cart
            - generic [ref=e635]:
              - heading "Rs. 1500" [level=2] [ref=e636]
              - paragraph [ref=e637]: Premium Polo T-Shirts
              - generic [ref=e638] [cursor=pointer]:
                - generic [ref=e639]: 
                - text: Add to cart
          - list [ref=e641]:
            - listitem [ref=e642]:
              - link " View Product" [ref=e643] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e644]: 
                - text: View Product
        - generic [ref=e646]:
          - generic [ref=e647]:
            - generic [ref=e648]:
              - img "ecommerce website products" [ref=e649]
              - heading "Rs. 850" [level=2] [ref=e650]
              - paragraph [ref=e651]: Pure Cotton Neon Green Tshirt
              - generic [ref=e652] [cursor=pointer]:
                - generic [ref=e653]: 
                - text: Add to cart
            - generic [ref=e654]:
              - heading "Rs. 850" [level=2] [ref=e655]
              - paragraph [ref=e656]: Pure Cotton Neon Green Tshirt
              - generic [ref=e657] [cursor=pointer]:
                - generic [ref=e658]: 
                - text: Add to cart
          - list [ref=e660]:
            - listitem [ref=e661]:
              - link " View Product" [ref=e662] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e663]: 
                - text: View Product
        - generic [ref=e665]:
          - generic [ref=e666]:
            - generic [ref=e667]:
              - img "ecommerce website products" [ref=e668]
              - heading "Rs. 799" [level=2] [ref=e669]
              - paragraph [ref=e670]: Soft Stretch Jeans
              - generic [ref=e671] [cursor=pointer]:
                - generic [ref=e672]: 
                - text: Add to cart
            - generic [ref=e673]:
              - heading "Rs. 799" [level=2] [ref=e674]
              - paragraph [ref=e675]: Soft Stretch Jeans
              - generic [ref=e676] [cursor=pointer]:
                - generic [ref=e677]: 
                - text: Add to cart
          - list [ref=e679]:
            - listitem [ref=e680]:
              - link " View Product" [ref=e681] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e682]: 
                - text: View Product
        - generic [ref=e684]:
          - generic [ref=e685]:
            - generic [ref=e686]:
              - img "ecommerce website products" [ref=e687]
              - heading "Rs. 1200" [level=2] [ref=e688]
              - paragraph [ref=e689]: Regular Fit Straight Jeans
              - generic [ref=e690] [cursor=pointer]:
                - generic [ref=e691]: 
                - text: Add to cart
            - generic [ref=e692]:
              - heading "Rs. 1200" [level=2] [ref=e693]
              - paragraph [ref=e694]: Regular Fit Straight Jeans
              - generic [ref=e695] [cursor=pointer]:
                - generic [ref=e696]: 
                - text: Add to cart
          - list [ref=e698]:
            - listitem [ref=e699]:
              - link " View Product" [ref=e700] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e701]: 
                - text: View Product
        - generic [ref=e703]:
          - generic [ref=e704]:
            - generic [ref=e705]:
              - img "ecommerce website products" [ref=e706]
              - heading "Rs. 1400" [level=2] [ref=e707]
              - paragraph [ref=e708]: Grunt Blue Slim Fit Jeans
              - generic [ref=e709] [cursor=pointer]:
                - generic [ref=e710]: 
                - text: Add to cart
            - generic [ref=e711]:
              - heading "Rs. 1400" [level=2] [ref=e712]
              - paragraph [ref=e713]: Grunt Blue Slim Fit Jeans
              - generic [ref=e714] [cursor=pointer]:
                - generic [ref=e715]: 
                - text: Add to cart
          - list [ref=e717]:
            - listitem [ref=e718]:
              - link " View Product" [ref=e719] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e720]: 
                - text: View Product
        - generic [ref=e722]:
          - generic [ref=e723]:
            - generic [ref=e724]:
              - img "ecommerce website products" [ref=e725]
              - heading "Rs. 2300" [level=2] [ref=e726]
              - paragraph [ref=e727]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e728] [cursor=pointer]:
                - generic [ref=e729]: 
                - text: Add to cart
            - generic [ref=e730]:
              - heading "Rs. 2300" [level=2] [ref=e731]
              - paragraph [ref=e732]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e733] [cursor=pointer]:
                - generic [ref=e734]: 
                - text: Add to cart
          - list [ref=e736]:
            - listitem [ref=e737]:
              - link " View Product" [ref=e738] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e739]: 
                - text: View Product
        - generic [ref=e741]:
          - generic [ref=e742]:
            - generic [ref=e743]:
              - img "ecommerce website products" [ref=e744]
              - heading "Rs. 3000" [level=2] [ref=e745]
              - paragraph [ref=e746]: Cotton Silk Hand Block Print Saree
              - generic [ref=e747] [cursor=pointer]:
                - generic [ref=e748]: 
                - text: Add to cart
            - generic [ref=e749]:
              - heading "Rs. 3000" [level=2] [ref=e750]
              - paragraph [ref=e751]: Cotton Silk Hand Block Print Saree
              - generic [ref=e752] [cursor=pointer]:
                - generic [ref=e753]: 
                - text: Add to cart
          - list [ref=e755]:
            - listitem [ref=e756]:
              - link " View Product" [ref=e757] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e758]: 
                - text: View Product
        - generic [ref=e760]:
          - generic [ref=e761]:
            - generic [ref=e762]:
              - img "ecommerce website products" [ref=e763]
              - heading "Rs. 3500" [level=2] [ref=e764]
              - paragraph [ref=e765]: Rust Red Linen Saree
              - generic [ref=e766] [cursor=pointer]:
                - generic [ref=e767]: 
                - text: Add to cart
            - generic [ref=e768]:
              - heading "Rs. 3500" [level=2] [ref=e769]
              - paragraph [ref=e770]: Rust Red Linen Saree
              - generic [ref=e771] [cursor=pointer]:
                - generic [ref=e772]: 
                - text: Add to cart
          - list [ref=e774]:
            - listitem [ref=e775]:
              - link " View Product" [ref=e776] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e777]: 
                - text: View Product
        - generic [ref=e779]:
          - generic [ref=e780]:
            - generic [ref=e781]:
              - img "ecommerce website products" [ref=e782]
              - heading "Rs. 5000" [level=2] [ref=e783]
              - paragraph [ref=e784]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e785] [cursor=pointer]:
                - generic [ref=e786]: 
                - text: Add to cart
            - generic [ref=e787]:
              - heading "Rs. 5000" [level=2] [ref=e788]
              - paragraph [ref=e789]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e790] [cursor=pointer]:
                - generic [ref=e791]: 
                - text: Add to cart
          - list [ref=e793]:
            - listitem [ref=e794]:
              - link " View Product" [ref=e795] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e796]: 
                - text: View Product
        - generic [ref=e798]:
          - generic [ref=e799]:
            - generic [ref=e800]:
              - img "ecommerce website products" [ref=e801]
              - heading "Rs. 1400" [level=2] [ref=e802]
              - paragraph [ref=e803]: Lace Top For Women
              - generic [ref=e804] [cursor=pointer]:
                - generic [ref=e805]: 
                - text: Add to cart
            - generic [ref=e806]:
              - heading "Rs. 1400" [level=2] [ref=e807]
              - paragraph [ref=e808]: Lace Top For Women
              - generic [ref=e809] [cursor=pointer]:
                - generic [ref=e810]: 
                - text: Add to cart
          - list [ref=e812]:
            - listitem [ref=e813]:
              - link " View Product" [ref=e814] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e815]: 
                - text: View Product
        - generic [ref=e817]:
          - generic [ref=e818]:
            - generic [ref=e819]:
              - img "ecommerce website products" [ref=e820]
              - heading "Rs. 1389" [level=2] [ref=e821]
              - paragraph [ref=e822]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e823] [cursor=pointer]:
                - generic [ref=e824]: 
                - text: Add to cart
            - generic [ref=e825]:
              - heading "Rs. 1389" [level=2] [ref=e826]
              - paragraph [ref=e827]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e828] [cursor=pointer]:
                - generic [ref=e829]: 
                - text: Add to cart
          - list [ref=e831]:
            - listitem [ref=e832]:
              - link " View Product" [ref=e833] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e834]: 
                - text: View Product
      - generic [ref=e835]:
        - heading "recommended items" [level=2] [ref=e836]
        - generic [ref=e837]:
          - generic [ref=e838]:
            - generic:
              - generic [ref=e842]:
                - img "ecommerce website products" [ref=e843]
                - heading "Rs. 500" [level=2] [ref=e844]
                - paragraph [ref=e845]: Blue Top
                - generic [ref=e846] [cursor=pointer]:
                  - generic [ref=e847]: 
                  - text: Add to cart
              - generic [ref=e851]:
                - img "ecommerce website products" [ref=e852]
                - heading "Rs. 400" [level=2] [ref=e853]
                - paragraph [ref=e854]: Men Tshirt
                - generic [ref=e855] [cursor=pointer]:
                  - generic [ref=e856]: 
                  - text: Add to cart
              - generic [ref=e860]:
                - img "ecommerce website products" [ref=e861]
                - heading "Rs. 1000" [level=2] [ref=e862]
                - paragraph [ref=e863]: Rs. 1000
                - generic [ref=e864] [cursor=pointer]:
                  - generic [ref=e865]: 
                  - text: Add to cart
            - text:   
          - link "" [ref=e866] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
          - link "" [ref=e868] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
  - contentinfo [ref=e870]:
    - insertion [ref=e872]
    - generic [ref=e878]:
      - heading "Subscription" [level=2] [ref=e879]
      - generic [ref=e880]:
        - textbox "Your email address" [ref=e881]
        - button "" [ref=e882] [cursor=pointer]
        - paragraph [ref=e884]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e888]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e890]
```

# Test source

```ts
  1  | import { expect, Locator } from "@playwright/test";
  2  | import { BaseComponent } from "../components/BaseComponent";
  3  | 
  4  | export class BaseValidator {
  5  |   private resolveLocator(input: Locator | BaseComponent): Locator {
  6  |     const maybe = input as any;
  7  |     // If a component wrapper is passed, it exposes a locator object (Locator instance).
  8  |     // Playwright's Locator also has a `locator` method, which is a function, so check type.
  9  |     if (maybe && typeof maybe.locator === "object") {
  10 |       return maybe.locator as Locator;
  11 |     }
  12 | 
  13 |     // Otherwise assume the input itself is a Locator
  14 |     return input as Locator;
  15 |   }
  16 | 
  17 |   protected async shouldBeVisible(
  18 |     locatorOrComponent: Locator | BaseComponent,
  19 |   ): Promise<void> {
  20 |     const locator = this.resolveLocator(locatorOrComponent);
> 21 |     await expect(locator).toBeVisible();
     |                           ^ Error: expect(locator).toBeVisible() failed
  22 |   }
  23 | 
  24 |   protected async shouldBeHidden(
  25 |     locatorOrComponent: Locator | BaseComponent,
  26 |   ): Promise<void> {
  27 |     const locator = this.resolveLocator(locatorOrComponent);
  28 |     await expect(locator).toBeHidden();
  29 |   }
  30 | 
  31 |   protected async shouldHaveText(
  32 |     locatorOrComponent: Locator | BaseComponent,
  33 |     text: string,
  34 |   ): Promise<void> {
  35 |     const locator = this.resolveLocator(locatorOrComponent);
  36 |     await expect(locator).toHaveText(text);
  37 |   }
  38 | 
  39 |   protected async shouldContainText(
  40 |     locatorOrComponent: Locator | BaseComponent,
  41 |     text: string,
  42 |   ): Promise<void> {
  43 |     const locator = this.resolveLocator(locatorOrComponent);
  44 |     await expect(locator).toContainText(text);
  45 |   }
  46 | 
  47 |   protected async shouldBeEnabled(
  48 |     locatorOrComponent: Locator | BaseComponent,
  49 |   ): Promise<void> {
  50 |     const locator = this.resolveLocator(locatorOrComponent);
  51 |     await expect(locator).toBeEnabled();
  52 |   }
  53 | 
  54 |   protected async shouldBeDisabled(
  55 |     locatorOrComponent: Locator | BaseComponent,
  56 |   ): Promise<void> {
  57 |     const locator = this.resolveLocator(locatorOrComponent);
  58 |     await expect(locator).toBeDisabled();
  59 |   }
  60 | 
  61 |   protected async shouldHaveValue(
  62 |     locatorOrComponent: Locator | BaseComponent,
  63 |     value: string,
  64 |   ): Promise<void> {
  65 |     const locator = this.resolveLocator(locatorOrComponent);
  66 |     await expect(locator).toHaveValue(value);
  67 |   }
  68 | 
  69 |   protected async shouldHaveCount(
  70 |     locatorOrComponent: Locator | BaseComponent,
  71 |     count: number,
  72 |   ): Promise<void> {
  73 |     const locator = this.resolveLocator(locatorOrComponent);
  74 |     await expect(locator).toHaveCount(count);
  75 |   }
  76 | }
  77 | 
```