import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodWhereInput } from "../inputs/App_payment_methodWhereInput";

@TypeGraphQL.InputType("App_payment_methodListRelationFilter", {})
export class App_payment_methodListRelationFilter {
  @TypeGraphQL.Field(_type => App_payment_methodWhereInput, {
    nullable: true
  })
  every?: App_payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodWhereInput, {
    nullable: true
  })
  some?: App_payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodWhereInput, {
    nullable: true
  })
  none?: App_payment_methodWhereInput | undefined;
}
