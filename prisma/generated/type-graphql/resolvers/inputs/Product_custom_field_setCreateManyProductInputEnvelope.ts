import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_custom_field_setCreateManyProductInput } from "../inputs/Product_custom_field_setCreateManyProductInput";

@TypeGraphQL.InputType("Product_custom_field_setCreateManyProductInputEnvelope", {})
export class Product_custom_field_setCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_custom_field_setCreateManyProductInput], {
    nullable: false
  })
  data!: Product_custom_field_setCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
