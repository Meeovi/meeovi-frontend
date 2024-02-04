import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_refundCreateManyOrder_transactionInputEnvelope } from "../inputs/Adyen_refundCreateManyOrder_transactionInputEnvelope";
import { Adyen_refundCreateOrConnectWithoutOrder_transactionInput } from "../inputs/Adyen_refundCreateOrConnectWithoutOrder_transactionInput";
import { Adyen_refundCreateWithoutOrder_transactionInput } from "../inputs/Adyen_refundCreateWithoutOrder_transactionInput";
import { Adyen_refundScalarWhereInput } from "../inputs/Adyen_refundScalarWhereInput";
import { Adyen_refundUpdateManyWithWhereWithoutOrder_transactionInput } from "../inputs/Adyen_refundUpdateManyWithWhereWithoutOrder_transactionInput";
import { Adyen_refundUpdateWithWhereUniqueWithoutOrder_transactionInput } from "../inputs/Adyen_refundUpdateWithWhereUniqueWithoutOrder_transactionInput";
import { Adyen_refundUpsertWithWhereUniqueWithoutOrder_transactionInput } from "../inputs/Adyen_refundUpsertWithWhereUniqueWithoutOrder_transactionInput";
import { Adyen_refundWhereUniqueInput } from "../inputs/Adyen_refundWhereUniqueInput";

@TypeGraphQL.InputType("Adyen_refundUpdateManyWithoutOrder_transactionNestedInput", {})
export class Adyen_refundUpdateManyWithoutOrder_transactionNestedInput {
  @TypeGraphQL.Field(_type => [Adyen_refundCreateWithoutOrder_transactionInput], {
    nullable: true
  })
  create?: Adyen_refundCreateWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_refundCreateOrConnectWithoutOrder_transactionInput], {
    nullable: true
  })
  connectOrCreate?: Adyen_refundCreateOrConnectWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_refundUpsertWithWhereUniqueWithoutOrder_transactionInput], {
    nullable: true
  })
  upsert?: Adyen_refundUpsertWithWhereUniqueWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => Adyen_refundCreateManyOrder_transactionInputEnvelope, {
    nullable: true
  })
  createMany?: Adyen_refundCreateManyOrder_transactionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Adyen_refundWhereUniqueInput], {
    nullable: true
  })
  set?: Adyen_refundWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_refundWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Adyen_refundWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_refundWhereUniqueInput], {
    nullable: true
  })
  delete?: Adyen_refundWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_refundWhereUniqueInput], {
    nullable: true
  })
  connect?: Adyen_refundWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_refundUpdateWithWhereUniqueWithoutOrder_transactionInput], {
    nullable: true
  })
  update?: Adyen_refundUpdateWithWhereUniqueWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_refundUpdateManyWithWhereWithoutOrder_transactionInput], {
    nullable: true
  })
  updateMany?: Adyen_refundUpdateManyWithWhereWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_refundScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Adyen_refundScalarWhereInput[] | undefined;
}
