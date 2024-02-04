import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klarna_order_extensionUpdateWithoutOrderInput } from "../inputs/Klarna_order_extensionUpdateWithoutOrderInput";
import { Klarna_order_extensionWhereUniqueInput } from "../inputs/Klarna_order_extensionWhereUniqueInput";

@TypeGraphQL.InputType("Klarna_order_extensionUpdateWithWhereUniqueWithoutOrderInput", {})
export class Klarna_order_extensionUpdateWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => Klarna_order_extensionWhereUniqueInput, {
    nullable: false
  })
  where!: Klarna_order_extensionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Klarna_order_extensionUpdateWithoutOrderInput, {
    nullable: false
  })
  data!: Klarna_order_extensionUpdateWithoutOrderInput;
}
