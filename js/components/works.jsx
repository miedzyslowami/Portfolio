import React from 'react';
import ReactDOM from 'react-dom';
import scss from '../../scss/components/works.scss';
import workLinks from '../data/links.js';

export class Works extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            skills:['css','sass','gulp','webpack','jquery','javascript','api','ajax','firebase','rwd','facebook-auth','svg','react'],
            works:workLinks,
            filteredWorks:workLinks,
            currentTags:[]
        }
    }
    clearFilter = (e) =>{
        this.setState({filteredWorks:this.state.works,currentTags:[]});

    }
    filterGrid = (e) =>{
        let currentTags = this.state.currentTags;
        currentTags.push(e.target.dataset.tag);
        let currentWorks = Object.values(this.state.filteredWorks);
        let newFilteredWorks = currentWorks.filter((work,i,currentWorks)=>{
                return work.tags.indexOf(e.target.dataset.tag)>=0;
        });
        this.setState({filteredWorks:newFilteredWorks,currentTags:currentTags});
    }
    render() {
          let links = this.state.filteredWorks.map((work,i)=>{
            return (
                <li key={i} data-tags={work.tags} className={scss.work}>
                  <div className={scss.work__in}>
                    <a className={scss.work__link} href={work.url}>
                      <img src={work.imageUrl} alt={work.alt} />
                      <h3>{work.title}</h3>
                      <p>{work.description}</p>
                    </a>
                  </div>
                </li>
                )
          });
          let skills = this.state.skills.map((skill,i)=>{
              let active = '';
              this.state.currentTags.indexOf(skill)>=0
              ? active = '__active'
              : null
              return (<li onClick={this.filterGrid} data-tag={skill} className={scss[`skill__button${active}`]} key={i}>#{skill}</li>)
          })
        return (
            <section name='Works' id={scss.works}>
                    <h2>Take a look at my works!</h2>
                    <div id={scss.works__search}>
                    <ul><h3>Pick a tag to find a skill that you want to check.</h3>
                        {skills}
                    </ul>
                    <div onClick={this.clearFilter} id={scss.clear__filter}>Clear</div>
                    </div>
                    <ul id={scss.work_links}>
                         {links}
                    </ul>
            </section>
        )
    }
}
export default Works;
