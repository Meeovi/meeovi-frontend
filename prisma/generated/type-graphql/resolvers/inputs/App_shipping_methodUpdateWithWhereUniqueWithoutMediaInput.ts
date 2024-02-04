import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_shipping_methodUpdateWithoutMediaInput } from "../inputs/App_shipping_methodUpdateWithoutMediaInput";
import { App_shipping_methodWhereUniqueInput } from "../inputs/App_shipping_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_shipping_methodUpdateWithWhereUniqueWithoutMediaInput", {})
export class App_shipping_methodUpdateWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => App_shipping_methodWhereUniqueInput, {
    nullable: false
  })
  where!: App_shipping_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_shipping_methodUpdateWithoutMediaInput, {
    nullable: false
  })
  data!: App_shipping_methodUpdateWithoutMediaInput;
}
