import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_templateWhereInput } from "../../../inputs/App_templateWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyApp_templateArgs {
  @TypeGraphQL.Field(_type => App_templateWhereInput, {
    nullable: true
  })
  where?: App_templateWhereInput | undefined;
}
