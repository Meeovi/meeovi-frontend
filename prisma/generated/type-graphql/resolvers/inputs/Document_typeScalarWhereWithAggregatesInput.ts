import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Document_typeScalarWhereWithAggregatesInput", {})
export class Document_typeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Document_typeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Document_typeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_typeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Document_typeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_typeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Document_typeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  technical_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
