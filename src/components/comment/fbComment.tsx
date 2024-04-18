import { FacebookProvider, Comments } from 'react-facebook';

export default function CommentsFaceBook({ id }: { id: string }) {
    return (
        <FacebookProvider appId="363711562908396">
            <Comments href="https://developers.facebook.com/docs/plugins/comments#configurator" numPosts={3} />
        </FacebookProvider>
    );
}