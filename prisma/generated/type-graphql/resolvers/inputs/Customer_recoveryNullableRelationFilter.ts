import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_recoveryWhereInput } from "../inputs/Customer_recoveryWhereInput";

@TypeGraphQL.InputType("Customer_recoveryNullableRelationFilter", {})
export class Customer_recoveryNullableRelationFilter {
  @TypeGraphQL.Field(_type => Customer_recoveryWhereInput, {
    nullable: true
  })
  is?: Customer_recoveryWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_recoveryWhereInput, {
    nullable: true
  })
  isNot?: Customer_recoveryWhereInput | undefined;
}
