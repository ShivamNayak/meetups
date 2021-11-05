import MeetupItem from "./MeetupItem";
const MeetupList = function (props) {
  return (
    <ul>
      {props.data.map((d) => (
        <MeetupItem
          key={d.id}
          id={d.id}
          title={d.title}
          img={d.imageUrl}
          address={d.address}
          description={d.description}
        />
      ))}
    </ul>
  );
};
export default MeetupList;
