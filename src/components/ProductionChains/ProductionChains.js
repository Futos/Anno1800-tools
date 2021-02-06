import {bauern} from '../../assets/dummy/prductionChain';

function ProductionChain() {
    const printHTML = [];

    const getDataByKey = function(key) {
        let returnRef = null;

        bauern.forEach(function(element) {
            if (element.id === key) {
                returnRef = element;
            }
        });

        return returnRef;
    }

    const getServedObjs = function(key) {
        let returnRefs = [];

        bauern.forEach(function(element) {
            if (element.requires.includes(key)) {
                returnRefs.push(element);
            }
        });

        return returnRefs;
    }

    const roundUp = function(val) {
        return Math.ceil(val);
    }

    bauern.forEach(function(element) {
        let productionHTML = [];
        element.requires.forEach(function (subElement) {
            const referenceObject = getDataByKey(subElement);
            if (referenceObject) {
                const calcRatio = referenceObject.prodDuration / element.prodDuration;
                const roundUpVal = roundUp(calcRatio);
                const roundUpReturn = roundUpVal !== calcRatio && '(' + roundUpVal + ')';

                productionHTML.push(<li>{referenceObject.name}: {calcRatio} {roundUpReturn}</li>);
            }
        });

        let servingHTML = [];
        const referenceObjects = getServedObjs(element.id);
        if (referenceObjects && referenceObjects.length > 0) {
            referenceObjects.forEach(function(subElement) {
                const calcRatio = subElement.prodDuration / element.prodDuration;
                const roundUpVal = roundUp(calcRatio);
                const roundUpReturn = roundUpVal !== calcRatio && '(' + roundUpVal + ')';
                servingHTML.push(<li>{subElement.name}: {calcRatio} {roundUpReturn}</li>);
            });
        }

        printHTML.push(
            <div className="col col-4 mb-4">
                <div className="p-3 bg-secondary rounded">
                    <h3>Name: {element.name}</h3>
                    <div><strong>Zeit:</strong> {element.prodDuration}s</div>
                    <div><strong>Benötigt:</strong><ul>{productionHTML}</ul></div>
                    <div><strong>Versorgt:</strong><ul>{servingHTML}</ul></div>
                </div>
            </div>
        );
    });
    
    return (
        <div className="row">{printHTML}</div>
    );
}

export default ProductionChain;
