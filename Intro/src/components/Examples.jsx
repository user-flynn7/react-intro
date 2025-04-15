import { useState } from "react";

// Data
import { EXAMPLES } from "../data";

// Components
import Section from "./Section";
import TabButton from "./TabButton/TabButton";
import Tabs from "./Tabs";

export default function Examples() {
	const [selectedTopic, setSelectedTopic] = useState();

	function handleClick(selectedButton) {
		setSelectedTopic(selectedButton);
	}

	return (
		<Section id="examples" title="Exmples">
			<Tabs
				ButtonsContainer="menu"
				buttons={
					<>
						<TabButton
							isSelected={selectedTopic === "components"}
							onClick={() => handleClick("components")}
						>
							Components
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "jsx"}
							onClick={() => handleClick("jsx")}
						>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "props"}
							onClick={() => handleClick("props")}
						>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "state"}
							onClick={() => handleClick("state")}
						>
							State
						</TabButton>
					</>
				}
			>
				{!selectedTopic && <p>Please Select A Topic</p>}
				{selectedTopic && (
					<div id="tab-content">
						<h3>{EXAMPLES[selectedTopic].title}</h3>
						<p>{EXAMPLES[selectedTopic].description}</p>
						<pre>{EXAMPLES[selectedTopic].code}</pre>
					</div>
				)}
			</Tabs>
		</Section>
	);
}
