import { FancyButton } from '../components/ui/Button';
import GridCell from '../components/ui/GridCell';

const Home = () => {

	return (
		<main className="flex flex-col items-center gap-y-10 text-xl font-medium">
			<GridCell>
				<img src="svgs/Avatar.svg" alt="Avatar" className="w-20" />

				<div className="space-y-5">
					<p>
						<span className="text-secondary-100">Hi, I'm Çetin.</span> I
						am a web developer and I build cool websites like this one.
					</p>
					<FancyButton className="w-32" offsetPosition="top-left">
						CV
					</FancyButton>
				</div>
			</GridCell>
		</main>
	);
};

export default Home;
