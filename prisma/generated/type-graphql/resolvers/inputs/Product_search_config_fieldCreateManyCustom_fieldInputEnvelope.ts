import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_config_fieldCreateManyCustom_fieldInput } from "../inputs/Product_search_config_fieldCreateManyCustom_fieldInput";

@TypeGraphQL.InputType("Product_search_config_fieldCreateManyCustom_fieldInputEnvelope", {})
export class Product_search_config_fieldCreateManyCustom_fieldInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_search_config_fieldCreateManyCustom_fieldInput], {
    nullable: false
  })
  data!: Product_search_config_fieldCreateManyCustom_fieldInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
