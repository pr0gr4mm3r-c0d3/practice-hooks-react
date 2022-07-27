import './App.css';
import { HeaderComponent } from '@/modules/shared/components/HeaderComponent';

import {
	FormComponent,
	FormComponentWithCustomHook,
	CallbackHookComponent,
	CounterComponent,
	CounterComponentWithCustomHooks,
	MemoHookComponent,
	MemorizeComponent,
	QuotesApp,
	FatherComponent,
} from '@/hooks';

function App() {
	return (
		<>
			<HeaderComponent />

			<article>
				<h2>useState Hooks</h2>

				<CounterComponent />
			</article>

			<hr />

			<article>
				<h2>useState Hooks =={'>'} Custom Hooks</h2>

				<CounterComponentWithCustomHooks />
			</article>

			<hr />

			<article>
				<h2>useEffect Hook: SimpleForm App</h2>

				<FormComponent />
			</article>

			<hr />
			<article>
				<FormComponentWithCustomHook />
			</article>

			<hr />
			<article>
				<QuotesApp />
			</article>

			<hr />
			<article>
				<MemorizeComponent />
			</article>

			<hr />
			<article>
				<MemoHookComponent />
			</article>

			<hr />
			<article>
				<CallbackHookComponent />
			</article>

			<hr />
			<article>
				<FatherComponent />
			</article>
		</>
	);
}

export default App;
