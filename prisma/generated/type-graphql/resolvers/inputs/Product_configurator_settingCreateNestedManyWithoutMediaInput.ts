import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_configurator_settingCreateManyMediaInputEnvelope } from "../inputs/Product_configurator_settingCreateManyMediaInputEnvelope";
import { Product_configurator_settingCreateOrConnectWithoutMediaInput } from "../inputs/Product_configurator_settingCreateOrConnectWithoutMediaInput";
import { Product_configurator_settingCreateWithoutMediaInput } from "../inputs/Product_configurator_settingCreateWithoutMediaInput";
import { Product_configurator_settingWhereUniqueInput } from "../inputs/Product_configurator_settingWhereUniqueInput";

@TypeGraphQL.InputType("Product_configurator_settingCreateNestedManyWithoutMediaInput", {})
export class Product_configurator_settingCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [Product_configurator_settingCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Product_configurator_settingCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Product_configurator_settingCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Product_configurator_settingCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_configurator_settingWhereUniqueInput[] | undefined;
}
