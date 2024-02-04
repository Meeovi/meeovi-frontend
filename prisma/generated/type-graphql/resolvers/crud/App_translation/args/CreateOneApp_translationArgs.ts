import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_translationCreateInput } from "../../../inputs/App_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneApp_translationArgs {
  @TypeGraphQL.Field(_type => App_translationCreateInput, {
    nullable: false
  })
  data!: App_translationCreateInput;
}
