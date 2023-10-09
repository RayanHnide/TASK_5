
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcone from '@mui/icons-material/Telegram';
import WhatsappIcon from '@mui/icons-material/WhatsApp';

export const OurTeamContent =({name,jop,description,img})=>{
    return(
        <>
        
       
                <div className=" card col-md-3  text-center mx-5 mt-4 shadow " >
                    <div><img style={{borderRadius:'30px',height:'30vh',objectFit:'cover'}} className='w-100 p-3' src={img} alt="" /></div>
                    <h1 className="fw-light">{name}</h1>
                    <h6 style={{color:'gray'}} className="fw-light">{jop}</h6>
                    <p style={{color:'gray'}} >{description}</p>
                      <div className='pb-4'>
                        <FacebookIcon className='mx-2'/>
                        <WhatsappIcon  className='mx-2'/>
                        <TelegramIcone  className='mx-2'/>
                      </div>
                </div>
            
        </>
    )
}