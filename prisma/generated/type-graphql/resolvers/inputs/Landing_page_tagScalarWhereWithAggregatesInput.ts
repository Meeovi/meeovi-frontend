import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";

@TypeGraphQL.InputType("Landing_page_tagScalarWhereWithAggregatesInput", {})
export class Landing_page_tagScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Landing_page_tagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Landing_page_tagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Landing_page_tagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Landing_page_tagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  landing_page_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  landing_page_version_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  tag_id?: BytesWithAggregatesFilter | undefined;
}
