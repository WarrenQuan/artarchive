import ImageGallery from "react-image-gallery";
import PhotoAlbum from "react-photo-album";
import { images, imagesGal } from "./ImageData";

export const traditional_list = [
  {
    classification: "traditional",
    class_name: "project gif replicating_self-dim",
    image_link: "replicating_self.gif",
    page_link: "replicating_self",
    title: "replicating self",
    color: "#d9502e",
    text_color: "white",
    time: "2023",
    materials: 'acrylic on 72" x 54" canvas + acrylic on 24" x 12" plywood',
    content: (
      <div>
        <div style={{textAlign: "center"}}>
        <img src="/uncond_image/final.jpg" alt="painting of collage of self, orange hues, lasercut acrylic sheet of convesation with ai bot glued near mouths of each self"></img>
        </div>
        <PhotoAlbum
          layout="rows"
          photos={imagesGal.uncond}
          padding={5}
          rowConstraints={{
            minPhotos: 2,
            maxPhotos: 3,
          }}
        />
      <p>
        Archive, as defined by Oxford Language, is a compilation of historical
        documents or records offering insights into a place, institution, or
        group of people. While archives traditionally delve into the past, an
        intriguing question arises: what would a future archive entail? This
        contemplation initially evoked George Santayana's well-known adage:
        "Those who do not remember the past are condemned to repeat it." This
        line of thought led me to consistently ponder how past events and
        archives could be leveraged to predict the future or elucidate our
        present circumstances.
        <br></br>
        <br></br>
        As a computer science major, I am consistently reminded of the role of
        artificial intelligence and machine learning in the modern day. These
        technologies employ existing data, knowledge, and documents to
        mathematically forecast the future or generate unique works. Shifting
        focus, my ongoing fascination with self-exploration, particularly in
        terms of my perception, has been expressed through past artwork and
        portraiture. I grapple with questions surrounding what defines and
        represents my identity—is it through words, emotions, skills, body, or
        something else entirely? Whose standards of worth do I adhere to, and
        which aspects hold the most significance?
        <br></br>
        <br></br>
        In the context of career prospects in software engineering, a field I am
        considering post-graduation, I reflected on the potential perception of
        me as just another Asian-American male majoring in computer science.
        Although not an incorrect perception of myself, it is a stripped down
        version of my identity. This concern also resonated with the prevailing
        discourse on college applications and the struggle to stand out in a sea
        of seemingly similar experiences. Pondering these concepts, I began to
        question my uniqueness and wondered if I could be easily replicated,
        rebuilt, or have my future growth predicted based on personal archive,
        particularly through code and machine learning.
        <br></br>
        <br></br>
        My investigation into this subject led me to download and scrape saved
        iMessage and Facebook Messages texts from the past year. Attempting to
        create a conversational chatbot of myself using transformers, I aimed to
        utilize it for the exhibition “This is self-organized by numbers” at
        Lucas Gallery. However, the results were dysfunctional yet somewhat
        entertaining due to the incorporation of Gen Z slang and terms. It also
        problematically revealed the private information of friends at times.
        Another visual form of my archive lies in the multitude of photos I've
        taken. To counter the temporal distortion caused by the past pandemic, I
        began uploading ten photos a week to a personal Instagram page and
        thoughts of the week, creating a personal diary and archive of weekly
        thoughts and occurrences.
        <br></br>
        <br></br>
        Now, after accumulating thousands of photos from the past years, I
        executed a painting project inspired by Byron Kim's paintings of clouds
        every Sunday: collaging my self-portraits for each week using the photos
        I've taken. Furthermore, I also engaged in a conversation with my
        conversational chatbot and laser-cut interesting statements onto clear
        acrylic or wood: further investigating algorithmic errors in the
        exploration of identity and crafting alternative narratives and
        representations discussed in the texts Glitch Feminism: A Manifesto by
        Legacy Russel and psychologist Mary Aiken’s thought of the “cyber-self”.
        These text conversations would then be affixed to the canvas, where
        various iterations of "Warren"s engage in conversation—both the real
        Warren and a predicted version based on my archive. Additionally, I used
        Hugging Face’s Diffusers to train my Instragram images to generate
        abstract images to accompany the piece. Below are the example text
        conversations and generation of images after N iterations of training
        along with brief technical explaination of the process.
        <br></br>
        <br></br>
        <div align="center">
          <iframe
             title="generated"
            id="slides"
            src="https://docs.google.com/presentation/d/e/2PACX-1vQx1_Dvj393GTtkuGyEDeXKxs6bpgumlZ-Jrpk4AbDfFP6ULF2X9tFMSvaA-VF-On2KDEiablm4w4Vl/embed?start=true&loop=true&delayms=5000&amp;rm=minimal"
            frameborder="0"
            width="960"
            height="569"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </div>
        <br></br>
        <br></br>
        With these pieces, I play with the natural properties of the acrylic
        medium and texture to portray vibrant landscapes of the generated
        images. Experimenting with texture and the process of creation through
        incorporating the body, I challenge properties artificial intelligence
        can not recreate. Generated images, without the help of robotics, cannot
        hold the physicality and space a painting does. Generated images, unless
        the model is programmed by the engineer, lack a “process” that gifts
        artwork the intimacy of human thought and care. I then used a similar
        color palette of orange hues for my collage painting piece, portraying
        the various representations/misrepresentations of self.
      </p>
</div>
    ),
    notes: (
      <p>
        {" "}
        published in Rah Rah Visual Arts Magazine <br></br>mentored by Colleen
        Asper{" "}
      </p>
    ),
  },
  {
    classification: "traditional",
    class_name: "project gif three-dim",
    image_link: "three-dim.gif",
    page_link: "three-dim",
    title:
      "sustained investigation: three-dimensional to two-dimensional representation ",
    color: "#3F6CE6",
    text_color: "white",
    time: "2023",
    materials:
      "experiments with wood, pla plastic, acrylic sheet, light, programming in GLSL and Javascript, 3D modeling in Spline and programming in React",
    content: (
      <div>
        <div align="center">
          <iframe
             title="arena"
            src="https://drive.google.com/file/d/1DlrqOCNPT1tL-tamb_k-WZNt75i1LCRp/preview"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
        <br></br>
        <p>
          My main experience with art is through digital illustration. I started
          through first a mouse and pixel art, then FireAlpaca and Photoshop
          with the cheapest Wacom Intuos gifted for my birthday, and now with
          Procreate and my iPad. Coming from a low-income background, I am a
          self-taught artist as my parents were not able to afford visual art
          courses.
          <br></br>
          <br></br>I was best exposed to a more diverse range of mediums through
          the privilege of taking VIS courses at Princeton. After only working
          with illustration, drawing, and painting, I took Sculpture 1. This
          challenged me to design and think in a more spatial and
          three-dimensional manner.
          <br></br>
          <br></br>
          Following this, I took Computer Graphics, which allowed me to program
          in GLSL, JavaScript, ThreeJS to create projects such a mesh editor
          software, raytracer, rasterizer, and cloth simulator. Through taking
          my background as a two-dimensional artist and recent introductions to
          more three-dimensional mediums, I wanted to challenge myself to
          investigate further on intersections between the two. How can
          traditional three-dimensional objects and scenes be represented in
          two-dimensional mediums, whether it be in computer graphics,
          supposedly conventional flat mediums, or through limited one-point
          perspectives? Furthermore, how do people interact and view
          three-dimensional models in two dimensions conventionally with
          current-day modeling software or other technologies? Curious to answer
          these questions, I employed design thinking techniques to research and
          prototype the subject of creating three-dimensional representations
          through two dimensions, with specific foundation in computer graphics.
        </p>
      </div>
    ),
    notes: (
      <p>
        research presented to Charles Broskowski, are.na founder
        <br></br> mentored by graphic designer David Reinfurt
      </p>
    ),
  },
  {
    classification: "traditional",
    class_name: "project gif sellout_store",
    image_link: "sellout_store.gif",
    page_link: "sellout_store",
    title: "sellout store",
    color: "#472f9d",
    text_color: "white",
    time: "2023",
    materials:
      "installation: cardboard cutout of self, table, lasercut stands and acrylic signs; merchandise: wood, pla plastic, plaster, polymer clay",
    content: (
      <div>
        <div id="ImageGallery">
          <ImageGallery items={images.sellout} />
        </div>
        <p>
          The Trolley Problem is a famous philosophical question, delving into
          concerns of the doctrine of double effect and the ethical dimensions
          surrounding human value. This has captivated my interest, prompting an
          exploration into the intrinsic "worth" attributed to individuals and
          the dynamic shifts in perception that occur within diverse contexts
          and among varying individuals. A trolley is heading towards five
          people. Would you divert it to another track by pulling a lever, which
          will then head towards one of your cousins instead? What if the choice
          was between an elderly individual and a child? Your parents or ten
          people? One Warren or another random 21-year-old?
          <br></br> <br></br>
          Applying this predicament to the self, I examine what I am worth to
          you, the viewer. How am I evaluated within societal standards: my net
          worth, my skill sets, my personality, my being? How does your
          relationship with me–strangers, acquaintances, besties, enemies–impact
          your perspective of my worth? My interest in this intensifies in
          understanding how societal norms, cultural influences, and personal
          beliefs shape the perception of an individual's worth. The question of
          whether the ethical evaluation of a person can be objectively measured
          or if it is subject to the whims of subjective interpretation becomes
          a focal point of contemplation. Through this, I also initiate
          discussions on the methods institutions and socioeconomic systems
          determine our worth and standing within society through prestige,
          wealth, appearance, language, etc. To do this, I crafted this Sellout
          Store: crafting merchandise representative of aspects of myself to let
          you determine how much I am worth. With my store, echoes of the
          trolley problem persist, challenging the viewer to ponder the value we
          place on individuals and the methods people compare one's worth over
          another.
          <br></br> <br></br>
        </p>
        <div id="ImageGallery">
          <ImageGallery items={images.sellout_comic} />
        </div>
      </div>
    ),
    notes: <p>exhibited in 2023 Fabric Sculpture Show @ Lucas Gallery</p>,
  },
  {
    classification: "traditional",
    class_name: "project gif net_worth",
    image_link: "net_worth.gif",
    page_link: "net-worth",
    title: "net worth",
    color: "#03996c",
    text_color: "white",
    time: "2023",
    materials:
      "thrifted green fabric (mom's favorite color), real Warren dollars (adjusted for inflation), fairy lights",
    content: (
      <div>
        <div id="ImageGallery">
          <ImageGallery items={images.net} />
        </div>
        <p>
          Warren always wonders what he is worth! According to his bank account,
          not much! He came into college as a low-income student and will be
          graduating college as a low-income adult with a quarter-life crisis
          and uncertain prospects. His net worth is unstable! Venmo @warrenquan
          to donate to the poor!
        </p>
      </div>
    ),
    notes: (
      <p>
        exhibited in 2023 Fabric Sculpture Show @ Lucas Gallery <br></br>{" "}
        mentored by MJ Daines
      </p>
    ),
  },
  {
    classification: "traditional",
    class_name: "project gif perceive",
    image_link: "perceive.gif",
    page_link: "perceive",
    title: "DO NOT PERCEIVE ME 👁👄👁",
    color: "#190b42",
    text_color: "white",
    time: "2023",
    materials:
      "warren's worn sweater, cut bed sheet, red acrylic paint (dad's favorite color)",
    content: (
      <div>
        <div id="ImageGallery">
          <ImageGallery items={images.perceive} />
        </div>
        <p>
          According to Warren’s previous therapists, he has severe social
          anxiety! He craves invisibility, yearning to escape civilization for a
          woodland existence. Simultaneously, he seeks connection and impact
          within a community. The conspicuous vest clashing against his wishes
          of invisibility demonstrates his constant cognitive dissonance.
          Perceive Warren with caution.
          <br></br>
          <br></br>
          exhibited in 2023 Fabric Sculpture Show @ Lucas Gallery
        </p>
      </div>
    ),
  },
  {
    classification: "traditional",
    class_name: "project gif cute_captivity",
    image_link: "cute_captivity.gif",
    page_link: "cute_captivity",
    title: "cute captivity",
    color: "#FB4570",
    text_color: "white",
    time: "2021",
    materials:
      "2x3 lumber, acrylic paint, plaster of hand, cardboard, chains, ribbons, stuffed animal keychains",
    content: (
      <div>
        <div id="ImageGallery">
          <ImageGallery items={images.cage} />
        </div>
        <p>
          Cognitive dissonance manifests as a mental conflict arising when one's
          beliefs diverge from their actions. Within this campy cage of
          confinement, I manipulate the symbolism of a cage, simultaneously
          emblematic of protection and restraint. I carefully curate a palette
          of pastel hues reminiscent of a nurturing crib, adorned with playful
          ribbons of entertainment and wonder, juxtaposed against the backdrop
          of darker undertones suggestive of imprisonment and surveillance. This
          artistic interplay becomes a vessel for expressing my disdain towards
          a guarded childhood, evoking sensations of suffocation and nausea.
          <br></br>
          <br></br>
          In this visual narrative, I dichotomize emotions associated with
          parental love and control. I depict the profound affection bestowed by
          my parents as they shielded me from potential harm, contrasted with
          the overbearing nature that cast a shadow over my adolescence. Their
          love, demonstrated abundantly, becomes entangled with the confines of
          their expectations, creating a paradoxical experience.
          <br></br>
          <br></br>
          This artistic representation expresses the intricacies of love and
          restriction. It expresses my homesick for hurt. It expresses the
          methods I navigate the nuanced landscape of affectionate protection
          and the confining nature of predetermined expectations that comes with
          it.
          <br></br>
        </p>
      </div>
    ),
    notes: (
      <p>
        exhibited in 2021 Sculpture Show @ Hagan Gallery <br></br>mentored by
        Kenneth Tam
      </p>
    ),
  },
];

