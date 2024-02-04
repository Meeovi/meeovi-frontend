import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_configWhereUniqueInput } from "../../../inputs/User_configWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneUser_configArgs {
  @TypeGraphQL.Field(_type => User_configWhereUniqueInput, {
    nullable: false
  })
  where!: User_configWhereUniqueInput;
}
