/*
    import from:
    - 타 모듈에서 export 한 대상을 로드
    - 타 모듈에서 export 내보내면 {}를 사용하여 import를 사용 하여야 하고, 동일한 이름으로 해야 함
    - 타 모듈에서 export default로 내보내면 {} 없이 import 를 사용 하여야 하고, 내보낸 이름과 받아오는 이름이 같지 않아도 사용 가능
*/
import { exportVariable, exportFunction, exportClass } from './module.mjs';
console.log(exportVariable);

import defaultVariable from './module.mjs';
console.log(defaultVariable);

/*
    - as 키워드의 export로 내보낸 대상의 이름을 변경하여 사용할 수 있음
*/
import { exportVariable as ev } from './module.mjs';
console.log(ev);

/*
    - 타 모듈의 모든 대상을 한번에 받을 때는 * 키워드 사용해서 가져올 수 있음
    - 
*/
import * as md from './module.mjs';
console.log(md.exportVariable);
console.log(md.default);

/*
    - 모듈의 이름이 index 이면 해당 모듈의 폴더명으로 import 가능
*/

import { indexExport } from './folder';
console.log(indexExport);


