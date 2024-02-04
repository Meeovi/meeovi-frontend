import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_configWhereInput } from "../../../inputs/User_configWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUser_configArgs {
  @TypeGraphQL.Field(_type => User_configWhereInput, {
    nullable: true
  })
  where?: User_configWhereInput | undefined;
}
