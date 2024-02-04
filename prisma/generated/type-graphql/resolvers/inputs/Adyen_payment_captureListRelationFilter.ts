import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_payment_captureWhereInput } from "../inputs/Adyen_payment_captureWhereInput";

@TypeGraphQL.InputType("Adyen_payment_captureListRelationFilter", {})
export class Adyen_payment_captureListRelationFilter {
  @TypeGraphQL.Field(_type => Adyen_payment_captureWhereInput, {
    nullable: true
  })
  every?: Adyen_payment_captureWhereInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_captureWhereInput, {
    nullable: true
  })
  some?: Adyen_payment_captureWhereInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_captureWhereInput, {
    nullable: true
  })
  none?: Adyen_payment_captureWhereInput | undefined;
}
