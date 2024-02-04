import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_config_fieldCreateManyProduct_search_configInput } from "../inputs/Product_search_config_fieldCreateManyProduct_search_configInput";

@TypeGraphQL.InputType("Product_search_config_fieldCreateManyProduct_search_configInputEnvelope", {})
export class Product_search_config_fieldCreateManyProduct_search_configInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_search_config_fieldCreateManyProduct_search_configInput], {
    nullable: false
  })
  data!: Product_search_config_fieldCreateManyProduct_search_configInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
