const LeadAttrTable = ({leadattr}) => {
  return (
      <tr key={leadattr.id}>
          <td>{leadattr.name}</td>
          <td>{leadattr.slug}</td>
          <td>{leadattr.attribute_type}</td>
          <td>{leadattr.lead_type}</td>
          <td>-</td>
          <td className="helpText">{leadattr.help_text}</td>
          <td>
              <i className="fas fa-edit"></i>
              <i className="fa-solid fa-trash"></i>
          </td>
      </tr>
  )
}

export default LeadAttrTable;