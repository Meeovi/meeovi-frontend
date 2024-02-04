import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_templateWhereUniqueInput } from "../../../inputs/App_templateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueApp_templateOrThrowArgs {
  @TypeGraphQL.Field(_type => App_templateWhereUniqueInput, {
    nullable: false
  })
  where!: App_templateWhereUniqueInput;
}
