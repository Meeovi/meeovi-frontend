import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Seo_urlOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Seo_urlOrderByWithRelationAndSearchRelevanceInput";
import { Seo_urlWhereInput } from "../../../inputs/Seo_urlWhereInput";
import { Seo_urlWhereUniqueInput } from "../../../inputs/Seo_urlWhereUniqueInput";
import { Seo_urlScalarFieldEnum } from "../../../../enums/Seo_urlScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class LanguageSeo_urlArgs {
  @TypeGraphQL.Field(_type => Seo_urlWhereInput, {
    nullable: true
  })
  where?: Seo_urlWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Seo_urlOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Seo_urlOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Seo_urlWhereUniqueInput, {
    nullable: true
  })
  cursor?: Seo_urlWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Seo_urlScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "language_id" | "sales_channel_id" | "foreign_key" | "route_name" | "path_info" | "seo_path_info" | "is_canonical" | "is_modified" | "is_deleted" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
