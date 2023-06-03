<template>
  <OptionalSlot>
    <TopInfoBarComp title="About Us" />
    <div class="flex justify-center">
      <div class="w-[75%] max-w-[75%] p-2">
        <div class="mb-4">
          <h1 class="font-ubuntu text-xl">Who Are We</h1>
          <p class="font-nunito">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
            exercitationem temporibus impedit dolorum, distinctio inventore
            natus, excepturi veritatis, magnam tempore accusantium animi vitae
            minus architecto corporis quasi vero fugiat? Ipsum. Repudiandae cum
            libero alias nostrum aliquam adipisci dolorum facilis nemo. Incidunt
            excepturi saepe eaque unde reiciendis provident quisquam. Facilis
            adipisci autem recusandae quidem commodi enim fugiat culpa numquam
            voluptates est! Laborum doloribus tenetur laboriosam pariatur
            corrupti dolorem porro omnis impedit reiciendis voluptatem,
            laudantium aperiam saepe natus autem placeat? Qui nulla quod magni
            nisi odit ratione minima labore asperiores molestiae accusamus.
            Corrupti, nesciunt! Iure culpa amet asperiores quo fugiat recusandae
            reiciendis dolorem repellendus doloremque totam earum voluptatibus a
            provident sed perspiciatis tenetur, nobis id magni numquam. Earum
            autem vero debitis distinctio. Asperiores id culpa soluta eum
            officiis voluptates aliquid quidem eveniet ea magnam laboriosam
            rerum tenetur, omnis, minima aspernatur est, nobis adipisci iusto
            repudiandae repellat aut unde! Ea, obcaecati? Dicta, omnis? Sequi,
            esse sunt dolor tempora sit non fugiat saepe similique repellendus
            exercitationem blanditiis error animi! Cumque voluptatibus suscipit
            provident ducimus porro, illo sequi eveniet, quasi recusandae rem
            dicta dolorum officiis.
          </p>
        </div>
        <div class="my-4">
          <h1 class="font-ubuntu text-xl">Our Name</h1>
          <p class="font-nunito">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            autem at labore doloremque, itaque veniam incidunt atque soluta
            ullam eius deleniti nostrum! Molestiae itaque ex enim praesentium
            doloribus, asperiores deleniti! Earum eligendi quasi nesciunt!
            Aspernatur laudantium rem non porro? Debitis ad est dolores at, fuga
            quod maiores error doloremque neque facere, facilis inventore
            reprehenderit voluptatibus! Est fugiat quaerat molestias magnam.
            Quidem voluptatibus fugit a, molestias commodi excepturi voluptatum.
            Molestiae, illo! Natus provident ducimus pariatur nihil cum dolor
            doloremque soluta iure molestiae voluptatibus iste iusto, impedit
            labore laudantium earum, minima similique?
          </p>
        </div>
        <div class="my-4">
          <h1 class="font-ubuntu text-xl">Policy</h1>
          <p class="font-nunito">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam animi
            ipsa neque libero quaerat veniam possimus repellendus cum. Suscipit
            perferendis temporibus corporis minima nesciunt facere mollitia
            ipsam quam cupiditate ducimus. Omnis quae illum natus alias.
            Aspernatur temporibus cupiditate labore libero voluptatem itaque!
            Aspernatur obcaecati nobis perferendis ea libero, unde dignissimos
            omnis corporis consectetur velit ex temporibus veniam praesentium
            nisi quia! Neque voluptatibus ipsa quos aut, rerum culpa. Quae
            necessitatibus iste molestias hic earum cumque, obcaecati eaque, at
            magni odit voluptas laboriosam. Exercitationem ratione, porro
            repellendus veniam quam culpa incidunt explicabo. Eveniet debitis
            voluptate fugit nulla nemo deleniti quibusdam corporis dolores
            praesentium dignissimos aliquam omnis fugiat quidem delectus
            reiciendis, nostrum quod quisquam eligendi, dolor nihil? A incidunt
            natus culpa aspernatur aliquid. Doloremque quis quia velit itaque
            odit? Cumque voluptatum veritatis nulla et, laudantium quo nam neque
            aperiam obcaecati assumenda dolores a, quidem, blanditiis eaque
            debitis voluptatibus architecto perspiciatis excepturi quasi
            eveniet? Tempore nam illo eveniet quis accusamus. Mollitia nulla
            delectus libero modi exercitationem vitae, quisquam quam cumque ab
            vero accusamus amet unde sit itaque minima odit pariatur, nemo
            laborum laboriosam consectetur. Voluptate nostrum distinctio itaque
            consequuntur corrupti? Voluptas nobis possimus beatae dicta,
            doloribus eaque laborum fuga. Id perspiciatis hic inventore facere
            alias soluta quis, laboriosam quasi voluptas, minima consequatur
            harum voluptates!
          </p>
        </div>
      </div>
    </div>
    <ContactUsFooterComp />
  </OptionalSlot>
</template>

<script lang="js">
import ContactUsFooterComp from '../components/ContactUsFooterComp.vue';
import TopInfoBarComp from '../components/TopInfoBarComp.vue';
import OptionalSlot from '../utils/OptionalSlot.vue';

export default {
    name: "AboutUsView",
    components: {
      ContactUsFooterComp, TopInfoBarComp, OptionalSlot
    }
}
</script>
