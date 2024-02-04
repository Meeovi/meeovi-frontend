import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_config_fieldCreateManyCustom_fieldInputEnvelope } from "../inputs/Product_search_config_fieldCreateManyCustom_fieldInputEnvelope";
import { Product_search_config_fieldCreateOrConnectWithoutCustom_fieldInput } from "../inputs/Product_search_config_fieldCreateOrConnectWithoutCustom_fieldInput";
import { Product_search_config_fieldCreateWithoutCustom_fieldInput } from "../inputs/Product_search_config_fieldCreateWithoutCustom_fieldInput";
import { Product_search_config_fieldScalarWhereInput } from "../inputs/Product_search_config_fieldScalarWhereInput";
import { Product_search_config_fieldUpdateManyWithWhereWithoutCustom_fieldInput } from "../inputs/Product_search_config_fieldUpdateManyWithWhereWithoutCustom_fieldInput";
import { Product_search_config_fieldUpdateWithWhereUniqueWithoutCustom_fieldInput } from "../inputs/Product_search_config_fieldUpdateWithWhereUniqueWithoutCustom_fieldInput";
import { Product_search_config_fieldUpsertWithWhereUniqueWithoutCustom_fieldInput } from "../inputs/Product_search_config_fieldUpsertWithWhereUniqueWithoutCustom_fieldInput";
import { Product_search_config_fieldWhereUniqueInput } from "../inputs/Product_search_config_fieldWhereUniqueInput";

@TypeGraphQL.InputType("Product_search_config_fieldUpdateManyWithoutCustom_fieldNestedInput", {})
export class Product_search_config_fieldUpdateManyWithoutCustom_fieldNestedInput {
  @TypeGraphQL.Field(_type => [Product_search_config_fieldCreateWithoutCustom_fieldInput], {
    nullable: true
  })
  create?: Product_search_config_fieldCreateWithoutCustom_fieldInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldCreateOrConnectWithoutCustom_fieldInput], {
    nullable: true
  })
  connectOrCreate?: Product_search_config_fieldCreateOrConnectWithoutCustom_fieldInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldUpsertWithWhereUniqueWithoutCustom_fieldInput], {
    nullable: true
  })
  upsert?: Product_search_config_fieldUpsertWithWhereUniqueWithoutCustom_fieldInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_search_config_fieldCreateManyCustom_fieldInputEnvelope, {
    nullable: true
  })
  createMany?: Product_search_config_fieldCreateManyCustom_fieldInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Product_search_config_fieldUpdateWithWhereUniqueWithoutCustom_fieldInput], {
    nullable: true
  })
  update?: Product_search_config_fieldUpdateWithWhereUniqueWithoutCustom_fieldInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldUpdateManyWithWhereWithoutCustom_fieldInput], {
    nullable: true
  })
  updateMany?: Product_search_config_fieldUpdateManyWithWhereWithoutCustom_fieldInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_search_config_fieldScalarWhereInput[] | undefined;
}
