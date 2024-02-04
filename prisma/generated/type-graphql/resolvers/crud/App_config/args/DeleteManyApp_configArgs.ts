import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_configWhereInput } from "../../../inputs/App_configWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyApp_configArgs {
  @TypeGraphQL.Field(_type => App_configWhereInput, {
    nullable: true
  })
  where?: App_configWhereInput | undefined;
}
