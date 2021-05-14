import React from 'react'
import { NotionRenderer, Collection, CollectionRow, Code } from 'react-notion-x'

import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism.css'
import 'rc-dropdown/assets/index.css'
import 'katex/dist/katex.min.css'

const mapPageUrl = id => {
  return 'https://www.notion.so/' + id.replace(/-/g, '')
}

// eslint-disable-next-line react/prop-types
const Notion = ({ recordMap }) => (
  <NotionRenderer
    recordMap={recordMap}
    fullPage={false}
    darkMode={false}
    components={{
      collection: Collection,
      collectionRow: CollectionRow,
      code: Code
    }}
    mapPageUrl={mapPageUrl}
  />
)

export default Notion
