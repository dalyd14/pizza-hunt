const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const replySchema = new Schema(
    {
        replyId: {
            type: Schema.Types.ObjectId,
            deafult: () => new Types.ObjectId()
        },
        replyBody: {
            type: String,
            require: true
        },
        writtenBy: {
            type: String,
            require: true
        }, 
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

const commentSchema = new Schema(
    {
        writtenBy: {
            type: String,
            require: true
        },
        commentBody: {
            type: String,
            require: true
        },
        replies: [replySchema],
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

commentSchema.virtual('replyCount').get(function() {
    return this.replies.length;
})

const Comment = model('Comment', commentSchema)

module.exports = Comment