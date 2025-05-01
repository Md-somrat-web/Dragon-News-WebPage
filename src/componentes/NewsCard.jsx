import { FaEye } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const NewsCard = ({ news }) => {
  const {
    title,
    thumbnail_url,
    author,
    rating,
    total_view,

    details,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl rounded-2xl p-4">
      <figure className="rounded-xl overflow-hidden">
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="w-full h-60 object-cover"
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title text-xl font-semibold">{title}</h2>

        <div className="flex items-center gap-3 text-sm text-gray-500">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover border"
          />
          <div>
            <p className="font-medium text-gray-800">{author?.name}</p>
            <p>{new Date(author?.published_date).toLocaleDateString()}</p>
          </div>
        </div>

        <p className="text-gray-700 text-sm">
          {details.length > 200 ? `${details.slice(0, 200)}...` : details}
        </p>

        <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
          <div className="flex items-center gap-2">
            <FaEye className="text-blue-500" />
            <span>{total_view}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="badge badge-info capitalize">{rating.badge}</span>
            <span className="text-gray-800 font-semibold">
              {rating.number}/5
            </span>
            {rating.badge === "trending" && (
              <MdVerified className="text-green-500" />
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span key={tag} className="badge badge-ghost text-xs">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
