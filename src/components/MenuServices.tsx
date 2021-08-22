import logotipoServices from'../assets/imagens/logotipo-service-1@1x.png'
import '../styles/MenuServices.scss'



export function MenuServices() {
    return (
<div>
				<ul className="nav">
                <div className="logo">
                        <img src={logotipoServices} width="200"/>
                    </div>
                    <div>
                    <li className="nav-item slam-left"><a href="#">Brand</a></li>
                    <li className="nav-item slam-left"><a href="#">Brand</a></li>
                    <li className="nav-item slam-left"><a href="#">Brand</a></li>
                    <li className="nav-item slam-left"><a href="#">Brand</a></li>
                    <li className="nav-item slam-left"><a href="#">Brand</a></li>
                    </div>
					
					<li className="nav-item"><a href="#">Home</a></li>
					
				</ul>
			</div>
			
		);
	}


        

export default MenuServices
