import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_translationWhereUniqueInput } from "../../../inputs/App_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueApp_translationArgs {
  @TypeGraphQL.Field(_type => App_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_translationWhereUniqueInput;
}
