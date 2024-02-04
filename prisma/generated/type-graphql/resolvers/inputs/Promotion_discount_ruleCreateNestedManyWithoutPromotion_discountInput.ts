import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_ruleCreateManyPromotion_discountInputEnvelope } from "../inputs/Promotion_discount_ruleCreateManyPromotion_discountInputEnvelope";
import { Promotion_discount_ruleCreateOrConnectWithoutPromotion_discountInput } from "../inputs/Promotion_discount_ruleCreateOrConnectWithoutPromotion_discountInput";
import { Promotion_discount_ruleCreateWithoutPromotion_discountInput } from "../inputs/Promotion_discount_ruleCreateWithoutPromotion_discountInput";
import { Promotion_discount_ruleWhereUniqueInput } from "../inputs/Promotion_discount_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_discount_ruleCreateNestedManyWithoutPromotion_discountInput", {})
export class Promotion_discount_ruleCreateNestedManyWithoutPromotion_discountInput {
  @TypeGraphQL.Field(_type => [Promotion_discount_ruleCreateWithoutPromotion_discountInput], {
    nullable: true
  })
  create?: Promotion_discount_ruleCreateWithoutPromotion_discountInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleCreateOrConnectWithoutPromotion_discountInput], {
    nullable: true
  })
  connectOrCreate?: Promotion_discount_ruleCreateOrConnectWithoutPromotion_discountInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleCreateManyPromotion_discountInputEnvelope, {
    nullable: true
  })
  createMany?: Promotion_discount_ruleCreateManyPromotion_discountInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleWhereUniqueInput], {
    nullable: true
  })
  connect?: Promotion_discount_ruleWhereUniqueInput[] | undefined;
}
