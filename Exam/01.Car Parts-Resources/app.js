window.addEventListener('load', solve);



function solve() {
        const modelInput = document.getElementById("car-model");
        const caryearInput = document.getElementById("car-year");
        const partnameInput = document.getElementById("part-name");
        const partnumberInput = document.getElementById("part-number");
        const condition = document.getElementById("condition");

        document.getElementById("next-btn").addEventListener('click', nextStep);

        function nextStep(e) {
                e.preventDefault();

                const modelInputValue = modelInput.value;
                const caryearInputValue = caryearInput.value;
                const partnameInputValue = partnameInput.value;
                const partnumberInputValue = partnumberInput.value;
                const conditionValue = condition.value;

                if (modelInputValue !== '' && caryearInputValue >= 1980 && caryearInputValue <= 2023 && partnameInputValue !== '' && partnameInputValue !== '' && condition !== '') {
                        const infoList = document.querySelector('.info-list');
                        const listItem = document.createElement('li');
                        listItem.classList.add("part-content")
                        const articleItem = document.createElement('article')

                        const pElementCarModel = document.createElement('p');
                        const pElementCarYear = document.createElement('p');
                        const pElementPartName = document.createElement('p');
                        const pElementPartNumber = document.createElement('p');
                        const pElementCondition = document.createElement('p');

                        pElementCarModel.textContent = `Car Model: ${modelInputValue}`
                        pElementCarYear.textContent = `Car Year: ${caryearInputValue}`
                        pElementPartName.textContent = `Part Name: ${partnameInputValue}`
                        pElementPartNumber.textContent = `Part Number: ${partnumberInputValue}`
                        pElementCondition.textContent = `Condition: ${conditionValue}`

                        articleItem.appendChild(pElementCarModel);
                        articleItem.appendChild(pElementCarYear);
                        articleItem.appendChild(pElementPartName);
                        articleItem.appendChild(pElementPartNumber);
                        articleItem.appendChild(pElementCondition);

                        listItem.appendChild(articleItem);


                        document.getElementById("car-model").value = '';
                        document.getElementById("car-year").value = '';
                        document.getElementById("part-name").value = '';
                        document.getElementById("part-number").value = '';
                        document.getElementById("condition").value = '';

                        const editButton = document.createElement("button")
                        const continueButton = document.createElement("button")

                        editButton.textContent = "Edit"
                        continueButton.textContent = "Continue"

                        editButton.classList.add("edit-btn")
                        continueButton.classList.add("continue-btn")

                        document.getElementById('complete-img').style.visibility = "hidden"
                        document.getElementById('complete-text').textContent = '';


                        listItem.appendChild(editButton);
                        listItem.appendChild(continueButton);
                        infoList.appendChild(listItem);


                        document.getElementById('next-btn').disabled = true;

                        editButton.addEventListener("click", (e) => {
                                e.preventDefault();


                                document.getElementById("car-model").value = modelInputValue;
                                document.getElementById("car-year").value = caryearInputValue;
                                document.getElementById("part-name").value = partnameInputValue;
                                document.getElementById("part-number").value = partnumberInputValue;
                                document.getElementById("condition").value = conditionValue;

                                document.getElementById('next-btn').disabled = false;
                                listItem.remove()
                        })

                        continueButton.addEventListener("click", (e) => {
                                e.preventDefault();
                                listItem.remove()

                                const confList = document.querySelector(".confirm-list");
                                
                                const listItem2 = document.createElement('li');

                                listItem2.classList.add("part-content")
                                const articleItem = document.createElement('article')

                                const pElementCarModel = document.createElement('p');
                                const pElementCarYear = document.createElement('p');
                                const pElementPartName = document.createElement('p');
                                const pElementPartNumber = document.createElement('p');
                                const pElementCondition = document.createElement('p');

                                pElementCarModel.textContent = `Car Model: ${modelInputValue}`
                                pElementCarYear.textContent = `Car Year: ${caryearInputValue}`
                                pElementPartName.textContent = `Part Name: ${partnameInputValue}`
                                pElementPartNumber.textContent = `Part Number: ${partnumberInputValue}`
                                pElementCondition.textContent = `Condition: ${conditionValue}`

                                articleItem.appendChild(pElementCarModel);
                                articleItem.appendChild(pElementCarYear);
                                articleItem.appendChild(pElementPartName);
                                articleItem.appendChild(pElementPartNumber);
                                articleItem.appendChild(pElementCondition);

                                const confirmButton = document.createElement("button")
                                const cancelButton = document.createElement("button")

                                confirmButton.textContent = "Confirm"
                                cancelButton.textContent = "Cancel"

                                confirmButton.classList.add("confirm-btn")
                                cancelButton.classList.add("cancel-btn")


                               


                                listItem2.appendChild(articleItem);

                                listItem2.appendChild(confirmButton);
                                listItem2.appendChild(cancelButton);
                                
                                confList.appendChild(listItem2);



                              

                                cancelButton.addEventListener("click", (e) => {
                                        e.preventDefault()
                                        listItem2.remove()

                                        document.getElementById('next-btn').disabled = false;
                                })

                                confirmButton.addEventListener("click", (e) => {
                                        e.preventDefault()
                                        listItem2.remove()

                                        document.getElementById('next-btn').disabled = false;
                                        document.getElementById('complete-img').style.visibility = "visible"
                                        document.getElementById('complete-text').textContent = 'Part is Ordered!';

                                })

                        })

       




                }
        }

};




