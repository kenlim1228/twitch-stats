import React from 'react';
import './App.css';
import { ResponsiveCalendar } from '@nivo/calendar';
import data2016 from './data/2016.json';
import data2017 from './data/2017.json';
import data2018 from './data/2018.json';
import data2019 from './data/2019.json';

class App extends React.Component {
    renderTooltip(data) {
        return (
            <div>
                <table className="tooltip-table">
                    <tbody>
                        <tr>
                            <td className="text-align-right">Day:</td>
                            <td className="text-align-right" style={{ width: '125px' }}>
                                {data.date.toDateString()}
                            </td>
                        </tr>
                        <tr>
                            <td className="text-align-right">Max Viewers:</td>
                            <td className="text-align-right">{data.value}</td>
                        </tr>
                        <tr>
                            <td className="text-align-right">Avg Viewers:</td>
                            <td className="text-align-right">{data.data.avgviewers}</td>
                        </tr>
                        <tr>
                            <td className="text-align-right">Games:</td>
                            <td className="text-align-right">{data.data.gamesplayed}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        let builtData = [];
        data2016.data.forEach((element) => {
            const games = element.gamesplayed;
            const gamesSplit = games.split('|');
            let gamesPlayed = [];
            for (let i = 0; i < gamesSplit.length; i = i + 3) {
                gamesPlayed.push(gamesSplit[i]);
            }
            builtData.push({
                day: new Date(element.startDateTime).toISOString().slice(0, 10),
                value: element.maxviewers,
                avgviewers: element.avgviewers,
                gamesplayed: gamesPlayed.join(', ')
            });
        });
        data2017.data.forEach((element) => {
            const games = element.gamesplayed;
            const gamesSplit = games.split('|');
            let gamesPlayed = [];
            for (let i = 0; i < gamesSplit.length; i = i + 3) {
                gamesPlayed.push(gamesSplit[i]);
            }
            builtData.push({
                day: new Date(element.startDateTime).toISOString().slice(0, 10),
                value: element.maxviewers,
                avgviewers: element.avgviewers,
                gamesplayed: gamesPlayed.join(', ')
            });
        });
        data2018.data.forEach((element) => {
            const games = element.gamesplayed;
            const gamesSplit = games.split('|');
            let gamesPlayed = [];
            for (let i = 0; i < gamesSplit.length; i = i + 3) {
                gamesPlayed.push(gamesSplit[i]);
            }
            builtData.push({
                day: new Date(element.startDateTime).toISOString().slice(0, 10),
                value: element.maxviewers,
                avgviewers: element.avgviewers,
                gamesplayed: gamesPlayed.join(', ')
            });
        });
        data2019.data.forEach((element) => {
            const games = element.gamesplayed;
            const gamesSplit = games.split('|');
            let gamesPlayed = [];
            for (let i = 0; i < gamesSplit.length; i = i + 3) {
                gamesPlayed.push(gamesSplit[i]);
            }
            builtData.push({
                day: new Date(element.startDateTime).toISOString().slice(0, 10),
                value: element.maxviewers,
                avgviewers: element.avgviewers,
                gamesplayed: gamesPlayed.join(', ')
            });
        });
        return (
            <div style={{ height: 'calc(100% - 50px)' }}>
                <ResponsiveCalendar
                    data={builtData}
                    from="2016-08-01"
                    to="2019-12-31"
                    emptyColor="#eeeeee"
                    colors={[ '#f47560', '#e8c1a0', '#97e3d5', '#61cdbb' ]}
                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                    yearSpacing={40}
                    monthBorderColor="#ffffff"
                    dayBorderWidth={2}
                    dayBorderColor="#ffffff"
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'row',
                            translateY: 36,
                            itemCount: 4,
                            itemWidth: 42,
                            itemHeight: 36,
                            itemsSpacing: 14,
                            itemDirection: 'right-to-left'
                        }
                    ]}
                    tooltip={this.renderTooltip}
                    minValue={2}
                    maxValue={15}
                />
            </div>
        );
    }
}
export default App;
