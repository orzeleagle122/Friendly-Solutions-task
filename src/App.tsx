import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {data} from "./data/data";
import {getWorkOrderData} from "./redux/slices/workOrderSlices";
import './App.css';

function App() {

    const workOrder = useAppSelector(state => state.workOrder);
    const dispatch = useAppDispatch();

    useEffect(() => {
        data()
            .then(res => {
                const {response: {data}}: any = res;
                dispatch(getWorkOrderData(data));
            })
            .catch(err => console.log(err))
    }, [])

    console.log(workOrder)

    return (
        <div className="App">
            <div className={`content`}>
                <h1>List of Work Order</h1>
                <div className={`table-wrapper`}>
                    {workOrder?.map(i => (
                        // @ts-ignore
                        <div key={i.work_order_id} className={`table-item`}>
                            <div className={`table-item-time`}>
                                <div className={`table-item-time-id`}>
                                    {/*@ts-ignore*/}
                                    {i.work_order_id}
                                </div>
                                <div className={`table-item-time-date`}>

                                    {/*@ts-ignore*/}
                                    {i.received_date}
                                </div>
                            </div>
                            <div className={`table-item-assigned`}>
                                {/*@ts-ignore*/}
                                {i.assigned_to?.map(i => i.person_name)}
                            </div>
                            <div className={`table-item-desc`}>
                                {/*@ts-ignore*/}
                                {i.description}
                            </div>
                            <div className={`table-item-other`}>
                                <div className={`table-item-other-status`}>
                                    {/*@ts-ignore*/}
                                    {i.status}
                                </div>
                                <div className={`table-item-other-priority`}>
                                    {/*@ts-ignore*/}
                                    {i.priority}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default App;
