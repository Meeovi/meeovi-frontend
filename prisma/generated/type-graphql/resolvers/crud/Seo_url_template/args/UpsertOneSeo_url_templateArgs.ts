import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Seo_url_templateCreateInput } from "../../../inputs/Seo_url_templateCreateInput";
import { Seo_url_templateUpdateInput } from "../../../inputs/Seo_url_templateUpdateInput";
import { Seo_url_templateWhereUniqueInput } from "../../../inputs/Seo_url_templateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSeo_url_templateArgs {
  @TypeGraphQL.Field(_type => Seo_url_templateWhereUniqueInput, {
    nullable: false
  })
  where!: Seo_url_templateWhereUniqueInput;

  @TypeGraphQL.Field(_type => Seo_url_templateCreateInput, {
    nullable: false
  })
  create!: Seo_url_templateCreateInput;

  @TypeGraphQL.Field(_type => Seo_url_templateUpdateInput, {
    nullable: false
  })
  update!: Seo_url_templateUpdateInput;
}
