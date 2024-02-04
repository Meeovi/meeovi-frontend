import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klarna_order_extensionScalarWhereInput } from "../inputs/Klarna_order_extensionScalarWhereInput";
import { Klarna_order_extensionUpdateManyMutationInput } from "../inputs/Klarna_order_extensionUpdateManyMutationInput";

@TypeGraphQL.InputType("Klarna_order_extensionUpdateManyWithWhereWithoutOrderInput", {})
export class Klarna_order_extensionUpdateManyWithWhereWithoutOrderInput {
  @TypeGraphQL.Field(_type => Klarna_order_extensionScalarWhereInput, {
    nullable: false
  })
  where!: Klarna_order_extensionScalarWhereInput;

  @TypeGraphQL.Field(_type => Klarna_order_extensionUpdateManyMutationInput, {
    nullable: false
  })
  data!: Klarna_order_extensionUpdateManyMutationInput;
}
