
const TaskCard = ({task}) => {
    const {title, description, category, timestamp} = task;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>Category: <i>{category}</i></p>
                    <p><span>Creation time: </span>{timestamp}</p>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;