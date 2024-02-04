import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_priceCreateManyRuleInputEnvelope } from "../inputs/Product_priceCreateManyRuleInputEnvelope";
import { Product_priceCreateOrConnectWithoutRuleInput } from "../inputs/Product_priceCreateOrConnectWithoutRuleInput";
import { Product_priceCreateWithoutRuleInput } from "../inputs/Product_priceCreateWithoutRuleInput";
import { Product_priceWhereUniqueInput } from "../inputs/Product_priceWhereUniqueInput";

@TypeGraphQL.InputType("Product_priceCreateNestedManyWithoutRuleInput", {})
export class Product_priceCreateNestedManyWithoutRuleInput {
  @TypeGraphQL.Field(_type => [Product_priceCreateWithoutRuleInput], {
    nullable: true
  })
  create?: Product_priceCreateWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceCreateOrConnectWithoutRuleInput], {
    nullable: true
  })
  connectOrCreate?: Product_priceCreateOrConnectWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_priceCreateManyRuleInputEnvelope, {
    nullable: true
  })
  createMany?: Product_priceCreateManyRuleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_priceWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_priceWhereUniqueInput[] | undefined;
}
