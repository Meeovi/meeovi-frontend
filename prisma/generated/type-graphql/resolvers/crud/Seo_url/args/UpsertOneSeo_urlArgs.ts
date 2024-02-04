import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Seo_urlCreateInput } from "../../../inputs/Seo_urlCreateInput";
import { Seo_urlUpdateInput } from "../../../inputs/Seo_urlUpdateInput";
import { Seo_urlWhereUniqueInput } from "../../../inputs/Seo_urlWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSeo_urlArgs {
  @TypeGraphQL.Field(_type => Seo_urlWhereUniqueInput, {
    nullable: false
  })
  where!: Seo_urlWhereUniqueInput;

  @TypeGraphQL.Field(_type => Seo_urlCreateInput, {
    nullable: false
  })
  create!: Seo_urlCreateInput;

  @TypeGraphQL.Field(_type => Seo_urlUpdateInput, {
    nullable: false
  })
  update!: Seo_urlUpdateInput;
}
