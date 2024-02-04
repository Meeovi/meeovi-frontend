import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_blockCreateInput } from "../../../inputs/Cms_blockCreateInput";
import { Cms_blockUpdateInput } from "../../../inputs/Cms_blockUpdateInput";
import { Cms_blockWhereUniqueInput } from "../../../inputs/Cms_blockWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCms_blockArgs {
  @TypeGraphQL.Field(_type => Cms_blockWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_blockWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_blockCreateInput, {
    nullable: false
  })
  create!: Cms_blockCreateInput;

  @TypeGraphQL.Field(_type => Cms_blockUpdateInput, {
    nullable: false
  })
  update!: Cms_blockUpdateInput;
}
