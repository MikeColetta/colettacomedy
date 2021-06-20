import React from 'react';
import { Table, Button } from 'react-bootstrap';

function ShowsTable() {
    return(
    <Table striped bordered hover variant="dark">
        <tbody>
            <tr>
                <td>SUN - Jun 27, 2021</td>
                <td>7:00pm</td>
                <td>Host</td>
                <td>Four Horsemen Brewery - Kent, WA</td>
                <td className="moreInfo"><Button className='moreInfoButton'><a href="https://fourhorsemen.beer/?" className="moreInfo" >More Info</a></Button></td>
            </tr>
            <tr>
                <td>SUN - Jun 27, 2021</td>
                <td>7:00pm</td>
                <td>Host</td>
                <td>Four Horsemen Brewery - Kent, WA</td>
                <td className="moreInfo"><Button className='moreInfoButton'><a href="https://fourhorsemen.beer/?" className="moreInfo" >More Info</a></Button></td>
            </tr>
            <tr>
                <td>SUN - Jun 27, 2021</td>
                <td>7:00pm</td>
                <td>Host</td>
                <td>Four Horsemen Brewery - Kent, WA</td>
                <td className="moreInfo"><Button className='moreInfoButton'><a href="https://fourhorsemen.beer/?" className="moreInfo">More Info</a></Button></td>
            </tr>
        </tbody>
    </Table>
    )
}

export default ShowsTable;