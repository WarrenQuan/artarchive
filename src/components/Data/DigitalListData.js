import ImageGallery from "react-image-gallery";
import PhotoAlbum from "react-photo-album";
import { images, imagesGal } from "./ImageData";

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