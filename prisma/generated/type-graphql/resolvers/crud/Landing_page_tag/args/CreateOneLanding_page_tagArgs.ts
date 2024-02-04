import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_tagCreateInput } from "../../../inputs/Landing_page_tagCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLanding_page_tagArgs {
  @TypeGraphQL.Field(_type => Landing_page_tagCreateInput, {
    nullable: false
  })
  data!: Landing_page_tagCreateInput;
}
