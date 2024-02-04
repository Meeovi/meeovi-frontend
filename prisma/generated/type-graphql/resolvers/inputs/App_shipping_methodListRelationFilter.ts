import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_shipping_methodWhereInput } from "../inputs/App_shipping_methodWhereInput";

@TypeGraphQL.InputType("App_shipping_methodListRelationFilter", {})
export class App_shipping_methodListRelationFilter {
  @TypeGraphQL.Field(_type => App_shipping_methodWhereInput, {
    nullable: true
  })
  every?: App_shipping_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodWhereInput, {
    nullable: true
  })
  some?: App_shipping_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodWhereInput, {
    nullable: true
  })
  none?: App_shipping_methodWhereInput | undefined;
}
