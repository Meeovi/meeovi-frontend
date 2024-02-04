import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_tagCreateInput } from "../../../inputs/Landing_page_tagCreateInput";
import { Landing_page_tagUpdateInput } from "../../../inputs/Landing_page_tagUpdateInput";
import { Landing_page_tagWhereUniqueInput } from "../../../inputs/Landing_page_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLanding_page_tagArgs {
  @TypeGraphQL.Field(_type => Landing_page_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Landing_page_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Landing_page_tagCreateInput, {
    nullable: false
  })
  create!: Landing_page_tagCreateInput;

  @TypeGraphQL.Field(_type => Landing_page_tagUpdateInput, {
    nullable: false
  })
  update!: Landing_page_tagUpdateInput;
}
