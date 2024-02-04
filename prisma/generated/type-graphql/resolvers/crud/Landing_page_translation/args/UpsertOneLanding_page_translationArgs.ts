import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_translationCreateInput } from "../../../inputs/Landing_page_translationCreateInput";
import { Landing_page_translationUpdateInput } from "../../../inputs/Landing_page_translationUpdateInput";
import { Landing_page_translationWhereUniqueInput } from "../../../inputs/Landing_page_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLanding_page_translationArgs {
  @TypeGraphQL.Field(_type => Landing_page_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Landing_page_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Landing_page_translationCreateInput, {
    nullable: false
  })
  create!: Landing_page_translationCreateInput;

  @TypeGraphQL.Field(_type => Landing_page_translationUpdateInput, {
    nullable: false
  })
  update!: Landing_page_translationUpdateInput;
}
