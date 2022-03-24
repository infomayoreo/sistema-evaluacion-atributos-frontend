import { Link } from "react-router-dom"
import { paths } from "../../../../routers/routerPaths"

export const CollaboratorCardReportPage = (): JSX.Element => {
  return (
		<>
			<div>CollaboratorCardReportPage</div>

			<ul>
				<li>
					<Link to={`/${paths.reportes_tarjeta_detail}/colaborador-1`}>Colaborador 1</Link>
				</li>
				<li>
					<Link to={`/${paths.reportes_tarjeta_detail}/colaborador-2`}>Colaborador 2</Link>
				</li>
				<li>
					<Link to={`/${paths.reportes_tarjeta_detail}/colaborador-3`}>Colaborador 3</Link>
				</li>
			</ul>
		</>
	)
}