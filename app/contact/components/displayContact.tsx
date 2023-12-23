import { contactTypes } from "@/types/commonTypes";

export default function DisplayContact(props: { contactData: contactTypes[] }) {
    return (
        <div className="max-w-md mx-auto">
            <div>
                <table>
                    <tr>
                        <th className="max-w-md mx-auto justify border bg-slate-400">Name</th>
                        <th className="mx-auto my-auto justify border  bg-slate-400">Father Name</th>
                        <th className="mx-auto my-auto justify border  bg-slate-400">City</th>
                        <th className="mx-auto my-auto justify border bg-slate-400">Country</th>
                        <th className="mx-auto my-auto justify border bg-slate-400">State</th>
                        <th className="mx-auto my-auto justify border bg-slate-400">Email</th>
                        <th className="mx-auto my-auto justify border bg-slate-400">CNIC</th>
                        <th className="mx-auto my-auto justify border bg-slate-400">Batch</th>
                        <th className="mx-auto my-auto justify border  bg-slate-400">Phone</th>
                        <th className="mx-auto my-auto justify border  bg-slate-400">Message</th>
                    </tr>
                    {props.contactData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="max-w-md mx-auto justify border  bg-slate-300"> {item.name} </td>
                                <td className="mx-auto my-auto justify border bg-slate-300"> {item.fname} </td>
                                <td className="mx-auto my-auto justify border bg-slate-300"> {item.city} </td>
                                <td className="mx-auto my-auto justify border  bg-slate-300"> {item.cname} </td>
                                <td className="mx-auto my-auto justify border bg-slate-300"> {item.state} </td>
                                <td className="mx-auto my-auto justify border bg-slate-300"> {item.email} </td>
                                <td className="mx-auto my-auto justify border bg-slate-300"> {item.cnic} </td>
                                <td className="mx-auto my-auto justify border bg-slate-300"> {item.batch} </td>
                                <td className="mx-auto my-auto justify border bg-slate-300"> {item.phone} </td>
                                <td className="mx-auto my-auto justify border bg-slate-300"> {item.message} </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}