import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_refundCreateWithoutOrder_transactionInput } from "../inputs/Adyen_refundCreateWithoutOrder_transactionInput";
import { Adyen_refundUpdateWithoutOrder_transactionInput } from "../inputs/Adyen_refundUpdateWithoutOrder_transactionInput";
import { Adyen_refundWhereUniqueInput } from "../inputs/Adyen_refundWhereUniqueInput";

@TypeGraphQL.InputType("Adyen_refundUpsertWithWhereUniqueWithoutOrder_transactionInput", {})
export class Adyen_refundUpsertWithWhereUniqueWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => Adyen_refundWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_refundWhereUniqueInput;

  @TypeGraphQL.Field(_type => Adyen_refundUpdateWithoutOrder_transactionInput, {
    nullable: false
  })
  update!: Adyen_refundUpdateWithoutOrder_transactionInput;

  @TypeGraphQL.Field(_type => Adyen_refundCreateWithoutOrder_transactionInput, {
    nullable: false
  })
  create!: Adyen_refundCreateWithoutOrder_transactionInput;
}
