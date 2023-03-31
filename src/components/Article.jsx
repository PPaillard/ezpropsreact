// je récupère un "contenant", que je destructure à l'entrée via ses propriétés (props)
const Article = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{content}</div>
    </div>
  );
};

export default Article;
