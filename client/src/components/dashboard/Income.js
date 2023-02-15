import React, { useState } from 'react';
import Card from '../userinterface/Card';

function Income() {
    const [income, setIncome] = useState(0);

    const handleClick = () => {
        setIncome(income);
    };

    return (
        <Card>
            <div>
                <h1>Income</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="number"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                    />
                    {income && (
                        <div
                            style={{
                                color: 'green',
                                fontSize: '24px',
                                marginLeft: '10px',
                            }}
                        >
                            {income}
                        </div>
                    )}
                </div>
                <button onClick={handleClick}>Set Income</button>
            </div>
        </Card>
    );
}

export default Income;





// import React, { useState } from 'react';
// import Card from '../userinterface/Card';

// function Income() {
//     const [income, setIncome] = useState(0);

//     return (
//         <Card>
//             <div>
//                 <h1>Income</h1>
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                     <input
//                         type="number"
//                         value={income}
//                         onChange={(e) => setIncome(e.target.value)}
//                     />
//                     <div style={{ color: "green", fontSize: "24px", marginLeft: "50px" }}>
//                         {income}
//                     </div>
//                 </div>
//                 <button>Set Income</button>
//             </div>
//         </Card>
//     );
// }

// export default Income;



// import React, { useState } from 'react';
// import Card from '../userinterface/Card'


// function Income() {
//     const [income, setIncome] = useState(0);

//     return (

//         <Card>
//             <div>
//                 <h1>Income</h1>
//                 <input type="number" value={income} onChange={e => setIncome(e.target.value)} />
//                 <button>Set Income</button>
//             </div>
//         </Card>
//     )
// }

// export default Income;

