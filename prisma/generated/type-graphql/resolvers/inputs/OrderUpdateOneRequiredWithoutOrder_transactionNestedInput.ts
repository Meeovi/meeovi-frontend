import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutOrder_transactionInput } from "../inputs/OrderCreateOrConnectWithoutOrder_transactionInput";
import { OrderCreateWithoutOrder_transactionInput } from "../inputs/OrderCreateWithoutOrder_transactionInput";
import { OrderUpdateToOneWithWhereWithoutOrder_transactionInput } from "../inputs/OrderUpdateToOneWithWhereWithoutOrder_transactionInput";
import { OrderUpsertWithoutOrder_transactionInput } from "../inputs/OrderUpsertWithoutOrder_transactionInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateOneRequiredWithoutOrder_transactionNestedInput", {})
export class OrderUpdateOneRequiredWithoutOrder_transactionNestedInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_transactionInput, {
    nullable: true
  })
  create?: OrderCreateWithoutOrder_transactionInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutOrder_transactionInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutOrder_transactionInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpsertWithoutOrder_transactionInput, {
    nullable: true
  })
  upsert?: OrderUpsertWithoutOrder_transactionInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateToOneWithWhereWithoutOrder_transactionInput, {
    nullable: true
  })
  update?: OrderUpdateToOneWithWhereWithoutOrder_transactionInput | undefined;
}
