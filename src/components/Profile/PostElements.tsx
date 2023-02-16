import Cards from "./WallCards";

type Props = {
    store?: any
}

const PostElements: React.FC<Props> = ({ ...props }) => {
    let postElements =
        props.store.getState().profilePage.posts.map((p: any) =>
            <Cards id={p.id} header={p.post} message={p.message}
                likescount={p.likescount} img={p.img} />)

    return (
        <>
            {postElements}
        </>
    )
}

export default PostElements;