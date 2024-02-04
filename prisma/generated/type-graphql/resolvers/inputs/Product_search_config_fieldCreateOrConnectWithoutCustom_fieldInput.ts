import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_config_fieldCreateWithoutCustom_fieldInput } from "../inputs/Product_search_config_fieldCreateWithoutCustom_fieldInput";
import { Product_search_config_fieldWhereUniqueInput } from "../inputs/Product_search_config_fieldWhereUniqueInput";

@TypeGraphQL.InputType("Product_search_config_fieldCreateOrConnectWithoutCustom_fieldInput", {})
export class Product_search_config_fieldCreateOrConnectWithoutCustom_fieldInput {
  @TypeGraphQL.Field(_type => Product_search_config_fieldWhereUniqueInput, {
    nullable: false
  })
  where!: Product_search_config_fieldWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_search_config_fieldCreateWithoutCustom_fieldInput, {
    nullable: false
  })
  create!: Product_search_config_fieldCreateWithoutCustom_fieldInput;
}
