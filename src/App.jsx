import { useState } from 'react'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'


function App() {
    const entryElements = data.map(function(data) {
        return <Entry
            key={data.id}
            data={data}
        />

    })
    return (
        <>
            <Header />
            {entryElements}
        </>
    )
}

export default App
