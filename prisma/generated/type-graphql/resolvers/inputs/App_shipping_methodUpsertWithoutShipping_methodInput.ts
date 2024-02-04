import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_shipping_methodCreateWithoutShipping_methodInput } from "../inputs/App_shipping_methodCreateWithoutShipping_methodInput";
import { App_shipping_methodUpdateWithoutShipping_methodInput } from "../inputs/App_shipping_methodUpdateWithoutShipping_methodInput";
import { App_shipping_methodWhereInput } from "../inputs/App_shipping_methodWhereInput";

@TypeGraphQL.InputType("App_shipping_methodUpsertWithoutShipping_methodInput", {})
export class App_shipping_methodUpsertWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => App_shipping_methodUpdateWithoutShipping_methodInput, {
    nullable: false
  })
  update!: App_shipping_methodUpdateWithoutShipping_methodInput;

  @TypeGraphQL.Field(_type => App_shipping_methodCreateWithoutShipping_methodInput, {
    nullable: false
  })
  create!: App_shipping_methodCreateWithoutShipping_methodInput;

  @TypeGraphQL.Field(_type => App_shipping_methodWhereInput, {
    nullable: true
  })
  where?: App_shipping_methodWhereInput | undefined;
}
