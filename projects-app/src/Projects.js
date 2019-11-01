import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Projects() {
    const [projects, setProjects] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:4000/api/project`)
             .then(res => {
                 setProjects(res.data);
                 console.log(res)
             }).catch(err => console.log(err))
    }, [])

    return(
        <div>
            {
                projects.length>0 ?
                    projects.map(project => (
                        <div>
                            <h4>{project.name}</h4>
                            <p style={{'color':'#09d3ac'}}>{project.description}</p>
                            <h4>{project.completed}</h4>
                        </div>
                    ))
                :
                'No Projects Found'
            }
        </div>
    )
}