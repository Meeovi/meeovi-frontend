import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_pricesCreateManyPromotion_discountInputEnvelope } from "../inputs/Promotion_discount_pricesCreateManyPromotion_discountInputEnvelope";
import { Promotion_discount_pricesCreateOrConnectWithoutPromotion_discountInput } from "../inputs/Promotion_discount_pricesCreateOrConnectWithoutPromotion_discountInput";
import { Promotion_discount_pricesCreateWithoutPromotion_discountInput } from "../inputs/Promotion_discount_pricesCreateWithoutPromotion_discountInput";
import { Promotion_discount_pricesWhereUniqueInput } from "../inputs/Promotion_discount_pricesWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_discount_pricesCreateNestedManyWithoutPromotion_discountInput", {})
export class Promotion_discount_pricesCreateNestedManyWithoutPromotion_discountInput {
  @TypeGraphQL.Field(_type => [Promotion_discount_pricesCreateWithoutPromotion_discountInput], {
    nullable: true
  })
  create?: Promotion_discount_pricesCreateWithoutPromotion_discountInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesCreateOrConnectWithoutPromotion_discountInput], {
    nullable: true
  })
  connectOrCreate?: Promotion_discount_pricesCreateOrConnectWithoutPromotion_discountInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesCreateManyPromotion_discountInputEnvelope, {
    nullable: true
  })
  createMany?: Promotion_discount_pricesCreateManyPromotion_discountInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesWhereUniqueInput], {
    nullable: true
  })
  connect?: Promotion_discount_pricesWhereUniqueInput[] | undefined;
}
