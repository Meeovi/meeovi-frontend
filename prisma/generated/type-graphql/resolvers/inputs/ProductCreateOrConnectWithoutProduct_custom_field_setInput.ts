import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_custom_field_setInput } from "../inputs/ProductCreateWithoutProduct_custom_field_setInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutProduct_custom_field_setInput", {})
export class ProductCreateOrConnectWithoutProduct_custom_field_setInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_custom_field_setInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_custom_field_setInput;
}
