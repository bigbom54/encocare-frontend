import { tableSortIcon } from '../../../assets/icons/common';
import { TablePropsType } from '../../../types/basicComponents';
import CheckBox from '../CheckBox/CheckBox';
import './Table.scss';

const Table = ({ columns, rows, checked, filter }: TablePropsType) => {
    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        {checked && <th></th>}
                        {columns.map((item) => (
                            <th key={item.key}>
                                <p>
                                    {item.title}
                                    {item.key == filter ? <span>{tableSortIcon}</span> : ''}
                                </p>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.key}>
                            {checked && (
                                <td className="checkbox-td">
                                    <CheckBox />
                                </td>
                            )}
                            {columns.map((item) => (
                                <td key={item.key}>{(row as any)[item['key']] as any}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;