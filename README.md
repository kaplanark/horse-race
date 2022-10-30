<img src="./screenshots/logo.webp">

# Horse Race (protein Frontend Bootcamp Final Case)

## Description

<blockquote>This project is a protein & path.dev final case project.</blockquote>

Real-time race of horses running in 8 different lanes on a straight route. After pressing the start button, the countdown is shown and then the horses start from the starting point to the race. During the run, the speeds within a certain range (eg: min 20 km/h, max 40 km/h) are instantaneously changes randomly. The horse with the highest speed win.

to experience <a href="https://horseracing.netlify.app/">DEMO</a>

## Installation

It is a free and open source project. You can download the project from the link below and use it by downloading it to your computer. You can use it for your personal and commercial projects.

Run the following command in your terminal:

```bash
git clone https://github.com/kaplanark/horse-race.git
```

```bash
cd horse-race
```

```bash
npm install
```

```bash
npm run dev
```

## Basic Logic

The basic logic of the project is as follows:

```js
let raceStatus = 'ready' // ready, started, finished
let horses = [{ lane: 1, name: 'Tucker', travelledDistance: 0, speed: 0, finish: false, scoreTime: 0, color: '#3b302f', run: false },{...}...]
```

```js
raceStatus = "started";
const speedInterval = setInterval(() => {
	horses.map((horse) => {
		horse.speed = Math.floor(Math.random() * (40 - 20) + 20);
		if (!horse.finish) horse.run = true;
	});

	const allFinished = horses.every((horse) => horse.finish);
	if (allFinished) {
		raceStatus = "finished";
		clearInterval(speedInterval);
	}
}, 1000);
```

-  A random chance factor is assigned in the range of 40px/sec - 20px/sec and this is repeated every second until the total path is finished.
-  Horse `run` property is used to determine whether the horse is running or not.
-  It is repeated every second until all horses `finish` property is true.

```js
const travelledDistanceInterval = setInterval(() => {
	horses.map((horse) => {
		if (horse.travelledDistance < raceStore.getLaneLength) {
			horse.scoreTime++;
			horse.travelledDistance += horse.speed;
		} else {
			horse.finish = true;
			horse.run = false;
		}
	});
	const allFinished = horses.every((horse) => horse.finish);
	if (allFinished) clearInterval(travelledDistanceInterval);
}, 100);
```

-  Horse `travelledDistance` property is used to determine the distance travelled by the horse.
-  Horse `scoreTime` property is used to determine the time spent by the horse.
-  Horse `travelledDistance` property is increased by the horse's `speed` property every 100 milliseconds.
-  İf the horse `travelledDistance` property is greater than the total path, the horse `finish` property is set to true.
-  It is repeated every 100ms until all horses `finish` property is true.

#### This whole process is shown to the user with the `margin-left` style attribute for each horse.

# Project Views

<img src="./screenshots/responsive.png"/>

<details>
<summary>Welcome page</summary>
<img src="./screenshots/welcome.webp"/>
</details>

<details>
<summary>Race track page</summary>
<img src="./screenshots/race-track.webp"/>
</details>

<details>
<summary>Introduce page</summary>
<img src="./screenshots/introduce.webp"/>
</details>

<details>
<summary>Not found page</summary>
<img src="./screenshots/not-found.webp"/>
</details>

## Project Details

-  _Welcome page :_ The welcome page is the first page that the user sees when the project is opened.
-  _Introduce page:_ The introduction page is the page where the user is informed about the project.
-  _Race track page:_ It is the focus page of the project. Functionally, it is the page where the race is shown and controlled.
-  _Not found page:_ It is the page that the user sees when the page they want to access does not exist.

# Components

### BaseButton component props

|   Name   |   Type    |   Default   |                                        Description                                        |
| :------: | :-------: | :---------: | :---------------------------------------------------------------------------------------: |
|   name   | `String`  | _'Button'_  | <sub style="color: #999">It takes the name to be displayed in the button component.</sub> |
| variant  | `String`  | _'primary'_ |   <sub style="color: #999">It takes values ​​such as primary, secondary, ternary.</sub>   |
| disabled | `Boolean` |   _false_   |           <sub style="color: #999">It takes values ​​such as true, false.</sub>           |

### Loader component props

|  Name  |   Type    | Default |                            Description                            |
| :----: | :-------: | :-----: | :---------------------------------------------------------------: |
| status | `Boolean` | _false_ | <sub style="color: #999">It takes the status of the loader.</sub> |

### Lane component props

|  Name   |   Type   | Default |                        Description                        |
| :-----: | :------: | :-----: | :-------------------------------------------------------: |
|  horse  | `Object` |  _{}_   | <sub style="color: #999">It takes the horse object.</sub> |
| lane-no | `Number` |   _0_   | <sub style="color: #999">It takes the lane number.</sub>  |

### Marker component props

|   Name   |   Type   | Default |                             Description                             |
| :------: | :------: | :-----: | :-----------------------------------------------------------------: |
| position | `String` | _left_  | <sub style="color: #999">It takes the position of the marker.</sub> |
|   text   | `String` |  _''_   |   <sub style="color: #999">It takes the text of the marker.</sub>   |
|  count   | `Number` |  _''_   |  <sub style="color: #999">It takes the count of the marker.</sub>   |

### Timer component props

| Name |   Type   | Default |                          Description                           |
| :--: | :------: | :-----: | :------------------------------------------------------------: |
| time | `Number` |   _0_   | <sub style="color: #999">It takes the time of the timer.</sub> |

### SettingsDraver component props

| Name |   Type    | Default |                                Description                                 |
| :--: | :-------: | :-----: | :------------------------------------------------------------------------: |
| open | `Boolean` |   _0_   | <sub style="color: #999">It takes the status of the settings drawer.</sub> |

### ColorPicker component props

| Name  |   Type   | Default |                                               Description                                                |
| :---: | :------: | :-----: | :------------------------------------------------------------------------------------------------------: |
| name  | `String` |  _''_   |                  <sub style="color: #999">It takes the name of the color picker.</sub>                   |
| value | `String` |   _0_   | <sub style="color: #999">It takes the color of the color picker. Emited when the color is changed.</sub> |

### BaseSelect component props

|    Name     |   Type   | Default |                                          Description                                          |
| :---------: | :------: | :-----: | :-------------------------------------------------------------------------------------------: |
|    name     | `String` |  _''_   |             <sub style="color: #999">It takes the name of the color picker.</sub>             |
|    value    | `String` |  _''_   | <sub style="color: #999">It takes the color of the color picker. Emited selected value.</sub> |
|   options   | `Array`  |  _[]_   |              <sub style="color: #999">It takes the options of the select.</sub>               |
| placeholder | `String` |  _''_   |            <sub style="color: #999">It takes the placeholder of the select.</sub>             |

### Alert component props

|  Name   |   Type   |  Default  |                               Description                                |
| :-----: | :------: | :-------: | :----------------------------------------------------------------------: |
| variant | `String` | _default_ |    <sub style="color: #999">It takes the variant of the alert.</sub>     |
| message | `String` |   _''_    |    <sub style="color: #999">It takes the message of the alert.</sub>     |
|  index  | `Number` |  _null_   | <sub style="color: #999">It takes the index of the alert. Required</sub> |

### Alert Provider component props

|   Name   |   Type   |   Default   |                            Description                             |
| :------: | :------: | :---------: | :----------------------------------------------------------------: |
| position | `String` | _top-right_ | <sub style="color: #999">It takes the position of the alert.</sub> |

<blockquote>
  <p>Alert Provider component must be used in the root of the project and it must be used only once.</p>
  <p>
  The incoming data is as follows: <br/>
  <code>
  {
	 variant: 'success',
	 message: 'This is a success alert',
	 index: 1
  }
  </code>
  </p>
</blockquote>

## Used Technologies

-  [Vue.js](https://vuejs.org/)
-  [Pinia](https://pinia.vuejs.org/)
-  [Vite](https://vitejs.dev/)
-  [Netlify](https://www.netlify.com/)
-  [Vue Router](https://router.vuejs.org/)
-  [Vitest](https://vitest.dev/)
-  [Vue i18n](https://vue-i18n.intlify.dev/)
-  [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
-  [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
-  [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## License

[MIT](https://choosealicense.com/licenses/mit/) This project is licensed under the MIT License - see the LICENSE.md file for details or click the link.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.Please make sure to update tests as appropriate. Issues are also welcome for any questions or suggestions.

Some great plugins to use to improve your development experience:

-  [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 IntelliSense
-  [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates ESLint JavaScript into VS Code.
-  [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter using prettier
-  [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - EditorConfig for VS Code
-  [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - Automatically rename paired HTML/XML tag
