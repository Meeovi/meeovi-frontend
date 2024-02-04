import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateManyOrderInputEnvelope } from "../inputs/Order_transactionCreateManyOrderInputEnvelope";
import { Order_transactionCreateOrConnectWithoutOrderInput } from "../inputs/Order_transactionCreateOrConnectWithoutOrderInput";
import { Order_transactionCreateWithoutOrderInput } from "../inputs/Order_transactionCreateWithoutOrderInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionCreateNestedManyWithoutOrderInput", {})
export class Order_transactionCreateNestedManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [Order_transactionCreateWithoutOrderInput], {
    nullable: true
  })
  create?: Order_transactionCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: Order_transactionCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_transactionCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: Order_transactionCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_transactionWhereUniqueInput[] | undefined;
}
