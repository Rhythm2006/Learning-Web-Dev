const style = {width: 400, height:90, backgroundColor: "White", borderColor: "Gray", padding: 20, borderRadius: 40 }
export function Component({name,subtitle,time,image,description}){
  return <div style={style}>
    <div style={{display: "flex",padding: 5}}> 
      <img src={image} style={{height: 40,width: 40, borderRadius: 40, margin: 6}} />
      <div>
        <b>
          {name}
        </b>
        <div>
          {subtitle}
        </div>
        {(time == undefined)?(null):(<div>
          {time}
        </div>)}
      </div>

    </div>
    <div>
      {description}
    </div>
  </div> 
  
  
}