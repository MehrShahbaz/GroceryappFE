# Getting Started with Dynamic Dashboard

## Available Scripts

In the project directory, you can run:

### `yarn`

To install required packages

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Usage

The Dashboard component accepts an array of widgets as its data input which is intialized in `src/init/init`.

Each widget object should have the following properties:

- id: The unique identifier of the widget.
- title: The title or label of the widget. (optional)
- priority: The priority value of the widget. Widgets with lower priority values will be rendered first.
- WidgetType: The type of the widget. Possible values are defined in the WidgetTypes enum.
- position: An object specifying the row and column position of the widget.

#### Widget Types

- PIE_CHART
- CHART_LINE
- BAR_CHART
- SWARM_PLOT
- RADIAL_BAR
- CHORD_CHART
- PROGRESS_BAR
- DESCRIPTION_CARD

#### Position

The Position attribute accepts an object each object should have the following properties:

- row (number)
- col (number)

## Libraries Used

The Dashboard Component utilizes the following libraries:

- **@nivo/bar** (version 0.83.0): A powerful and customizable bar chart library for React.
- **@nivo/chord** (version 0.83.0): A React library for creating chord diagrams.
- **@nivo/core** (version 0.83.0): Core components and utilities used by the Nivo libraries.
- **@nivo/line** (version 0.83.0): A React library for creating line charts.
- **@nivo/pie** (version 0.83.0): A React library for creating pie charts.
- **@nivo/radial-bar** (version 0.83.0): A React library for creating radial bar charts.
- **@nivo/swarmplot** (version 0.83.0): A React library for creating swarm plots.
- **react-bootstrap** (version 2.7.4): Bootstrap components built with React.

Linting Dependencies:

- **eslint-config-prettier** (version 8.8.0): ESLint configuration for Prettier integration.
- **eslint-plugin-prettier** (version 4.2.1): ESLint plugin for Prettier formatting.
- **eslint-plugin-simple-import-sort** (version 10.0.0): ESLint plugin for sorting imports.
- **prettier** (version 2.8.8): Opinionated code formatter to enforce consistent code style.
