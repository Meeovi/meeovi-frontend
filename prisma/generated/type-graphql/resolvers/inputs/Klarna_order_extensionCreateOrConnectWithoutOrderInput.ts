import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klarna_order_extensionCreateWithoutOrderInput } from "../inputs/Klarna_order_extensionCreateWithoutOrderInput";
import { Klarna_order_extensionWhereUniqueInput } from "../inputs/Klarna_order_extensionWhereUniqueInput";

@TypeGraphQL.InputType("Klarna_order_extensionCreateOrConnectWithoutOrderInput", {})
export class Klarna_order_extensionCreateOrConnectWithoutOrderInput {
  @TypeGraphQL.Field(_type => Klarna_order_extensionWhereUniqueInput, {
    nullable: false
  })
  where!: Klarna_order_extensionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Klarna_order_extensionCreateWithoutOrderInput, {
    nullable: false
  })
  create!: Klarna_order_extensionCreateWithoutOrderInput;
}
