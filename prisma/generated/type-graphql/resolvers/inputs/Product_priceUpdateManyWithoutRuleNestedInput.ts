import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_priceCreateManyRuleInputEnvelope } from "../inputs/Product_priceCreateManyRuleInputEnvelope";
import { Product_priceCreateOrConnectWithoutRuleInput } from "../inputs/Product_priceCreateOrConnectWithoutRuleInput";
import { Product_priceCreateWithoutRuleInput } from "../inputs/Product_priceCreateWithoutRuleInput";
import { Product_priceScalarWhereInput } from "../inputs/Product_priceScalarWhereInput";
import { Product_priceUpdateManyWithWhereWithoutRuleInput } from "../inputs/Product_priceUpdateManyWithWhereWithoutRuleInput";
import { Product_priceUpdateWithWhereUniqueWithoutRuleInput } from "../inputs/Product_priceUpdateWithWhereUniqueWithoutRuleInput";
import { Product_priceUpsertWithWhereUniqueWithoutRuleInput } from "../inputs/Product_priceUpsertWithWhereUniqueWithoutRuleInput";
import { Product_priceWhereUniqueInput } from "../inputs/Product_priceWhereUniqueInput";

@TypeGraphQL.InputType("Product_priceUpdateManyWithoutRuleNestedInput", {})
export class Product_priceUpdateManyWithoutRuleNestedInput {
  @TypeGraphQL.Field(_type => [Product_priceCreateWithoutRuleInput], {
    nullable: true
  })
  create?: Product_priceCreateWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceCreateOrConnectWithoutRuleInput], {
    nullable: true
  })
  connectOrCreate?: Product_priceCreateOrConnectWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceUpsertWithWhereUniqueWithoutRuleInput], {
    nullable: true
  })
  upsert?: Product_priceUpsertWithWhereUniqueWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_priceCreateManyRuleInputEnvelope, {
    nullable: true
  })
  createMany?: Product_priceCreateManyRuleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_priceWhereUniqueInput], {
    nullable: true
  })
  set?: Product_priceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_priceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_priceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_priceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceUpdateWithWhereUniqueWithoutRuleInput], {
    nullable: true
  })
  update?: Product_priceUpdateWithWhereUniqueWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceUpdateManyWithWhereWithoutRuleInput], {
    nullable: true
  })
  updateMany?: Product_priceUpdateManyWithWhereWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_priceScalarWhereInput[] | undefined;
}
