import React from 'react'

const SingleChat = () => {

    return (
        <>
            <tr>
                    <td width={70} className='py-3 ps-2'>
                        <img width={70} src='./assets/images/profile.png' className='img-fluid' />
                    </td>
                    <td className='pt-3 align-middle w-700'>
                        Dotdotdot
                        <br />
                        
                            <p className='py-1 ps-0 w-400'>Hey Bro, sick NFT
                            
                            <span className='w-400 recent-news funge-color float-end '>.1 day ago</span>
                            </p>
                    </td>
                </tr>
        </>
    )
}

export default SingleChat;