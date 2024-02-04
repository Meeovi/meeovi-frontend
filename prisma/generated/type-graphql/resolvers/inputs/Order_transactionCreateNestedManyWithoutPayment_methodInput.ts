import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateManyPayment_methodInputEnvelope } from "../inputs/Order_transactionCreateManyPayment_methodInputEnvelope";
import { Order_transactionCreateOrConnectWithoutPayment_methodInput } from "../inputs/Order_transactionCreateOrConnectWithoutPayment_methodInput";
import { Order_transactionCreateWithoutPayment_methodInput } from "../inputs/Order_transactionCreateWithoutPayment_methodInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionCreateNestedManyWithoutPayment_methodInput", {})
export class Order_transactionCreateNestedManyWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => [Order_transactionCreateWithoutPayment_methodInput], {
    nullable: true
  })
  create?: Order_transactionCreateWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionCreateOrConnectWithoutPayment_methodInput], {
    nullable: true
  })
  connectOrCreate?: Order_transactionCreateOrConnectWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_transactionCreateManyPayment_methodInputEnvelope, {
    nullable: true
  })
  createMany?: Order_transactionCreateManyPayment_methodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_transactionWhereUniqueInput[] | undefined;
}
