import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_ruleCreateManyPromotion_discountInputEnvelope } from "../inputs/Promotion_discount_ruleCreateManyPromotion_discountInputEnvelope";
import { Promotion_discount_ruleCreateOrConnectWithoutPromotion_discountInput } from "../inputs/Promotion_discount_ruleCreateOrConnectWithoutPromotion_discountInput";
import { Promotion_discount_ruleCreateWithoutPromotion_discountInput } from "../inputs/Promotion_discount_ruleCreateWithoutPromotion_discountInput";
import { Promotion_discount_ruleScalarWhereInput } from "../inputs/Promotion_discount_ruleScalarWhereInput";
import { Promotion_discount_ruleUpdateManyWithWhereWithoutPromotion_discountInput } from "../inputs/Promotion_discount_ruleUpdateManyWithWhereWithoutPromotion_discountInput";
import { Promotion_discount_ruleUpdateWithWhereUniqueWithoutPromotion_discountInput } from "../inputs/Promotion_discount_ruleUpdateWithWhereUniqueWithoutPromotion_discountInput";
import { Promotion_discount_ruleUpsertWithWhereUniqueWithoutPromotion_discountInput } from "../inputs/Promotion_discount_ruleUpsertWithWhereUniqueWithoutPromotion_discountInput";
import { Promotion_discount_ruleWhereUniqueInput } from "../inputs/Promotion_discount_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_discount_ruleUpdateManyWithoutPromotion_discountNestedInput", {})
export class Promotion_discount_ruleUpdateManyWithoutPromotion_discountNestedInput {
  @TypeGraphQL.Field(_type => [Promotion_discount_ruleCreateWithoutPromotion_discountInput], {
    nullable: true
  })
  create?: Promotion_discount_ruleCreateWithoutPromotion_discountInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleCreateOrConnectWithoutPromotion_discountInput], {
    nullable: true
  })
  connectOrCreate?: Promotion_discount_ruleCreateOrConnectWithoutPromotion_discountInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleUpsertWithWhereUniqueWithoutPromotion_discountInput], {
    nullable: true
  })
  upsert?: Promotion_discount_ruleUpsertWithWhereUniqueWithoutPromotion_discountInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleCreateManyPromotion_discountInputEnvelope, {
    nullable: true
  })
  createMany?: Promotion_discount_ruleCreateManyPromotion_discountInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleWhereUniqueInput], {
    nullable: true
  })
  set?: Promotion_discount_ruleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Promotion_discount_ruleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleWhereUniqueInput], {
    nullable: true
  })
  delete?: Promotion_discount_ruleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleWhereUniqueInput], {
    nullable: true
  })
  connect?: Promotion_discount_ruleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleUpdateWithWhereUniqueWithoutPromotion_discountInput], {
    nullable: true
  })
  update?: Promotion_discount_ruleUpdateWithWhereUniqueWithoutPromotion_discountInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleUpdateManyWithWhereWithoutPromotion_discountInput], {
    nullable: true
  })
  updateMany?: Promotion_discount_ruleUpdateManyWithWhereWithoutPromotion_discountInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Promotion_discount_ruleScalarWhereInput[] | undefined;
}
