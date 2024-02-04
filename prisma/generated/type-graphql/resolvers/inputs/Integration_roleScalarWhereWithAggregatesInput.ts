import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";

@TypeGraphQL.InputType("Integration_roleScalarWhereWithAggregatesInput", {})
export class Integration_roleScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Integration_roleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Integration_roleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Integration_roleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Integration_roleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  integration_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  acl_role_id?: BytesWithAggregatesFilter | undefined;
}
