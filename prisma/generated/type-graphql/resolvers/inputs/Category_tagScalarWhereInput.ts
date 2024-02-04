import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Category_tagScalarWhereInput", {})
export class Category_tagScalarWhereInput {
  @TypeGraphQL.Field(_type => [Category_tagScalarWhereInput], {
    nullable: true
  })
  AND?: Category_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagScalarWhereInput], {
    nullable: true
  })
  OR?: Category_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagScalarWhereInput], {
    nullable: true
  })
  NOT?: Category_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  category_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  category_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  tag_id?: BytesFilter | undefined;
}
