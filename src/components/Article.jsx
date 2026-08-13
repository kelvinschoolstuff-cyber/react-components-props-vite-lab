function Article({ title, date = "January 1, 1970", preview, minutes }) {
   let readTime = "";
   if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      readTime = `${"☕️".repeat(cups)} ${minutes} min read`;
   } else {
      const boxes = Math.ceil(minutes / 10);
      readTime = `${"🍱".repeat(boxes)} ${minutes} min read`;
   }

   return (
      <article>
         <h3>{title}</h3>
         <small>{date}</small>
         <p>{preview}</p>
         <small>{readTime}</small>
      </article>
   );
}

export default Article;