import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";

@TypeGraphQL.InputType("Customer_tagScalarWhereWithAggregatesInput", {})
export class Customer_tagScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Customer_tagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Customer_tagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Customer_tagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Customer_tagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  customer_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  tag_id?: BytesWithAggregatesFilter | undefined;
}
