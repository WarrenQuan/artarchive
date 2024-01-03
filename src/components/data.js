// import PdfViewer from "./PdfViewer/PdfViewer";
import ImageGallery from "react-image-gallery";
import PhotoAlbum from "react-photo-album";
import { images, imagesGal } from "./images";

export const digital_list = [
  {
    classification: "digital",
    class_name: "project gif mail",
    image_link: "mail.gif",
    page_link: "mail",
    title: "you got mail!",
    color: "#3F6CE6",
    text_color: "white",
    time: "2022",
    materials: "digital; procreate and adobe creative cloud",
    content: (
      <div>
        <PhotoAlbum
          layout="rows"
          photos={imagesGal.postcards}
          padding={5}
          rowConstraints={{
            minPhotos: 2,
            maxPhotos: 3,
          }}
        />
        <p>
          {" "}
          <br></br>
          <br></br>
          <a href="https://www.tiktok.com/@itsethankeiser/video/7148115147746266410?lang=en">
            September 2022: TikTok user Ethan Keiser shared a video employing
            artificial intelligence to engage with 49,000 women on Tinder,
            ultimately acquiring around 500 phone numbers.
          </a>
          May 2023: one of my ingenious classmatess, Liz Petrov, was prototyping
          how Large Language Models (LLMs) can integrated into iMessage to
          optimize user responses. This appears to be the next step in
          technological progress as platforms like GMail feature Smart Reply and
          Apple incorporates predictive text within our keyboards.
          <br></br>
          <br></br>
          In this age dominated by artificial intelligence and digital
          communication, the importance and influence of language are waning.
          Consequently, this trend is diminishing the intimacy inherent in our
          communication methods.
          <br></br>
          <br></br>
          Contemplating modes of communication, how can we revive more personal
          ways of connecting? A comparison between the intimacy of handwritten
          cards and the more streamlined nature of texts sent through iMessage
          prompts people to consider moving away from optimized methods of
          expression and appreciating the beauty of the communication process
          itself.
          <br></br>
          <br></br>
          One method to achieve this is to actively engage in the act of
          handwriting and the exchange of memories, introducing a physical
          element that goes beyond the digital. This concept reminded me of
          postcards, whose nostalgic charm has consistently captivated me. Yet,
          while postcards have evolved into commercialized, curated
          representations of places, I began to experiment and wonder about
          methods of de-commercializing the item.
          <br></br>
          <br></br>
          Traditionally, postcards showcase picturesque locations; however,
          injecting a personal touch, such as incorporating a self-portrait,
          enhances the depth of intimacy. By transforming postcards into a means
          of celebrating life through the inclusion of self-portraiture, I
          broaden their scope beyond mere locations to encompass memories of the
          artist.
          <br></br>
          <br></br>
          Thus, the goal of this project is to facilitate the sharing of stories
          and moments, complemented by printed materials inscribed with personal
          anecdotes and thoughts from my diary. Through this endeavor, I aspire
          to initiate conversations on how we can rekindle genuine human
          connections in an era often dominated by impersonal and optimized
          communication methods.
          <br></br>
          <br></br>
        </p>
        <div id="ImageGallery">
          <ImageGallery items={images.postcards} />
        </div>
      </div>
    ),
    notes: (
      <p>
        printed into large and small postcards & exhibited in 2023 Book&Poster
        Show at Hagan Gallery<br></br>
        mentored by Martha Friedman
      </p>
    ),
  },
  {
    classification: "digital",
    class_name: "project comic",
    image_link: "bar-bender.png",
    page_link: "bar-bender",
    title: "bar-bender",
    color: "#000000",
    text_color: "white",
    time: "2023",
    materials: "digital; procreate and adobe creative cloud",
    content: (
      <div>
        <div align="center">
          <iframe
            title="comic"
            src="https://drive.google.com/file/d/1uRd9QGV8HKUaUM2SvfZNEetv1_znvs9h/preview"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
        <p>
          <br></br>
          <br></br>
          My parents named me Warren after Warren Buffett, in hopes I would, one
          day, be rich. Similar to how I have disappointed my parents’
          expectations, this comic is dedicated to the friends I have
          disappointed. Mentored by The New Yorker cartoonist Evertt Glenn, I
          reminisce, reflect, and forgive myself.
        </p>
      </div>
    ),
    notes: (
      <p>
        published onto The Princeton Comics Notebook (2023) <br></br>
        presented @ Labyrinth Books December 6th, 2023
      </p>
    ),
  },
  {
    classification: "digital",
    class_name: "project gif cultural",
    image_link: "cultural.gif",
    page_link: "culture-melting-pot",
    title: "Cultural Melting Pot",
    color: "#472f9d",
    text_color: "white",
    time: "2020-2023",
    materials: "digital; procreate and adobe creative cloud",
    content: (
      <p>
        <div id="ImageGallery">
          <ImageGallery items={images.melting_pot} />
        </div>
        <br></br>
        <br></br>
        Some label America as a "melting pot" and others as a "salad bowl," but
        perhaps we should consider America as a “cultural ratatouille” (a term
        coined by brilliant bestie Isabella Shutt). Unlike the monolithic
        implication of a melting pot, where all blends into a singular entity,
        or the separation suggested by a salad bowl, where cultures exist
        independently, a ratatouille captures the essence of diverse ingredients
        coexisting harmoniously.
        <br></br>
        <br></br>
        Similar to these metaphors, I understand my cultural identity best
        through food. I learned about my identity through the familiar umami
        broth of phở, the sizzling, fishy bánh xèo, the crispy, yet doughy
        scallion pancakes, and the enrapturing hand-folded dumplings which all
        captured my curiosity. I visualized the understanding of my identity and
        intersectionality through a series of digital pieces inspired by the
        texts of Gloria Anzaldúa and Robin Wall Kimmerer.
        <br></br>
        <br></br>
        <h2>
          “Understanding culture through food is an interesting process because
          once a person starts asking these questions, such as how something is
          made, what ingredients are in it, or why is it called a certain way,
          the answers obtained go beyond culinary learning. In these answers,
          food tells us something about a culture’s approach to life” - Vatika
          Sibal, Food: Identity of Culture and Religion, 2018
        </h2>
        <br></br>
        <br></br>
        Continuing this exploration in the intersection of background and
        identity, during the summer of 2021, I interned with Princeton’s
        Entrepreneurship Center to explore and combat pre-existing, embedded
        assumptions about the role immigrants play in U.S. society. This was an
        issue personal to me as a first-generation student whose parents both
        immigrated from Vietnam and faced struggles pursuing the American Dream.
        This included language and skill barriers, which now resulted in our
        low-income background.
        <br></br>
        <br></br>
        To address this, I collaborated with a team of four to conduct extensive
        research. This involved interviewing my team members regarding their
        connections with the subject of immigration, learning from professors,
        experts, and community members knowledgeable on the history and
        struggles of immigrants, to hearing anecdotes from first and
        second-generation immigrants on their family's migration story.
        Conducting these interviews with over 30 individuals was impactful, each
        offering rich perspectives on our topic. This experience emphasized the
        vital importance of cooperation and community support in addressing the
        core of the problem and devising sustainable solutions.
        <br></br>
        <br></br>
        <div align="center">
          <iframe
            title="mt"
            id="slides"
            src="https://docs.google.com/presentation/d/e/2PACX-1vSAsWaoWz_J7MGg31HaupHDddqdpy8jo2Seds8oGlGTwgLGUStiidjpyx--ks74AhlhMs-9L6H-EuuR/embed?start=true&loop=true&delayms=10000&amp;rm=minimal"
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
        Subsequently, we developed event prototypes, considering ideas like
        guides for immigrants and cultural celebrations. Opting for a food
        festival, we showcased diverse cultural contributions to America,
        mirroring how food had exposed me to various aspects of my cultural
        identity. Collaborating with student organizations, we organized a
        Street Night Market on campus, featuring cultural food, performances,
        and activities. User interviews revealed widespread newfound
        appreciation for different cultures, solidifying the impact of our
        initiative.
        <br></br>
        <br></br>
        Now, running a food illustration account, I share the brilliance of
        dishes tasted from our "cultural ratatouille", like Ube pancakes to
        South African bunny chow, celebrating the diversity that enriches our
        collective experience.
        <br></br>
        <br></br>
        <PhotoAlbum
          layout="rows"
          photos={imagesGal.food}
          padding={5}
          rowConstraints={{
            minPhotos: 2,
            maxPhotos: 2,
          }}
        />
      </p>
    ),
    notes: (
      <p>
        special thanks to mentors Jorie Hofstra, Jessica Leung, and Rob Van
        Varick
      </p>
    ),
  },
  {
    classification: "digital",
    class_name: "project lowell",
    image_link: "lowell.png",
    page_link: "lowell",
    title: "journalism and public relations",
    color: "#000000",
    text_color: "white",
    time: "2017 - 2019",
    materials: "digital; adobe creative cloud",
    content: (
      <div>
        {/* <div id="ImageGallery">
          <ImageGallery items={images.journ} />
        </div> */}
        <PhotoAlbum
          layout="rows"
          photos={imagesGal.journ}
          padding={5}
          rowConstraints={{
            minPhotos: 2,
            maxPhotos: 3,
          }}
        />
        <p>
          <br></br>
          Growing up in a low-income household, I was already starving before I
          could become a starving artist. Yet I still wanted to pursue the arts
          so, as a self-taught artist, working for my school newspaper as an
          illustrator was how I learned to draw. I could not get into my
          school’s art courses, due to limited seats from school's underfundment
          of the arts curriculum. Subsequently, my parents could not afford art
          classes for me due to our underprivileged background. Therefore, I
          taught myself through online tutorials and participated in
          extracurriculars that gave me access to Adobe Suite tools and
          real-world applications for illustration and design.
          <br></br>
          <br></br>
          For The Lowell, I illustrated graphics using Adobe Illustrator and
          Photoshop for every printed issue and a multitude of online articles
          for our student-run newspaper. Furthermore, I designed immersive page
          layouts using Adobe InDesign while collaborating with staff to craft
          digital drawings that best convey the messages in their article.
          Through this, I was also able to comment on social issues through
          editorial cartoons displayed on the front pages of magazines.
          <br></br>
          <br></br>I employed my graphic design and illustration skills for
          other organizations as well. One instance is for my chapter’s Red
          Cross, where after witnessing natural disasters and wildfires
          devastate my home state California, I volunteered and took a
          leadership position in public relations. I was able to recruit 264
          members by printing business cards and flyers, painting posters, and
          using social media. With my graphics and posters, I fundraised $16630
          for measles and rubella vaccinations, natural disasters, and veterans
          by advertising for fundraisers, helping the organization achieve
          Senate Certification of Recognition from Senator Scott Wiener. Another
          is with the Stanford’s Asian Liver Center, where I used similar
          talents to fundraise and coordinate $1000 in donations to a child
          burdened with HBV, a virus prevalent within my Vietnamese community,
          helping our chapter achieve public recognition by the National
          Hepatitis B Foundation.
          <br></br>
          <br></br>
          {/* <div id="ImageGallery">
            <ImageGallery items={images.lowell} />
          </div> */}
          <PhotoAlbum
            layout="rows"
            photos={imagesGal.lowell}
            padding={5}
            rowConstraints={{
              minPhotos: 2,
              maxPhotos: 3,
            }}
          />
          <br></br>
          <br></br>
          This was the origin of my art journey: avenues where I discovered I
          could use art to create social impact and change and articulate
          messages that hold value to me.
        </p>
      </div>
    ),
  },
];

export const design_list = [
  {
    classification: "design",
    class_name: "project gif feel-good",
    image_link: "feel-good.gif",
    page_link: "feel-good",
    title: "Feel Good Buddy",
    color: "#3F6CE6",
    text_color: "white",
    time: "2023",
    materials: "digital; procreate and adobe creative cloud",
    content: "descrip",
  },
  {
    classification: "design",
    class_name: "project gif eclub-design",
    image_link: "eclub-design.gif",
    page_link: "eclub-design",
    title: "E-Club Design",
    color: "#3F6CE6",
    text_color: "white",
    time: "2023",
    materials: "digital; procreate and adobe creative cloud",
    content: "descrip",
  },
];

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

export const all_data = [
  ...digital_list,
  // ...design_list,
  ...traditional_list,
];
