import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_custom_field_setInput } from "../inputs/ProductCreateOrConnectWithoutProduct_custom_field_setInput";
import { ProductCreateWithoutProduct_custom_field_setInput } from "../inputs/ProductCreateWithoutProduct_custom_field_setInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutProduct_custom_field_setInput", {})
export class ProductCreateNestedOneWithoutProduct_custom_field_setInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_custom_field_setInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_custom_field_setInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_custom_field_setInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_custom_field_setInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
