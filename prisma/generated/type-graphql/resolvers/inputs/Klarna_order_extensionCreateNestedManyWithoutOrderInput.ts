import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klarna_order_extensionCreateManyOrderInputEnvelope } from "../inputs/Klarna_order_extensionCreateManyOrderInputEnvelope";
import { Klarna_order_extensionCreateOrConnectWithoutOrderInput } from "../inputs/Klarna_order_extensionCreateOrConnectWithoutOrderInput";
import { Klarna_order_extensionCreateWithoutOrderInput } from "../inputs/Klarna_order_extensionCreateWithoutOrderInput";
import { Klarna_order_extensionWhereUniqueInput } from "../inputs/Klarna_order_extensionWhereUniqueInput";

@TypeGraphQL.InputType("Klarna_order_extensionCreateNestedManyWithoutOrderInput", {})
export class Klarna_order_extensionCreateNestedManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [Klarna_order_extensionCreateWithoutOrderInput], {
    nullable: true
  })
  create?: Klarna_order_extensionCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klarna_order_extensionCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: Klarna_order_extensionCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => Klarna_order_extensionCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: Klarna_order_extensionCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Klarna_order_extensionWhereUniqueInput], {
    nullable: true
  })
  connect?: Klarna_order_extensionWhereUniqueInput[] | undefined;
}
