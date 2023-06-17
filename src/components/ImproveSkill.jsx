import React from 'react'

const ImproveSkill = () => {

    const list =[
        "Learn New recipes",
        "Experiment with Food",
        "Write Your Own recipes",
        "Know nutrition Facts",
        "Get cooking tips",
        "Get ranked"
    ]

    return (
        <div className='section improve-skills'>
            <div className="col img">
                <img src={process.env.PUBLIC_URL+"/images/gallery/img_10.jpg"}alt="my" />
            </div>
            <div className="col typography">
                <h1 className="title">Improve your Skills</h1>
                {
                    list.map((list,index)=>{
                        return(
                            <p className='skill-item' key={index}>{list}</p>
                        )
                    })
                }
                <button className="btn">Sign Up Now</button>
            </div>

        </div>
    )
}

export default ImproveSkill
