import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Seo_url_templateUpdateInput } from "../../../inputs/Seo_url_templateUpdateInput";
import { Seo_url_templateWhereUniqueInput } from "../../../inputs/Seo_url_templateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSeo_url_templateArgs {
  @TypeGraphQL.Field(_type => Seo_url_templateUpdateInput, {
    nullable: false
  })
  data!: Seo_url_templateUpdateInput;

  @TypeGraphQL.Field(_type => Seo_url_templateWhereUniqueInput, {
    nullable: false
  })
  where!: Seo_url_templateWhereUniqueInput;
}
