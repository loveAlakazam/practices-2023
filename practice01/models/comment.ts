import { DataTypes, Model } from 'sequelize'
import { sequelize } from './sequelize'
import { dbType } from './index'

class Comment extends Model {
  public readonly id!: number
  public content!: string
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Comment.init(
  {
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Comment',
    tableName: 'comment',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  }
)

export const associate = (db: dbType) => {}

export default Comment
