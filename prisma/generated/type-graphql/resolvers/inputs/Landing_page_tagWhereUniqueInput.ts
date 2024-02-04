import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { Landing_pageRelationFilter } from "../inputs/Landing_pageRelationFilter";
import { Landing_page_tagWhereInput } from "../inputs/Landing_page_tagWhereInput";
import { TagRelationFilter } from "../inputs/TagRelationFilter";
import { landing_page_tagLanding_page_idLanding_page_version_idTag_idCompoundUniqueInput } from "../inputs/landing_page_tagLanding_page_idLanding_page_version_idTag_idCompoundUniqueInput";

@TypeGraphQL.InputType("Landing_page_tagWhereUniqueInput", {})
export class Landing_page_tagWhereUniqueInput {
  @TypeGraphQL.Field(_type => landing_page_tagLanding_page_idLanding_page_version_idTag_idCompoundUniqueInput, {
    nullable: true
  })
  landing_page_id_landing_page_version_id_tag_id?: landing_page_tagLanding_page_idLanding_page_version_idTag_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagWhereInput], {
    nullable: true
  })
  AND?: Landing_page_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagWhereInput], {
    nullable: true
  })
  OR?: Landing_page_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagWhereInput], {
    nullable: true
  })
  NOT?: Landing_page_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  landing_page_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  landing_page_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  tag_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => Landing_pageRelationFilter, {
    nullable: true
  })
  landing_page?: Landing_pageRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TagRelationFilter, {
    nullable: true
  })
  tag?: TagRelationFilter | undefined;
}
