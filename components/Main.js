import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCorrectFromApi } from '../store/correctionSlice';
import styles from './Main.module.scss'

function Main() {

    //State
    const [keyword, setKeyword] = useState("");

    //Send action to redux
    const dispatch = useDispatch();
    
    //Get data from redux
    const related = useSelector((state) => state.correct.data)

        //Get loading state
    const isLoading = useSelector((state) => state.correct.loading)

    //Submit function
    function handleSubmit (event) {
    event.preventDefault();
    dispatch(fetchCorrectFromApi(keyword))

    }
    
    //declare constant holding 10 results
    const arrayRelated = related?.associations_array?.slice(0, 10)

    //declare variable to check if the fecth result has entries in it
    const hasProps = !related?.hasOwnProperty('entry') && related?.hasOwnProperty('version')


    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.heading_h1}>FORTHEGRAM</h1>
                <p className={styles.heading_p}>Input a word and get related words (More like synonyms)</p>
                <div className={styles.demo_flex_spacer}></div>

                    <form onSubmit={handleSubmit} className={styles.webflow_style_input}>
                        <input className="" type="text" placeholder="Enter keyword" 
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        />
                        <button type="submit">&#8618;</button>
                    </form>

                {isLoading === true 
                    ? 
                    <div className={`${styles.loader} ${styles.loader_1}`}>
                            <div className={styles.loader_outter}></div>
                            <div className={styles.loader_inner}></div>
                        </div>
                    : 
                    hasProps
                    ?
                    <div className={`${styles.nowords} ${styles.result}`}>
                        <p>Try an actual word. No dey give me headache.</p>
                    </div>
                    :
                    <div className={styles.result}>
                            {arrayRelated?.map((result, i)=>
                                <p key={i}>{result}</p>
                            )}   
                    </div>
                }                

            </div>
        </div>
    )
}

export default Main
