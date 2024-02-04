import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_paymentCreateManyOrder_transactionInputEnvelope } from "../inputs/Adyen_paymentCreateManyOrder_transactionInputEnvelope";
import { Adyen_paymentCreateOrConnectWithoutOrder_transactionInput } from "../inputs/Adyen_paymentCreateOrConnectWithoutOrder_transactionInput";
import { Adyen_paymentCreateWithoutOrder_transactionInput } from "../inputs/Adyen_paymentCreateWithoutOrder_transactionInput";
import { Adyen_paymentScalarWhereInput } from "../inputs/Adyen_paymentScalarWhereInput";
import { Adyen_paymentUpdateManyWithWhereWithoutOrder_transactionInput } from "../inputs/Adyen_paymentUpdateManyWithWhereWithoutOrder_transactionInput";
import { Adyen_paymentUpdateWithWhereUniqueWithoutOrder_transactionInput } from "../inputs/Adyen_paymentUpdateWithWhereUniqueWithoutOrder_transactionInput";
import { Adyen_paymentUpsertWithWhereUniqueWithoutOrder_transactionInput } from "../inputs/Adyen_paymentUpsertWithWhereUniqueWithoutOrder_transactionInput";
import { Adyen_paymentWhereUniqueInput } from "../inputs/Adyen_paymentWhereUniqueInput";

@TypeGraphQL.InputType("Adyen_paymentUpdateManyWithoutOrder_transactionNestedInput", {})
export class Adyen_paymentUpdateManyWithoutOrder_transactionNestedInput {
  @TypeGraphQL.Field(_type => [Adyen_paymentCreateWithoutOrder_transactionInput], {
    nullable: true
  })
  create?: Adyen_paymentCreateWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_paymentCreateOrConnectWithoutOrder_transactionInput], {
    nullable: true
  })
  connectOrCreate?: Adyen_paymentCreateOrConnectWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_paymentUpsertWithWhereUniqueWithoutOrder_transactionInput], {
    nullable: true
  })
  upsert?: Adyen_paymentUpsertWithWhereUniqueWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => Adyen_paymentCreateManyOrder_transactionInputEnvelope, {
    nullable: true
  })
  createMany?: Adyen_paymentCreateManyOrder_transactionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Adyen_paymentWhereUniqueInput], {
    nullable: true
  })
  set?: Adyen_paymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_paymentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Adyen_paymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_paymentWhereUniqueInput], {
    nullable: true
  })
  delete?: Adyen_paymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_paymentWhereUniqueInput], {
    nullable: true
  })
  connect?: Adyen_paymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_paymentUpdateWithWhereUniqueWithoutOrder_transactionInput], {
    nullable: true
  })
  update?: Adyen_paymentUpdateWithWhereUniqueWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_paymentUpdateManyWithWhereWithoutOrder_transactionInput], {
    nullable: true
  })
  updateMany?: Adyen_paymentUpdateManyWithWhereWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_paymentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Adyen_paymentScalarWhereInput[] | undefined;
}
