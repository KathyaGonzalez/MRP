import dynamic from "next/dynamic"
import styles from '@/styles/custom-tree.module.css'
import { useCenteredTree } from "./helpers"

const Tree = dynamic(() => import("react-d3-tree"), {
    ssr: false,
}
)

export default function Arbol(props) {
    const { data } = props;
    const [translate, containerRef] = useCenteredTree();

    return (
        <div className={styles.container} ref={containerRef}>
            <Tree
                data={data} orientation="vertical"
                rootNodeClassName={styles.node__root}
                branchNodeClassName={styles.node__branch}
                leafNodeClassName={styles.node__leaf}
                translate={translate}
                nodeSize={{ x: 150, y: 100 }}
            />
        </div>
    )
}