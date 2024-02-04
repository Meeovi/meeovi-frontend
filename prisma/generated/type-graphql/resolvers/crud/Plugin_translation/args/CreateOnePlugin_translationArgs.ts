import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Plugin_translationCreateInput } from "../../../inputs/Plugin_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePlugin_translationArgs {
  @TypeGraphQL.Field(_type => Plugin_translationCreateInput, {
    nullable: false
  })
  data!: Plugin_translationCreateInput;
}
