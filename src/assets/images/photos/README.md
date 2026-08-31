# Photos

Drop photos for the site in here, then reference them as
`/assets/images/photos/your-photo.jpg`.

On the home page and the guide page, look for the comment `IMAGE SLOT`.
Replace the `<div class="ph"> ... </div>` placeholder inside the sticker
with an `<img>`, keeping the `.st--photo` sticker around it:

    <div class="st st--photo a3 col-4">
      <img src="/assets/images/photos/install-fest-2025.jpg"
           alt="Volunteers helping people install Linux on their laptops">
    </div>

With a caption:

    <div class="st st--photo a3 col-4">
      <figure>
        <img src="/assets/images/photos/install-fest-2025.jpg" alt="...">
        <figcaption>Install fest, 2025</figcaption>
      </figure>
    </div>

Always write a real `alt` description. Only use photos of people who
agreed to be photographed.
