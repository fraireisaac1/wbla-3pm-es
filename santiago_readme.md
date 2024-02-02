# Documentantion for Santiago's contribution 

> Here's my contribution I was in charge of the creation of images for the products of the elevate website along with being in complete responsability of the contact page, I used the same color palet as the rest of the website along with the use of blocks to assimilate the main page, The contact page is made of two containers that atke 50% of the page overwall height along with three div containers called `InfoBox` This boxes contain different information that the user will want to know about elevate. 
 
# InfoBox1 (Right box)
> This block displays an image in order for the user to know that it has to do with a location/address, once the user clicks on it the page will redirect them to google maps with the Elevate exact adress.

```html
 <div class="row w-75 m-auto rounded justify-content-evenly">
          <div class="info-box col col-xl-4" id="box1">
            <a href="https://www.google.com/maps/place/The+White+House/@38.889572,-77.0197418,15z/data=!4m14!1m7!3m6!1s0x89b7b829c469e329:0x2b85169381fa9d8b!2sCapitol+Hill!8m2!3d38.8895563!4d-77.0094206!16s%2Fg%2F1txy36_6!3m5!1s0x89b7b7bcdecbb1df:0x715969d86d0b76bf!8m2!3d38.8976763!4d-77.0365298!16zL20vMDgxc3E?entry=ttu">
              <img src="/images/map-imageAI.jfif" alt="map image" height="100%" width="100%" style="border-radius:  10px;">
            </a>
          </div>
```
# InfoBox2 (Middle box)

> This block has basic information about how to contact Elevate: Phone number, email and adress this was made using different p tags and positioning them with a class `contact-text` in order to size it all together it also has an h1 that is use for the title of InfoBox3, every piece of information is in a different p tag.

```html
 <div class="info-box col col-xl-4" id="box2">
            <h1 class="text-top-h mt-3">Meet Us</h1>
            <p class="contact-text">📞 +1 (863)-492-5087</p>
            <p class="contact-text">💬contact_elevate@gmail.com</p>
            <p class="contact-text">📍 7752 Prairie Street Smyrna, GA 30080</p>
          </div>
```

# InfoBox3 (Left box)

> This block is a form for the user to fill out with their information if they want to apply to work at elevate, the user will have to fill out two text inputs and one select label with three options (this options can be increased if asked to) all of the option tags are connected with the class `apply-position-option` and they are inside a label with the `for="apply-position` This also has a p tag in the top that reads "apply"

```html
 <p> Apply
             <label for="apply-position">
              <select name="positions-to-apply" id="aplly-to-positions">
                <option class="apply-postion-option" value="webDesigner">Web Designer</option>
                <option class="apply-postion-option" value="developerJunior">Junior Developer</option>
                <option class="apply-postion-option" value="developerSenior">Senior Developer</option>
                <option class="apply-postion-option" value="finances">Finances deparment</option>
              </select>

             </label>
             </p>
      
```