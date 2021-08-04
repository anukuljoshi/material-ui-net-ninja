import { Typography, Button, Container } from "@material-ui/core";

import { AcUnitOutlined, Send, KeyboardArrowRight } from '@material-ui/icons'

const Create = () => {
	return (
		<Container>
			<Typography
				variant="h5"
				component="h2"
				color="textSecondary"
				gutterBottom
			>
				Create a New Node
			</Typography>

			<Button
				onClick={() => console.log('Button clicked')}
				type="submit"
				color="secondary"
				variant="contained"
				endIcon={<KeyboardArrowRight></KeyboardArrowRight>}
			>
				Submit
			</Button>

			{/* icons */}
			{/* <br />
			<AcUnitOutlined fontSize="small"></AcUnitOutlined>
			<AcUnitOutlined></AcUnitOutlined>
			<AcUnitOutlined color="secondary" fontSize="large"></AcUnitOutlined>

			<br />
			
			<AcUnitOutlined color="action"></AcUnitOutlined>
			<AcUnitOutlined color="disabled"></AcUnitOutlined>
			<AcUnitOutlined color="error"></AcUnitOutlined>
			<AcUnitOutlined color="primary"></AcUnitOutlined>
			<AcUnitOutlined color="secondary"></AcUnitOutlined>
			 */}
		</Container>
	);
};

export default Create;
