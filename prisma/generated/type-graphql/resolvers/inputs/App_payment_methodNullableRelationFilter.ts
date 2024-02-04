import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodWhereInput } from "../inputs/App_payment_methodWhereInput";

@TypeGraphQL.InputType("App_payment_methodNullableRelationFilter", {})
export class App_payment_methodNullableRelationFilter {
  @TypeGraphQL.Field(_type => App_payment_methodWhereInput, {
    nullable: true
  })
  is?: App_payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodWhereInput, {
    nullable: true
  })
  isNot?: App_payment_methodWhereInput | undefined;
}
