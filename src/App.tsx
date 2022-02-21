import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {data} from "./api/data";
import {getWorkOrderData} from "./redux/slices/workOrderSlices";
import './App.css';
import {GiConfirmed, GiCancel} from "react-icons/gi";
import {MdOutlineWavingHand} from "react-icons/md";
import {GrCompliance} from "react-icons/gr";

const setStatus = (status: string) => {
    if (status === "New") return <MdOutlineWavingHand/>
    if (status === "Confirmed") return <GiConfirmed/>
    if (status === "Canceled") return <GiCancel/>
    if (status === "Completed") return <GrCompliance/>
}

function App() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [inputSearchValue, setInputSearchValue] = useState<string>("");
    const workOrder = useAppSelector(state => state.workOrder);
    const dispatch = useAppDispatch();

    const filteredTaskByDesc = workOrder.filter((item) => item.description.toLowerCase().includes(inputSearchValue.toLowerCase()));


    useEffect(() => {
        data()
            .then((res) => {
                const {data} = res.response;
                dispatch(getWorkOrderData(data));
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }, []);

    return (
        <div className="App">
            <div className="content">
                <h1>List of Work Order</h1>
                <input
                    placeholder="Search a task by description..."
                    value={inputSearchValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setInputSearchValue(e.target.value);
                    }}
                />
                <div className="table-wrapper">
                    {isLoading ? "Loading tasks..." : filteredTaskByDesc?.map(i => (
                        <div key={i.work_order_id} className={`table-item ${i.status}`}>
                            <div className="table-item-time">
                                <div className="table-item-time-id">
                                    <p className="badge">
                                        {i.work_order_id}
                                    </p>
                                </div>
                                <div className="table-item-time-date">
                                    {i.received_date}
                                </div>
                            </div>
                            <div className="table-item-assigned">
                                {i.assigned_to?.map(i => i.person_name)}
                            </div>
                            <div className="table-item-desc">
                                {i.description}
                            </div>
                            <div className="table-item-other">
                                <div className="table-item-other-status">
                                    {setStatus(i.status)} {i.status}
                                </div>
                                <div className="table-item-other-priority">
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
