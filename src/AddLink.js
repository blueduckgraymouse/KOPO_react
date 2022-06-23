function AddLink(props) {
  return <div className="border"><a href={props.url}>{props.name}</a></div>;
}

export default AddLink;
