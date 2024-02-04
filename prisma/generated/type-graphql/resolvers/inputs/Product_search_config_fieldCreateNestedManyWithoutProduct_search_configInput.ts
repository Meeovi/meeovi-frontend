import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_config_fieldCreateManyProduct_search_configInputEnvelope } from "../inputs/Product_search_config_fieldCreateManyProduct_search_configInputEnvelope";
import { Product_search_config_fieldCreateOrConnectWithoutProduct_search_configInput } from "../inputs/Product_search_config_fieldCreateOrConnectWithoutProduct_search_configInput";
import { Product_search_config_fieldCreateWithoutProduct_search_configInput } from "../inputs/Product_search_config_fieldCreateWithoutProduct_search_configInput";
import { Product_search_config_fieldWhereUniqueInput } from "../inputs/Product_search_config_fieldWhereUniqueInput";

@TypeGraphQL.InputType("Product_search_config_fieldCreateNestedManyWithoutProduct_search_configInput", {})
export class Product_search_config_fieldCreateNestedManyWithoutProduct_search_configInput {
  @TypeGraphQL.Field(_type => [Product_search_config_fieldCreateWithoutProduct_search_configInput], {
    nullable: true
  })
  create?: Product_search_config_fieldCreateWithoutProduct_search_configInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldCreateOrConnectWithoutProduct_search_configInput], {
    nullable: true
  })
  connectOrCreate?: Product_search_config_fieldCreateOrConnectWithoutProduct_search_configInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_search_config_fieldCreateManyProduct_search_configInputEnvelope, {
    nullable: true
  })
  createMany?: Product_search_config_fieldCreateManyProduct_search_configInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_search_config_fieldWhereUniqueInput[] | undefined;
}
