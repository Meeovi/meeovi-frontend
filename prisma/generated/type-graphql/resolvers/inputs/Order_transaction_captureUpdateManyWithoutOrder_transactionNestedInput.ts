import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_captureCreateManyOrder_transactionInputEnvelope } from "../inputs/Order_transaction_captureCreateManyOrder_transactionInputEnvelope";
import { Order_transaction_captureCreateOrConnectWithoutOrder_transactionInput } from "../inputs/Order_transaction_captureCreateOrConnectWithoutOrder_transactionInput";
import { Order_transaction_captureCreateWithoutOrder_transactionInput } from "../inputs/Order_transaction_captureCreateWithoutOrder_transactionInput";
import { Order_transaction_captureScalarWhereInput } from "../inputs/Order_transaction_captureScalarWhereInput";
import { Order_transaction_captureUpdateManyWithWhereWithoutOrder_transactionInput } from "../inputs/Order_transaction_captureUpdateManyWithWhereWithoutOrder_transactionInput";
import { Order_transaction_captureUpdateWithWhereUniqueWithoutOrder_transactionInput } from "../inputs/Order_transaction_captureUpdateWithWhereUniqueWithoutOrder_transactionInput";
import { Order_transaction_captureUpsertWithWhereUniqueWithoutOrder_transactionInput } from "../inputs/Order_transaction_captureUpsertWithWhereUniqueWithoutOrder_transactionInput";
import { Order_transaction_captureWhereUniqueInput } from "../inputs/Order_transaction_captureWhereUniqueInput";

@TypeGraphQL.InputType("Order_transaction_captureUpdateManyWithoutOrder_transactionNestedInput", {})
export class Order_transaction_captureUpdateManyWithoutOrder_transactionNestedInput {
  @TypeGraphQL.Field(_type => [Order_transaction_captureCreateWithoutOrder_transactionInput], {
    nullable: true
  })
  create?: Order_transaction_captureCreateWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureCreateOrConnectWithoutOrder_transactionInput], {
    nullable: true
  })
  connectOrCreate?: Order_transaction_captureCreateOrConnectWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureUpsertWithWhereUniqueWithoutOrder_transactionInput], {
    nullable: true
  })
  upsert?: Order_transaction_captureUpsertWithWhereUniqueWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureCreateManyOrder_transactionInputEnvelope, {
    nullable: true
  })
  createMany?: Order_transaction_captureCreateManyOrder_transactionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureWhereUniqueInput], {
    nullable: true
  })
  set?: Order_transaction_captureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_transaction_captureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_transaction_captureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_transaction_captureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureUpdateWithWhereUniqueWithoutOrder_transactionInput], {
    nullable: true
  })
  update?: Order_transaction_captureUpdateWithWhereUniqueWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureUpdateManyWithWhereWithoutOrder_transactionInput], {
    nullable: true
  })
  updateMany?: Order_transaction_captureUpdateManyWithWhereWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_transaction_captureScalarWhereInput[] | undefined;
}
