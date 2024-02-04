import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_shipping_methodCreateWithoutShipping_methodInput } from "../inputs/App_shipping_methodCreateWithoutShipping_methodInput";
import { App_shipping_methodWhereUniqueInput } from "../inputs/App_shipping_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_shipping_methodCreateOrConnectWithoutShipping_methodInput", {})
export class App_shipping_methodCreateOrConnectWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => App_shipping_methodWhereUniqueInput, {
    nullable: false
  })
  where!: App_shipping_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_shipping_methodCreateWithoutShipping_methodInput, {
    nullable: false
  })
  create!: App_shipping_methodCreateWithoutShipping_methodInput;
}
