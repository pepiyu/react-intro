import Post from './Post.js'

let posts = 
[
    {
        id: 0,
        likes: 50,
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        user: '@pepi',
        time: '1 min ago',
        img: 'https://source.unsplash.com/random/800x800',
        comments: ['Some quick example text']
    },
    {
        id: 1,
        likes: 99,
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        user: '@pepa',
        time: '10 min ago',
        img: 'https://source.unsplash.com/random/800x800',
        comments: ['Lorem ipsum dolor sit amet.','A snail can sleep for three years at a time.','Octopuses have three hearts.','Polar bears have black skin and see-through fur.']
    },
    {
        id: 2,
        likes: 100,
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        user: '@lacasitos',
        time: '10 min ago',
        img: 'https://source.unsplash.com/random/800x800',
        comments: [' blue whale weighs as much as three elephants and is as long as three Greyhound buses.']
    },
]


function PostsList() {

    const postsList = []
    const sortedPostsIds = posts.map(el => el.id).sort()
    sortedPostsIds.forEach(idx => {

        const post = posts.find(p => p.id === idx)

        postsList.push(<Post post={post}/>)
    })

    return(
        <>
         {postsList}
        
        </>)


}

export default PostsList