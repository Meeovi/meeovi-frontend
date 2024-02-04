import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_translationCreateInput } from "../../../inputs/Landing_page_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLanding_page_translationArgs {
  @TypeGraphQL.Field(_type => Landing_page_translationCreateInput, {
    nullable: false
  })
  data!: Landing_page_translationCreateInput;
}
