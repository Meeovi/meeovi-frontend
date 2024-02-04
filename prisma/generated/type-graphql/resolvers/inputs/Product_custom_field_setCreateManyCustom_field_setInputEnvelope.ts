import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_custom_field_setCreateManyCustom_field_setInput } from "../inputs/Product_custom_field_setCreateManyCustom_field_setInput";

@TypeGraphQL.InputType("Product_custom_field_setCreateManyCustom_field_setInputEnvelope", {})
export class Product_custom_field_setCreateManyCustom_field_setInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_custom_field_setCreateManyCustom_field_setInput], {
    nullable: false
  })
  data!: Product_custom_field_setCreateManyCustom_field_setInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
