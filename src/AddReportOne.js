import PrintBar from './PrintBar.js';

function AddReportOne(props) {
  const element = (
    <tr>
      <td className="name">
        {props.id}. {props.name}
      </td>
      <td className="voted">
        <PrintBar size={props.percent} /> {props.count}표 ({props.percent}%)
      </td>
    </tr>
  );
  return element;
}

export default AddReportOne;