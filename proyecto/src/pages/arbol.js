import { useState } from "react"
import dynamic from "next/dynamic"
import styles from '@/styles/custom-tree.module.css'
import { useCenteredTree } from "./helpers"

const Tree = dynamic(() => import("react-d3-tree"), {
    ssr: false,
}
)

export default function arbol() {
    // Estructura de datos
    const [tree, setTree] = useState({
        name: 'Root',
        children: [
            {
                name: 'Child 1',
                children: [
                    {
                        name: 'Child 3'
                    },
                    {
                        name: 'Child 2',
                        children: [
                            {
                                name: 'Child 5'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Child 3'
            }
        ],
    })
    const [translate, containerRef] = useCenteredTree();

    return (
        <div className={styles.container} ref={containerRef}>
            <Tree
                data={tree} orientation="vertical"
                rootNodeClassName={styles.node__root}
                branchNodeClassName={styles.node__branch}
                leafNodeClassName={styles.node__leaf}
                translate={translate}
                nodeSize={{ x: 150, y: 100 }}
            />
        </div>
    )
}