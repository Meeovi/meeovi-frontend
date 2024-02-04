import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateOrConnectWithoutOrder_transactionInput } from "../inputs/Payment_methodCreateOrConnectWithoutOrder_transactionInput";
import { Payment_methodCreateWithoutOrder_transactionInput } from "../inputs/Payment_methodCreateWithoutOrder_transactionInput";
import { Payment_methodUpdateToOneWithWhereWithoutOrder_transactionInput } from "../inputs/Payment_methodUpdateToOneWithWhereWithoutOrder_transactionInput";
import { Payment_methodUpsertWithoutOrder_transactionInput } from "../inputs/Payment_methodUpsertWithoutOrder_transactionInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodUpdateOneRequiredWithoutOrder_transactionNestedInput", {})
export class Payment_methodUpdateOneRequiredWithoutOrder_transactionNestedInput {
  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutOrder_transactionInput, {
    nullable: true
  })
  create?: Payment_methodCreateWithoutOrder_transactionInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateOrConnectWithoutOrder_transactionInput, {
    nullable: true
  })
  connectOrCreate?: Payment_methodCreateOrConnectWithoutOrder_transactionInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodUpsertWithoutOrder_transactionInput, {
    nullable: true
  })
  upsert?: Payment_methodUpsertWithoutOrder_transactionInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: true
  })
  connect?: Payment_methodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodUpdateToOneWithWhereWithoutOrder_transactionInput, {
    nullable: true
  })
  update?: Payment_methodUpdateToOneWithWhereWithoutOrder_transactionInput | undefined;
}
