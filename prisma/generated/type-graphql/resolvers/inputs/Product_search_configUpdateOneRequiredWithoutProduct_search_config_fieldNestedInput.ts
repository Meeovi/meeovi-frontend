import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_configCreateOrConnectWithoutProduct_search_config_fieldInput } from "../inputs/Product_search_configCreateOrConnectWithoutProduct_search_config_fieldInput";
import { Product_search_configCreateWithoutProduct_search_config_fieldInput } from "../inputs/Product_search_configCreateWithoutProduct_search_config_fieldInput";
import { Product_search_configUpdateToOneWithWhereWithoutProduct_search_config_fieldInput } from "../inputs/Product_search_configUpdateToOneWithWhereWithoutProduct_search_config_fieldInput";
import { Product_search_configUpsertWithoutProduct_search_config_fieldInput } from "../inputs/Product_search_configUpsertWithoutProduct_search_config_fieldInput";
import { Product_search_configWhereUniqueInput } from "../inputs/Product_search_configWhereUniqueInput";

@TypeGraphQL.InputType("Product_search_configUpdateOneRequiredWithoutProduct_search_config_fieldNestedInput", {})
export class Product_search_configUpdateOneRequiredWithoutProduct_search_config_fieldNestedInput {
  @TypeGraphQL.Field(_type => Product_search_configCreateWithoutProduct_search_config_fieldInput, {
    nullable: true
  })
  create?: Product_search_configCreateWithoutProduct_search_config_fieldInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configCreateOrConnectWithoutProduct_search_config_fieldInput, {
    nullable: true
  })
  connectOrCreate?: Product_search_configCreateOrConnectWithoutProduct_search_config_fieldInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configUpsertWithoutProduct_search_config_fieldInput, {
    nullable: true
  })
  upsert?: Product_search_configUpsertWithoutProduct_search_config_fieldInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_search_configWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configUpdateToOneWithWhereWithoutProduct_search_config_fieldInput, {
    nullable: true
  })
  update?: Product_search_configUpdateToOneWithWhereWithoutProduct_search_config_fieldInput | undefined;
}
