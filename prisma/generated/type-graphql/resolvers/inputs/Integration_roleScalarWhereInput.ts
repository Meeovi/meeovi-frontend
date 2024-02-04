import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Integration_roleScalarWhereInput", {})
export class Integration_roleScalarWhereInput {
  @TypeGraphQL.Field(_type => [Integration_roleScalarWhereInput], {
    nullable: true
  })
  AND?: Integration_roleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleScalarWhereInput], {
    nullable: true
  })
  OR?: Integration_roleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleScalarWhereInput], {
    nullable: true
  })
  NOT?: Integration_roleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  integration_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  acl_role_id?: BytesFilter | undefined;
}
