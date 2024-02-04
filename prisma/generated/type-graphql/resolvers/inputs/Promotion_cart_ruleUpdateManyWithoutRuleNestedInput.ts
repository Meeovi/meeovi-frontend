import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_cart_ruleCreateManyRuleInputEnvelope } from "../inputs/Promotion_cart_ruleCreateManyRuleInputEnvelope";
import { Promotion_cart_ruleCreateOrConnectWithoutRuleInput } from "../inputs/Promotion_cart_ruleCreateOrConnectWithoutRuleInput";
import { Promotion_cart_ruleCreateWithoutRuleInput } from "../inputs/Promotion_cart_ruleCreateWithoutRuleInput";
import { Promotion_cart_ruleScalarWhereInput } from "../inputs/Promotion_cart_ruleScalarWhereInput";
import { Promotion_cart_ruleUpdateManyWithWhereWithoutRuleInput } from "../inputs/Promotion_cart_ruleUpdateManyWithWhereWithoutRuleInput";
import { Promotion_cart_ruleUpdateWithWhereUniqueWithoutRuleInput } from "../inputs/Promotion_cart_ruleUpdateWithWhereUniqueWithoutRuleInput";
import { Promotion_cart_ruleUpsertWithWhereUniqueWithoutRuleInput } from "../inputs/Promotion_cart_ruleUpsertWithWhereUniqueWithoutRuleInput";
import { Promotion_cart_ruleWhereUniqueInput } from "../inputs/Promotion_cart_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_cart_ruleUpdateManyWithoutRuleNestedInput", {})
export class Promotion_cart_ruleUpdateManyWithoutRuleNestedInput {
  @TypeGraphQL.Field(_type => [Promotion_cart_ruleCreateWithoutRuleInput], {
    nullable: true
  })
  create?: Promotion_cart_ruleCreateWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleCreateOrConnectWithoutRuleInput], {
    nullable: true
  })
  connectOrCreate?: Promotion_cart_ruleCreateOrConnectWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleUpsertWithWhereUniqueWithoutRuleInput], {
    nullable: true
  })
  upsert?: Promotion_cart_ruleUpsertWithWhereUniqueWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleCreateManyRuleInputEnvelope, {
    nullable: true
  })
  createMany?: Promotion_cart_ruleCreateManyRuleInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleUpdateWithWhereUniqueWithoutRuleInput], {
    nullable: true
  })
  update?: Promotion_cart_ruleUpdateWithWhereUniqueWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleUpdateManyWithWhereWithoutRuleInput], {
    nullable: true
  })
  updateMany?: Promotion_cart_ruleUpdateManyWithWhereWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Promotion_cart_ruleScalarWhereInput[] | undefined;
}
