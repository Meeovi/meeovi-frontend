import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_refundCreateManyOrder_transactionInputEnvelope } from "../inputs/Adyen_refundCreateManyOrder_transactionInputEnvelope";
import { Adyen_refundCreateOrConnectWithoutOrder_transactionInput } from "../inputs/Adyen_refundCreateOrConnectWithoutOrder_transactionInput";
import { Adyen_refundCreateWithoutOrder_transactionInput } from "../inputs/Adyen_refundCreateWithoutOrder_transactionInput";
import { Adyen_refundWhereUniqueInput } from "../inputs/Adyen_refundWhereUniqueInput";

@TypeGraphQL.InputType("Adyen_refundCreateNestedManyWithoutOrder_transactionInput", {})
export class Adyen_refundCreateNestedManyWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => [Adyen_refundCreateWithoutOrder_transactionInput], {
    nullable: true
  })
  create?: Adyen_refundCreateWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_refundCreateOrConnectWithoutOrder_transactionInput], {
    nullable: true
  })
  connectOrCreate?: Adyen_refundCreateOrConnectWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => Adyen_refundCreateManyOrder_transactionInputEnvelope, {
    nullable: true
  })
  createMany?: Adyen_refundCreateManyOrder_transactionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Adyen_refundWhereUniqueInput], {
    nullable: true
  })
  connect?: Adyen_refundWhereUniqueInput[] | undefined;
}
