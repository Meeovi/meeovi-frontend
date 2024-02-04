import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { Landing_pageRelationFilter } from "../inputs/Landing_pageRelationFilter";
import { TagRelationFilter } from "../inputs/TagRelationFilter";

@TypeGraphQL.InputType("Landing_page_tagWhereInput", {})
export class Landing_page_tagWhereInput {
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
