import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_configurator_settingCreateManyMediaInputEnvelope } from "../inputs/Product_configurator_settingCreateManyMediaInputEnvelope";
import { Product_configurator_settingCreateOrConnectWithoutMediaInput } from "../inputs/Product_configurator_settingCreateOrConnectWithoutMediaInput";
import { Product_configurator_settingCreateWithoutMediaInput } from "../inputs/Product_configurator_settingCreateWithoutMediaInput";
import { Product_configurator_settingScalarWhereInput } from "../inputs/Product_configurator_settingScalarWhereInput";
import { Product_configurator_settingUpdateManyWithWhereWithoutMediaInput } from "../inputs/Product_configurator_settingUpdateManyWithWhereWithoutMediaInput";
import { Product_configurator_settingUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/Product_configurator_settingUpdateWithWhereUniqueWithoutMediaInput";
import { Product_configurator_settingUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/Product_configurator_settingUpsertWithWhereUniqueWithoutMediaInput";
import { Product_configurator_settingWhereUniqueInput } from "../inputs/Product_configurator_settingWhereUniqueInput";

@TypeGraphQL.InputType("Product_configurator_settingUpdateManyWithoutMediaNestedInput", {})
export class Product_configurator_settingUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [Product_configurator_settingCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Product_configurator_settingCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Product_configurator_settingCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: Product_configurator_settingUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Product_configurator_settingCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingWhereUniqueInput], {
    nullable: true
  })
  set?: Product_configurator_settingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_configurator_settingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_configurator_settingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_configurator_settingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: Product_configurator_settingUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: Product_configurator_settingUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_configurator_settingScalarWhereInput[] | undefined;
}
