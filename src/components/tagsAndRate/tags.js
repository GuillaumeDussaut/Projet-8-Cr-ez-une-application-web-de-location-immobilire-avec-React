import './tagsAndRate.scss';
import dataJson from '../data.json';

export default function Tags(){
    const data = dataJson;
    return(
        <>
<div className="tags">
  {tags.map((tag) => (
    <div className="tag" key={tag}>
      {tag}
    </div>
  ))}
</div>

        </>
    );
}