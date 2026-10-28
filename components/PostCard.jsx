


const PostCard = ({ post }) => {
    const { title, body, tags,reactions:{likes, dislikes}, views } = post;
    return (
        <div className="border border-gray-300 rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-gray-700">{body}</p>
            <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    {likes} likes, {dislikes} dislikes, {views} views
                </p>
            </div>
        </div>
    )
}
export default PostCard