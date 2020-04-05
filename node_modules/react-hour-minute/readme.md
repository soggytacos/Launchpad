## react-hour-minute

### Example

```js
import React from 'react'
import { render } from 'react-dom'
import { TimePicker } from 'react-hour-minute'

const App = () => {
  return (
     <div>
      <TimePicker onChange={time => console.log(time)} />
     </div>
  )
}

render(
  <App />,
  document.querySelector('#app')
)
```

### Todo
- Support 12 hour format
- TimeRangePicker
