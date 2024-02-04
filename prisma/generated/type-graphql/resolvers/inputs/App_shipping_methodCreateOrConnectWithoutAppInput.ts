import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_shipping_methodCreateWithoutAppInput } from "../inputs/App_shipping_methodCreateWithoutAppInput";
import { App_shipping_methodWhereUniqueInput } from "../inputs/App_shipping_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_shipping_methodCreateOrConnectWithoutAppInput", {})
export class App_shipping_methodCreateOrConnectWithoutAppInput {
  @TypeGraphQL.Field(_type => App_shipping_methodWhereUniqueInput, {
    nullable: false
  })
  where!: App_shipping_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_shipping_methodCreateWithoutAppInput, {
    nullable: false
  })
  create!: App_shipping_methodCreateWithoutAppInput;
}
