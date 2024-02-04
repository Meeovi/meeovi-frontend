import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Seo_url_templateOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Seo_url_templateOrderByWithRelationAndSearchRelevanceInput";
import { Seo_url_templateWhereInput } from "../../../inputs/Seo_url_templateWhereInput";
import { Seo_url_templateWhereUniqueInput } from "../../../inputs/Seo_url_templateWhereUniqueInput";
import { Seo_url_templateScalarFieldEnum } from "../../../../enums/Seo_url_templateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Sales_channelSeo_url_templateArgs {
  @TypeGraphQL.Field(_type => Seo_url_templateWhereInput, {
    nullable: true
  })
  where?: Seo_url_templateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Seo_url_templateOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Seo_url_templateOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Seo_url_templateWhereUniqueInput, {
    nullable: true
  })
  cursor?: Seo_url_templateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Seo_url_templateScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "sales_channel_id" | "route_name" | "entity_name" | "template" | "is_valid" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
