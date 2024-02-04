import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("product_search_config_fieldFieldProduct_search_config_idCompoundUniqueInput", {})
export class product_search_config_fieldFieldProduct_search_config_idCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  field!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  product_search_config_id!: Buffer;
}
