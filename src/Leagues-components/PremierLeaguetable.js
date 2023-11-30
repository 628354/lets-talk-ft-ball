import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export default function PremierLeaguetable() {
  return (
    <div>
        <div className='en-table-deta ar-table-deta'>
        <Table  className='aline_table'>
      <thead>
        <tr>
           <th></th>
          <th>TEAM</th>
          <th>GAMES</th>
          <th>WIN</th>
          <th>DRAW</th>
          <th>LOSE</th>
          <th>GOALS SCORED</th>
          <th>GOALS CONCEDED</th>
          <th>POINTS</th>
          <th>POINT GAP</th>
          <th>GS-GC</th>
          <th>WIN%</th>
        </tr>
      </thead>
      <tbody className='team_poin'>
      <tr class="filter">
       <td colspan="7">
        <div class="inside-filter"> <span>Filter By Season </span>
       <div class="dropdown_filter">
          <button class="dropbtn"> <span>2023-24 </span> <span><i class="ri-arrow-down-s-line"></i></span> </button>
          <div class="dropdown-content">
          <Link to="">2023-24</Link>
          <Link to="">2022-23</Link>
          <Link to="">2021-22</Link>
          <Link to="">2020-21</Link>
          <Link to="">2019-20</Link>
          <Link to="">2018-19</Link>
          <Link to="">2017-18</Link>
          <Link to="">2016-17</Link>
          </div>
          </div>

       </div>
       </td>
      <td colspan="6"><div class="team-btn"> <Link to="">Compare Now</Link> </div></td>
     </tr>
        <tr>
          <td>1</td>
          <td className='imagetext_city'><Link to="/TeamDetailsl"><span className='overimage'><img src={require('../img/tottenham-hotspur-fc-logo.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Tottenham</span></Link></td>
          <td>9</td>
          <td>7</td>
          <td>2</td>
          <td>0</td>
          <td>20</td>
          <td>8</td>
          <td>23</td>
          <td>0</td>
          <td>12</td>
          <td>85.19%</td>

        </tr>
        <tr>
          <td>2</td>
          <td className='imagetext_city'><Link to='/TeamDetailsl'><span className='overimage'><img src={require('../img/manchester-city-logo.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Man City</span></Link></td>
          <td>9</td>
          <td>7</td>
          <td>0</td>
          <td>2</td>
          <td>19</td>
          <td>7</td>
          <td>21</td>
          <td>2</td>
          <td>10</td>
          <td>77.78%</td>

        </tr>
        <tr>
          <td>3</td>
          <td className='imagetext_city'><Link to=""><span className='overimage'><img src={require('../img/arsenal-logo-vector.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Arsenal</span></Link></td>
          <td>9</td><
            td>7</td> <td>0</td><td>2</td><td>19</td><td>7</td> <td>21</td><td>2</td><td>10</td> <td>77.78%</td>
        </tr>
        <tr>
          <td>4</td>
          <td className='imagetext_city'><Link to=''><span className='overimage'><img src={require('../img/arsenal-logo-vector.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Arsenal</span></Link></td>
          <td>9</td><td>7</td> <td>0</td><td>2</td><td>19</td><td>7</td> <td>21</td><td>2</td><td>10</td> <td>77.78%</td>
        </tr>
        <tr>
          <td>5</td>
          <td className='imagetext_city'><Link to=''><span className='overimage'><img src={require('../img/arsenal-logo-vector.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Arsenal</span></Link></td>
          <td>9</td><td>7</td> <td>0</td><td>2</td><td>19</td><td>7</td> <td>21</td><td>2</td><td>10</td> <td>77.78%</td>
        </tr>
        <tr>
          <td>6</td>
          <td className='imagetext_city'><Link to=''><span className='overimage'><img src={require('../img/arsenal-logo-vector.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Arsenal</span></Link></td>
          <td>9</td><td>7</td> <td>0</td><td>2</td><td>19</td><td>7</td> <td>21</td><td>2</td><td>10</td> <td>77.78%</td>
        </tr>
        <tr>
          <td>7</td>
          <td className='imagetext_city'><Link to=''><span className='overimage'><img src={require('../img/arsenal-logo-vector.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Arsenal</span></Link></td>
          <td>9</td><td>7</td> <td>0</td><td>2</td><td>19</td><td>7</td> <td>21</td><td>2</td><td>10</td> <td>77.78%</td>
        </tr>
        <tr>
          <td>8</td>
          <td className='imagetext_city'><Link to=''><span className='overimage'><img src={require('../img/arsenal-logo-vector.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Arsenal</span></Link></td>
          <td>9</td><td>7</td> <td>0</td><td>2</td><td>19</td><td>7</td> <td>21</td><td>2</td><td>10</td> <td>77.78%</td>
        </tr>
        <tr>
          <td>9</td>
          <td className='imagetext_city'><Link to=''><span className='overimage'><img src={require('../img/arsenal-logo-vector.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Arsenal</span></Link></td>
          <td>9</td><td>7</td> <td>0</td><td>2</td><td>19</td><td>7</td> <td>21</td><td>2</td><td>10</td> <td>77.78%</td>
        </tr>
        <tr>
          <td>10</td>
          <td className='imagetext_city'><Link to=''><span className='overimage'><img src={require('../img/arsenal-logo-vector.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Arsenal</span></Link></td>
          <td>9</td><td>7</td> <td>0</td><td>2</td><td>19</td><td>7</td> <td>21</td><td>2</td><td>10</td> <td>77.78%</td>
        </tr>
        <tr>
          <td>11</td>
          <td className='imagetext_city'><Link to=''><span className='overimage'><img src={require('../img/arsenal-logo-vector.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Arsenal</span></Link></td>
          <td>9</td><td>7</td> <td>0</td><td>2</td><td>19</td><td>7</td> <td>21</td><td>2</td><td>10</td> <td>77.78%</td>
        </tr>
        <tr>
          <td>12</td>
          <td className='imagetext_city'><Link to=''><span className='overimage'><img src={require('../img/arsenal-logo-vector.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Arsenal</span></Link></td>
          <td>9</td><td>7</td> <td>0</td><td>2</td><td>19</td><td>7</td> <td>21</td><td>2</td><td>10</td> <td>77.78%</td>
        </tr>
        <tr>
          <td>13</td>
          <td className='imagetext_city'><Link to=''><span className='overimage'><img src={require('../img/arsenal-logo-vector.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Arsenal</span></Link></td>
          <td>9</td><td>7</td> <td>0</td><td>2</td><td>19</td><td>7</td> <td>21</td><td>2</td><td>10</td> <td>77.78%</td>
        </tr>
        <tr>
          <td>14</td>
          <td className='imagetext_city'><Link to=''><span className='overimage'><img src={require('../img/arsenal-logo-vector.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Arsenal</span></Link></td>
          <td>9</td><td>7</td> <td>0</td><td>2</td><td>19</td><td>7</td> <td>21</td><td>2</td><td>10</td> <td>77.78%</td>
        </tr>
        <tr>
          <td>15</td>
          <td className='imagetext_city'><Link to=''><span className='overimage'><img src={require('../img/arsenal-logo-vector.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Arsenal</span></Link></td>
          <td>9</td><td>7</td> <td>0</td><td>2</td><td>19</td><td>7</td> <td>21</td><td>2</td><td>10</td> <td>77.78%</td>
        </tr>
        <tr>
          <td>16</td>
          <td className='imagetext_city'><Link to=''><span className='overimage'><img src={require('../img/arsenal-logo-vector.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Arsenal</span></Link></td>
          <td>9</td><td>7</td> <td>0</td><td>2</td><td>19</td><td>7</td> <td>21</td><td>2</td><td>10</td> <td>77.78%</td>
        </tr>
        <tr>
          <td>17</td>
          <td className='imagetext_city'><Link to=''><span className='overimage'><img src={require('../img/arsenal-logo-vector.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Arsenal</span></Link></td>
          <td>9</td><td>7</td> <td>0</td><td>2</td><td>19</td><td>7</td> <td>21</td><td>2</td><td>10</td> <td>77.78%</td>
        </tr>
        <tr>
          <td>18</td>
          <td className='imagetext_city'><Link to=''><span className='overimage'><img src={require('../img/arsenal-logo-vector.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Arsenal</span></Link></td>
          <td>9</td><td>7</td> <td>0</td><td>2</td><td>19</td><td>7</td> <td>21</td><td>2</td><td>10</td> <td>77.78%</td>
        </tr>
        <tr>
          <td>19</td>
          <td className='imagetext_city'><Link to=''><span className='overimage'><img src={require('../img/arsenal-logo-vector.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Arsenal</span></Link></td>
          <td>9</td><td>7</td> <td>0</td><td>2</td><td>19</td><td>7</td> <td>21</td><td>2</td><td>10</td> <td>77.78%</td>
        </tr>
        <tr>
          <td>20</td>
          <td className='imagetext_city'><Link to=''><span className='overimage'><img src={require('../img/arsenal-logo-vector.png')} alt="earth" className="logo-rearth-table"/></span> <span className='toearth'>Arsenal</span></Link></td>
          <td>9</td><td>7</td> <td>0</td><td>2</td><td>19</td><td>7</td> <td>21</td><td>2</td><td>10</td> <td>77.78%</td>
        </tr>
        <tr class="filter-fir">
       <td colspan="4"><div class="team-btn compare-link"> <Link to="">Compare Now</Link> </div>
       
       </td>
      <td colspan="9">
      <div class="inside-footer"> 
      <ul className='in-footer '>
        <li><p>League <br/>Overall</p></li>
        <li><h6><span>3.03</span> <br/>GS/G</h6></li>
        <li><h6><span>39% </span><br/>WIN%</h6></li>
        <li><h6><span>6.43 </span><br/>Points Stdev</h6></li>
      </ul>

       </div>
      </td>
     </tr>
       
       
      </tbody>
    </Table>

    

        </div>
  </div>
  )
}
