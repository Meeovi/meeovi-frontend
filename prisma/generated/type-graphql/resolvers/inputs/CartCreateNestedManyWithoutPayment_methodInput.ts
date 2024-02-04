import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManyPayment_methodInputEnvelope } from "../inputs/CartCreateManyPayment_methodInputEnvelope";
import { CartCreateOrConnectWithoutPayment_methodInput } from "../inputs/CartCreateOrConnectWithoutPayment_methodInput";
import { CartCreateWithoutPayment_methodInput } from "../inputs/CartCreateWithoutPayment_methodInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartCreateNestedManyWithoutPayment_methodInput", {})
export class CartCreateNestedManyWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => [CartCreateWithoutPayment_methodInput], {
    nullable: true
  })
  create?: CartCreateWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartCreateOrConnectWithoutPayment_methodInput], {
    nullable: true
  })
  connectOrCreate?: CartCreateOrConnectWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => CartCreateManyPayment_methodInputEnvelope, {
    nullable: true
  })
  createMany?: CartCreateManyPayment_methodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  connect?: CartWhereUniqueInput[] | undefined;
}
