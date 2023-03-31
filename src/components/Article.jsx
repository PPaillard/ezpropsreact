// je récupère un "contenant", un objet dans lequel vont se trouver mes propriétés (props)
const Article = (container) => {
  return (
    <div>
      <h1>{container.title}</h1>
      <div>{container.content}</div>
    </div>
  );
};

export default Article;
