import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Landing_page_tagScalarWhereInput", {})
export class Landing_page_tagScalarWhereInput {
  @TypeGraphQL.Field(_type => [Landing_page_tagScalarWhereInput], {
    nullable: true
  })
  AND?: Landing_page_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagScalarWhereInput], {
    nullable: true
  })
  OR?: Landing_page_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagScalarWhereInput], {
    nullable: true
  })
  NOT?: Landing_page_tagScalarWhereInput[] | undefined;

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
}
