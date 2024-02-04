import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_shipping_methodCreateWithoutMediaInput } from "../inputs/App_shipping_methodCreateWithoutMediaInput";
import { App_shipping_methodWhereUniqueInput } from "../inputs/App_shipping_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_shipping_methodCreateOrConnectWithoutMediaInput", {})
export class App_shipping_methodCreateOrConnectWithoutMediaInput {
  @TypeGraphQL.Field(_type => App_shipping_methodWhereUniqueInput, {
    nullable: false
  })
  where!: App_shipping_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_shipping_methodCreateWithoutMediaInput, {
    nullable: false
  })
  create!: App_shipping_methodCreateWithoutMediaInput;
}
