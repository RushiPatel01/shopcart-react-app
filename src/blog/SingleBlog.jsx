import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  // console.log(id);
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);

  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h2>{item.title}</h2>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Search engine results pages and social media
                                  posts both tend to show readers the same few
                                  things: The blog title and either your meta
                                  description or a snippet of your introduction.
                                  You need to have a strong title and meta
                                  description to capture the click, but once
                                  they’re on your post, you have one job: Keep
                                  them there.
                                </p>

                                <blockquote>
                                  <p>
                                    Many people may come through social media,
                                    and if you're great at SEO, they'll find
                                    your article through search engines. In
                                    either case, let's take a look at what they
                                    see before clicking over into your article.
                                  </p>
                                  <cite>
                                    <a href="#">...Melissa Hunter</a>
                                  </cite>
                                </blockquote>

                                <p>
                                  Do you like panning for gold? This last
                                  winter, a team of eight rugged mountain men
                                  trekked through howling winds and blinding
                                  snow into the most remote area of Alaska. The
                                  goal: to hopefully find some gold. After two
                                  months of crushing disappointment, this group
                                  of prospectors stumbled upon the biggest find
                                  of their lives! Three weeks later, the team
                                  emerged to tell their story. In this article,
                                  I'll tell you all about it.
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />

                                <p>
                                  Audiences want real, honest information. Your
                                  introduction needs to disarm your reader,
                                  especially if you're going to be talking about
                                  yourself. If your product or service is going
                                  to be a focal point of the piece, you need to
                                  disarm your audience. There's nothing worse
                                  than reading an intro from a braggadocios
                                  brand.
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/abbdJ4Yfm54?si=gz1CALSBZWIJZxMG"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  If your content is going to talk about you,
                                  you need to knock down the guards of your
                                  audience. They will have their guard up,
                                  knowing that you're horribly biased just like
                                  everyone else. And, they'll read all of your
                                  talking points through that lens - if they
                                  read it at all.
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {
                                      socialList.map((val, i) => (
                                        <li key={i}>
                                          <a href="#" className={val.className}>
                                            <i className={val.iconName}></i>
                                          </a>
                                        </li>
                                      ))
                                    }
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="navigations-part">
                        <div className="left">
                          <a href="#" className="prev">
                            <i className="icofont-double-left"></i> Previous Blog
                          </a>
                          <a href="#" className="title">
                          The Importance Of Intrinsic for Students.
                          </a>
                        </div>
                        <div className="right">
                          <a href="#" className="next">
                            <i className="icofont-double-right"></i> Next Article
                          </a>
                          <a href="#" className="title">
                          The Challenge Global Learning In Public Education.
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
