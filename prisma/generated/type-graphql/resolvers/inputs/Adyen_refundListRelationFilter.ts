import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_refundWhereInput } from "../inputs/Adyen_refundWhereInput";

@TypeGraphQL.InputType("Adyen_refundListRelationFilter", {})
export class Adyen_refundListRelationFilter {
  @TypeGraphQL.Field(_type => Adyen_refundWhereInput, {
    nullable: true
  })
  every?: Adyen_refundWhereInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_refundWhereInput, {
    nullable: true
  })
  some?: Adyen_refundWhereInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_refundWhereInput, {
    nullable: true
  })
  none?: Adyen_refundWhereInput | undefined;
}
