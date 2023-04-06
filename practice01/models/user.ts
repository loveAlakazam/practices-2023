import { Model, DataTypes } from 'sequelize'
import { dbType } from './index'
import { sequelize } from './sequelize'

class User extends Model {
  public id!: number //! 반드시 존재
  public nickname!: string
  public userId!: string
  public password!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

User.init(
  {
    nickname: {
      type: DataTypes.STRING(20),
    },
    userId: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  }
)
export const associate = (db: dbType) => {}

export default User
