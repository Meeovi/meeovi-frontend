import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_custom_field_setScalarWhereInput } from "../inputs/Product_custom_field_setScalarWhereInput";
import { Product_custom_field_setUpdateManyMutationInput } from "../inputs/Product_custom_field_setUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_custom_field_setUpdateManyWithWhereWithoutProductInput", {})
export class Product_custom_field_setUpdateManyWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_custom_field_setScalarWhereInput, {
    nullable: false
  })
  where!: Product_custom_field_setScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_custom_field_setUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_custom_field_setUpdateManyMutationInput;
}
