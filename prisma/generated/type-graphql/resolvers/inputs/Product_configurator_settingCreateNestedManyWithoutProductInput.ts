import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_configurator_settingCreateManyProductInputEnvelope } from "../inputs/Product_configurator_settingCreateManyProductInputEnvelope";
import { Product_configurator_settingCreateOrConnectWithoutProductInput } from "../inputs/Product_configurator_settingCreateOrConnectWithoutProductInput";
import { Product_configurator_settingCreateWithoutProductInput } from "../inputs/Product_configurator_settingCreateWithoutProductInput";
import { Product_configurator_settingWhereUniqueInput } from "../inputs/Product_configurator_settingWhereUniqueInput";

@TypeGraphQL.InputType("Product_configurator_settingCreateNestedManyWithoutProductInput", {})
export class Product_configurator_settingCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Product_configurator_settingCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_configurator_settingCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_configurator_settingCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_configurator_settingCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_configurator_settingWhereUniqueInput[] | undefined;
}
