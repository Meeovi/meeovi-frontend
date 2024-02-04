import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_cart_ruleCreateManyPromotionInputEnvelope } from "../inputs/Promotion_cart_ruleCreateManyPromotionInputEnvelope";
import { Promotion_cart_ruleCreateOrConnectWithoutPromotionInput } from "../inputs/Promotion_cart_ruleCreateOrConnectWithoutPromotionInput";
import { Promotion_cart_ruleCreateWithoutPromotionInput } from "../inputs/Promotion_cart_ruleCreateWithoutPromotionInput";
import { Promotion_cart_ruleScalarWhereInput } from "../inputs/Promotion_cart_ruleScalarWhereInput";
import { Promotion_cart_ruleUpdateManyWithWhereWithoutPromotionInput } from "../inputs/Promotion_cart_ruleUpdateManyWithWhereWithoutPromotionInput";
import { Promotion_cart_ruleUpdateWithWhereUniqueWithoutPromotionInput } from "../inputs/Promotion_cart_ruleUpdateWithWhereUniqueWithoutPromotionInput";
import { Promotion_cart_ruleUpsertWithWhereUniqueWithoutPromotionInput } from "../inputs/Promotion_cart_ruleUpsertWithWhereUniqueWithoutPromotionInput";
import { Promotion_cart_ruleWhereUniqueInput } from "../inputs/Promotion_cart_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_cart_ruleUpdateManyWithoutPromotionNestedInput", {})
export class Promotion_cart_ruleUpdateManyWithoutPromotionNestedInput {
  @TypeGraphQL.Field(_type => [Promotion_cart_ruleCreateWithoutPromotionInput], {
    nullable: true
  })
  create?: Promotion_cart_ruleCreateWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleCreateOrConnectWithoutPromotionInput], {
    nullable: true
  })
  connectOrCreate?: Promotion_cart_ruleCreateOrConnectWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleUpsertWithWhereUniqueWithoutPromotionInput], {
    nullable: true
  })
  upsert?: Promotion_cart_ruleUpsertWithWhereUniqueWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleCreateManyPromotionInputEnvelope, {
    nullable: true
  })
  createMany?: Promotion_cart_ruleCreateManyPromotionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleWhereUniqueInput], {
    nullable: true
  })
  set?: Promotion_cart_ruleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Promotion_cart_ruleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleWhereUniqueInput], {
    nullable: true
  })
  delete?: Promotion_cart_ruleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleWhereUniqueInput], {
    nullable: true
  })
  connect?: Promotion_cart_ruleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleUpdateWithWhereUniqueWithoutPromotionInput], {
    nullable: true
  })
  update?: Promotion_cart_ruleUpdateWithWhereUniqueWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleUpdateManyWithWhereWithoutPromotionInput], {
    nullable: true
  })
  updateMany?: Promotion_cart_ruleUpdateManyWithWhereWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Promotion_cart_ruleScalarWhereInput[] | undefined;
}
