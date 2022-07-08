import React from 'react'
import '../component_css/card.css'
const image_text = [
    {
        id: 1,
        title: "Volunteering",
        image: "https://images.unsplash.com/photo-1473649085228-583485e6e4d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        text: "We volunteer in giving time and labour for community service. Many volunteers are specifically trained in the areas they work, such as medicine, education, or emergency rescue.Others serve on an as- needed basis, such as in response to a natural disaster.",
        read: "Read More",
        alt: "Volunteering"
    },
    {
        id: 2,
        title: "Fundraising",
        image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text: "We prsue and collect the free will financial contributions by interesting individuals, businesses, charitable trusts, or federal authorities for them who needs the most.",
        read: "Read More",
        alt: "Fundraising"
    },
    {
        id: 3,
        title: "HELP CHARITY",
        image: "https://images.unsplash.com/photo-1644726270363-e746b37b482b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text: "The act of helping others, donating to charity, or volunteering your time, will give you an improved sense of wellbeing.The knowledge that you've sacrificed time and/or money in order to help others in need or create positive change in the world is a beautiful thing.",
        read: "Read More",
        alt: "HELP CHARITY"
    }
];

function Card() {
    return (
        <>
            <h1 className='top' id='about'>Reason of Helping</h1>
            <div className="map">

                {
                    image_text.map((item, index) => {
                        return (
                            <div className="card" key={index}>
                                <div className="card__image">
                                    <img className='img_name' src={item.image} alt={item.alt} />
                                </div>
                                <div className="card__copy">
                                    <h1>{item.title}</h1>
                                    <p>{item.text}</p>
                                    <button className='btn'>{item.read}</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>

    )
}

export default Card