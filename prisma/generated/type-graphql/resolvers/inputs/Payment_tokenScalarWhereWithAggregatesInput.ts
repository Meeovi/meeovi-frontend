import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Payment_tokenScalarWhereWithAggregatesInput", {})
export class Payment_tokenScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Payment_tokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Payment_tokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_tokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Payment_tokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_tokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Payment_tokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  token?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  expires?: DateTimeWithAggregatesFilter | undefined;
}
