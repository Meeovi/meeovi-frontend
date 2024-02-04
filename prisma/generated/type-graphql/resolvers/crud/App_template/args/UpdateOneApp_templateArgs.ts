import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_templateUpdateInput } from "../../../inputs/App_templateUpdateInput";
import { App_templateWhereUniqueInput } from "../../../inputs/App_templateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneApp_templateArgs {
  @TypeGraphQL.Field(_type => App_templateUpdateInput, {
    nullable: false
  })
  data!: App_templateUpdateInput;

  @TypeGraphQL.Field(_type => App_templateWhereUniqueInput, {
    nullable: false
  })
  where!: App_templateWhereUniqueInput;
}
