import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { PathHandlerMap } from 'path-handler-map';
import { Layout,Input, Collapse, Card, Tree, Button, Tooltip } from 'antd';
import { githubRoutes } from './data';
const { TextArea, Search } = Input;
const { Content } = Layout;
const { Panel } = Collapse;

function App() {
  const [routesTxt, setRoutesTxt] = useState(githubRoutes);
  const [searchRouteTxt, setSearchRouteText] = useState('/repos/jkeylu/trie-demo/readme');
  const [pathMap, setPathMap] = useState(null);
  const [treeData, setTreeData] = useState([]);
  const [expandedKeys, setExpandedKeys] = useState([]);


  function buildTireTree() {
    const m = new PathHandlerMap();
    routesTxt.replace('\r', '\n').split('\n').forEach(row => {
      row = row.trim();
      if (!row) {
        return;
      }

      const [method, path] = row.split(' ');
      m.add(path, method, () => row);
    });
    setPathMap(m);
    console.log(m);

    const tree = convertNode(m.tree);
    setTreeData([tree]);
    console.log(tree);
  }

  function convertNode(oldNode, paths, i) {
    const newNode = {
      title: oldNode.prefix,
      key: oldNode.signature
    }

    const labels = Object.keys(oldNode.children);
    if (labels.length) {
      newNode.children = [];

      labels.forEach(key => {
        const node = convertNode(oldNode.children[key], paths, i + 1);
        newNode.children.push(node);
      });
    }

    let tip = oldNode.signature;
    const methods = Object.keys(oldNode.handlerMap);
    if (methods.length) {
      tip = methods.map(m => <p>{oldNode.handlerMap[m].handler()}</p>);
    }

    let selected = false;
    if (paths && paths.length) {
      const n = paths[i];
      if (n === oldNode) {
        selected = true;
      }
    }

    newNode.title = <Tooltip title={tip} mouseLeaveDelay={0.5}><span style={{backgroundColor: selected ? '#fdf731' : '#fff'}}>{oldNode.prefix}</span></Tooltip>

    return newNode;
  }

  function searchRoute() {
    if (!pathMap) {
      return;
    }
    let node = pathMap.lookupByRealPath(searchRouteTxt);
    const expandedKeys = [node.signature];

    const paths = [node];
    while(node.parent) {
      paths.unshift(node.parent);
      node = node.parent;
    }


    const tree = convertNode(pathMap.tree, paths, 0);
    setTreeData([tree]);

    setExpandedKeys(expandedKeys)
  }

  return (
    <Layout className="App">
      <Content>
        <div style={{ padding: 24, minHeight: 380 }}>
          <Collapse defaultActiveKey={['2']}>
            <Panel header="路由" key="1">
              <TextArea
                value={routesTxt}
                autoSize={{maxRows: 15}}
                onChange={({target: {value}}) => setRoutesTxt(value)}
                ></TextArea>
              <div style={{ marginTop: 10 }}>
                <Button type="primary" onClick={buildTireTree}>生成</Button>
              </div>
            </Panel>
            <Panel header="搜索" key="2">
              <Search
                value={searchRouteTxt}
                enterButton="搜索"
                onChange={({target: {value}}) => setSearchRouteText(value)}
                onSearch={searchRoute}
                ></Search>
            </Panel>
          </Collapse>
          <Card title="前缀树">
            <Tree
              treeData={treeData}
              expandedKeys={expandedKeys}
              autoExpandParent={true}
              onExpand={(expandedKeys) => setExpandedKeys(expandedKeys)}
              ></Tree>
          </Card>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
