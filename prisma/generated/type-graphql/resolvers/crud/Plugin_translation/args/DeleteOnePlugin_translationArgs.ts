import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Plugin_translationWhereUniqueInput } from "../../../inputs/Plugin_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePlugin_translationArgs {
  @TypeGraphQL.Field(_type => Plugin_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Plugin_translationWhereUniqueInput;
}
