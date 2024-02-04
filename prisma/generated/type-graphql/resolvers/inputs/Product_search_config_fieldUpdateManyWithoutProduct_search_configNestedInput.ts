import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_config_fieldCreateManyProduct_search_configInputEnvelope } from "../inputs/Product_search_config_fieldCreateManyProduct_search_configInputEnvelope";
import { Product_search_config_fieldCreateOrConnectWithoutProduct_search_configInput } from "../inputs/Product_search_config_fieldCreateOrConnectWithoutProduct_search_configInput";
import { Product_search_config_fieldCreateWithoutProduct_search_configInput } from "../inputs/Product_search_config_fieldCreateWithoutProduct_search_configInput";
import { Product_search_config_fieldScalarWhereInput } from "../inputs/Product_search_config_fieldScalarWhereInput";
import { Product_search_config_fieldUpdateManyWithWhereWithoutProduct_search_configInput } from "../inputs/Product_search_config_fieldUpdateManyWithWhereWithoutProduct_search_configInput";
import { Product_search_config_fieldUpdateWithWhereUniqueWithoutProduct_search_configInput } from "../inputs/Product_search_config_fieldUpdateWithWhereUniqueWithoutProduct_search_configInput";
import { Product_search_config_fieldUpsertWithWhereUniqueWithoutProduct_search_configInput } from "../inputs/Product_search_config_fieldUpsertWithWhereUniqueWithoutProduct_search_configInput";
import { Product_search_config_fieldWhereUniqueInput } from "../inputs/Product_search_config_fieldWhereUniqueInput";

@TypeGraphQL.InputType("Product_search_config_fieldUpdateManyWithoutProduct_search_configNestedInput", {})
export class Product_search_config_fieldUpdateManyWithoutProduct_search_configNestedInput {
  @TypeGraphQL.Field(_type => [Product_search_config_fieldCreateWithoutProduct_search_configInput], {
    nullable: true
  })
  create?: Product_search_config_fieldCreateWithoutProduct_search_configInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldCreateOrConnectWithoutProduct_search_configInput], {
    nullable: true
  })
  connectOrCreate?: Product_search_config_fieldCreateOrConnectWithoutProduct_search_configInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldUpsertWithWhereUniqueWithoutProduct_search_configInput], {
    nullable: true
  })
  upsert?: Product_search_config_fieldUpsertWithWhereUniqueWithoutProduct_search_configInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_search_config_fieldCreateManyProduct_search_configInputEnvelope, {
    nullable: true
  })
  createMany?: Product_search_config_fieldCreateManyProduct_search_configInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldWhereUniqueInput], {
    nullable: true
  })
  set?: Product_search_config_fieldWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_search_config_fieldWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_search_config_fieldWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_search_config_fieldWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldUpdateWithWhereUniqueWithoutProduct_search_configInput], {
    nullable: true
  })
  update?: Product_search_config_fieldUpdateWithWhereUniqueWithoutProduct_search_configInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldUpdateManyWithWhereWithoutProduct_search_configInput], {
    nullable: true
  })
  updateMany?: Product_search_config_fieldUpdateManyWithWhereWithoutProduct_search_configInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_search_config_fieldScalarWhereInput[] | undefined;
}
