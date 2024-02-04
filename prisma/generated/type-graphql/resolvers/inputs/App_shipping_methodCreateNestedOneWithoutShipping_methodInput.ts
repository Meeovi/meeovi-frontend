import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_shipping_methodCreateOrConnectWithoutShipping_methodInput } from "../inputs/App_shipping_methodCreateOrConnectWithoutShipping_methodInput";
import { App_shipping_methodCreateWithoutShipping_methodInput } from "../inputs/App_shipping_methodCreateWithoutShipping_methodInput";
import { App_shipping_methodWhereUniqueInput } from "../inputs/App_shipping_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_shipping_methodCreateNestedOneWithoutShipping_methodInput", {})
export class App_shipping_methodCreateNestedOneWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => App_shipping_methodCreateWithoutShipping_methodInput, {
    nullable: true
  })
  create?: App_shipping_methodCreateWithoutShipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodCreateOrConnectWithoutShipping_methodInput, {
    nullable: true
  })
  connectOrCreate?: App_shipping_methodCreateOrConnectWithoutShipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodWhereUniqueInput, {
    nullable: true
  })
  connect?: App_shipping_methodWhereUniqueInput | undefined;
}
