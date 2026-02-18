import read1 from '../assets/images/read1.png'
import read2 from '../assets/images/read2.png'
import read3 from '../assets/images/read3.png'
import {Link} from 'react-router'

export default function LatestReads() {
  const articles = [
    {
      id: 1,
      image: read1,
      title: "Why Logos are for Screenshots, not Billboard",
      tag: "BLOGS",
      tagColor: "bg-orange-500"
    },
    {
      id: 2,
      image: read2,
      title: "Why Logos are for Screenshots, not Billboard",
      tag: "BLOGS",
      tagColor: "bg-orange-500"
    },
    {
      id: 3,
      image: read3,
      title: "Why Logos are for Screenshots, not Billboard",
      tag: "ARTICLE",
      tagColor: "bg-purple-400"
    }
  ]

  return (
    <div className="bg-black text-white  py-16 sm:py-20 md:py-24 relative z-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-10 sm:mb-12">
          <h2 className="font-light text-2xl sm:text-3xl md:text-4xl">
            Latest<span className="font-semibold"> Reads</span>
          </h2>

          <button className="bg-[#F7AF19] cursor-pointer text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors w-fit">
            Explore all resources
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="group cursor-pointer"
            >
              {/* Image */}
              <Link to ="/blogs">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              

              {/* Content */}
              <div>
                <h4 className="font-semibold mb-3 text-base sm:text-lg transition-colors">
                  {article.title}
                </h4>

                <span
                  className={`${article.tagColor} text-white text-xs font-bold px-4 py-2 rounded inline-block uppercase tracking-wide`}
                >
                  {article.tag}
                </span>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
