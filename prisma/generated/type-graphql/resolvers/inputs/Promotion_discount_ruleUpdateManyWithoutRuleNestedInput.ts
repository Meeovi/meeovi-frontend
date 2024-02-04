import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_ruleCreateManyRuleInputEnvelope } from "../inputs/Promotion_discount_ruleCreateManyRuleInputEnvelope";
import { Promotion_discount_ruleCreateOrConnectWithoutRuleInput } from "../inputs/Promotion_discount_ruleCreateOrConnectWithoutRuleInput";
import { Promotion_discount_ruleCreateWithoutRuleInput } from "../inputs/Promotion_discount_ruleCreateWithoutRuleInput";
import { Promotion_discount_ruleScalarWhereInput } from "../inputs/Promotion_discount_ruleScalarWhereInput";
import { Promotion_discount_ruleUpdateManyWithWhereWithoutRuleInput } from "../inputs/Promotion_discount_ruleUpdateManyWithWhereWithoutRuleInput";
import { Promotion_discount_ruleUpdateWithWhereUniqueWithoutRuleInput } from "../inputs/Promotion_discount_ruleUpdateWithWhereUniqueWithoutRuleInput";
import { Promotion_discount_ruleUpsertWithWhereUniqueWithoutRuleInput } from "../inputs/Promotion_discount_ruleUpsertWithWhereUniqueWithoutRuleInput";
import { Promotion_discount_ruleWhereUniqueInput } from "../inputs/Promotion_discount_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_discount_ruleUpdateManyWithoutRuleNestedInput", {})
export class Promotion_discount_ruleUpdateManyWithoutRuleNestedInput {
  @TypeGraphQL.Field(_type => [Promotion_discount_ruleCreateWithoutRuleInput], {
    nullable: true
  })
  create?: Promotion_discount_ruleCreateWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleCreateOrConnectWithoutRuleInput], {
    nullable: true
  })
  connectOrCreate?: Promotion_discount_ruleCreateOrConnectWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleUpsertWithWhereUniqueWithoutRuleInput], {
    nullable: true
  })
  upsert?: Promotion_discount_ruleUpsertWithWhereUniqueWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleCreateManyRuleInputEnvelope, {
    nullable: true
  })
  createMany?: Promotion_discount_ruleCreateManyRuleInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleUpdateWithWhereUniqueWithoutRuleInput], {
    nullable: true
  })
  update?: Promotion_discount_ruleUpdateWithWhereUniqueWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleUpdateManyWithWhereWithoutRuleInput], {
    nullable: true
  })
  updateMany?: Promotion_discount_ruleUpdateManyWithWhereWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Promotion_discount_ruleScalarWhereInput[] | undefined;
}
