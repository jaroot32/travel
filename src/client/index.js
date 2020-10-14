import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { entry } from './js/entry'
import { clearEntries } from './js/clearEntries'
import { displayEntries } from './js/displayEntries'
import { poster } from './js/async-post';
import { getter } from './js/async-get';
import { cityHandler } from './js/cityHandler';
import { cityEntry } from './js/cityEntry';
import { cityPixabayEntry } from './js/cityPixabayEntry';

import './styles/main.scss'

export {
    checkForName,
    handleSubmit,
    entry,
    clearEntries,
    displayEntries,
    poster,
    getter,
    cityHandler,
    cityEntry,
    cityPixabayEntry
}
