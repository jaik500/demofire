export class BlogPostHelp {
    // ex.
    //Title: This is a title for blog post
    // Result: this-is-a-title-for-blog-post

    static createSlug(title: string): string {
        const slug = title.toLowerCase().replace(/\s+/g, '-');
        const randomThreeDigitNumber = Math.floor(Math.random() * 1000);
        return `${slug}-${randomThreeDigitNumber}`;
    }
    
}