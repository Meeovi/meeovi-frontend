import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_paymentWhereInput } from "../inputs/Adyen_paymentWhereInput";

@TypeGraphQL.InputType("Adyen_paymentListRelationFilter", {})
export class Adyen_paymentListRelationFilter {
  @TypeGraphQL.Field(_type => Adyen_paymentWhereInput, {
    nullable: true
  })
  every?: Adyen_paymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_paymentWhereInput, {
    nullable: true
  })
  some?: Adyen_paymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_paymentWhereInput, {
    nullable: true
  })
  none?: Adyen_paymentWhereInput | undefined;
}
