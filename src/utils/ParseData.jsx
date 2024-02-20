const parseData = (questionsData, stringsData) => {
    const nodes = [];
    const edges = [];

    questionsData.questions.data.forEach(question => {
        const questionStringData = stringsData.questions.data.find(q => q.q === question.questions);
        const questionNode = {
            id: question.questions,
            type: 'question',
            data: {
                label: questionStringData.heading,
                subtitle: questionStringData['sub-head'],
                btnLabel: questionStringData.btn,
                backgroundImage: questionStringData.background,
                footerFragment: questionStringData.footerFragment,
                minSelections: question['min-selections'],
                maxSelections: question['max-selections']
            },
            position: { x: 100, y: 100 }
        };
        nodes.push(questionNode);

        const optionsData = questionsData[question.questions];
        optionsData?.data.forEach(option => {
            const optionStringData = stringsData[option.options] || {};
            const iconUrl = optionStringData.icon || optionStringData['icon-tablet'] || optionStringData['icon-desktop'];

            const optionNode = {
                id: option.options,
                type: 'option',
                data: {
                    label: optionStringData.title || '',
                    text: optionStringData.text || '',
                    image: optionStringData.image || '',
                    icon: iconUrl,
                    next: option.next || '',
                    reset: option.next?.includes('RESET'),
                    result: option.next?.includes('RESULT'),
                },
                position: { x: 300, y: 300 }
            };
            nodes.push(optionNode);

            edges.push({
                id: `e${question.questions}-${option.options}`,
                source: question.questions,
                target: option.options,
                sourceHandle: 'newOption',
                targetHandle: null,
                style: { stroke: 'defaultColor' }
            });

            const nextSteps = option.next.split(',').filter(Boolean);
            nextSteps.forEach(nextStep => {
                if (nextStep.includes('NOT(')) {
                    const target = nextStep.match(/\(([^)]+)\)/)[1];
                    edges.push({
                        id: `e${option.options}-not-${target}`,
                        source: option.options,
                        target: target,
                        sourceHandle: 'not',
                        targetHandle: 'nextQuestion',
                        style: { stroke: 'defaultColor' }
                    });
                } else {
                    edges.push({
                        id: `e${option.options}-${nextStep}`,
                        source: option.options,
                        target: nextStep,
                        sourceHandle: 'nextQuestion',
                        targetHandle: 'nextQuestion',
                        style: { stroke: 'defaultColor' }
                    });
                }
            });
        });
    });

    return { nodes, edges };
};

export default parseData;